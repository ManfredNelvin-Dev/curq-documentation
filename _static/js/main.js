// Language Switcher Logic
async function switchLanguage(lang) {
    const currentPath = window.location.pathname;

    localStorage.setItem('preferred_lang', lang);

    const defaultLang = (window.CURQ_CONFIG && window.CURQ_CONFIG.defaultLang) ? window.CURQ_CONFIG.defaultLang : 'en';
    const supportedLangs = (window.CURQ_CONFIG && window.CURQ_CONFIG.supportedLangs) ? window.CURQ_CONFIG.supportedLangs : [];
    let targetPath = currentPath;

    let currentLangPrefix = null;
    for (const l of supportedLangs) {
        if (new RegExp(`^/${l}/|/${l}/`).test(currentPath)) {
            currentLangPrefix = l;
            break;
        }
    }

    if (lang === defaultLang) {
        if (currentLangPrefix) {
            targetPath = currentPath.replace(`/${currentLangPrefix}/`, '/');
        }
    } else {
        if (currentLangPrefix) {
            targetPath = currentPath.replace(`/${currentLangPrefix}/`, `/${lang}/`);
        } else {
            targetPath = `/${lang}` + currentPath;
        }
    }

    if (targetPath === currentPath) {
        return;
    }

    if (window.location.protocol === 'file:') {
        window.location.href = targetPath + window.location.search;
        return;
    }

    try {
        const response = await fetch(targetPath, { method: 'HEAD' });
        if (response.ok) {
            window.location.href = targetPath + window.location.search;
        } else {
            console.warn("Target translation not found, staying on current page.");
            if (lang === defaultLang) {
                window.location.href = window.CURQ_CONFIG ? window.CURQ_CONFIG.homeUrl : '/index.html';
            }
        }
    } catch (e) {
        console.warn("Could not fetch target translation, bypassing check.");
        window.location.href = targetPath + window.location.search;
    }
}

function cleanHeadingNumbers() {
    const bodyHeadings = document.querySelectorAll('.sphinx-content h2, .sphinx-content h3');
    bodyHeadings.forEach(h => {
        Array.from(h.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = node.nodeValue.replace(/^\s*\d+\.\s*/, '');
            }
        });
    });

    const tocLinks = document.querySelectorAll('.right-sidebar .toc-container a');
    tocLinks.forEach(a => {
        Array.from(a.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = node.nodeValue.replace(/^\s*\d+\.\s*/, '');
            }
        });
    });
}

function initSidebarScroll() {
    const sidebarContent = document.querySelector('.sidebar-content');
    if (!sidebarContent) return;

    const savedPos = sessionStorage.getItem('sidebar_scroll_position');
    if (savedPos !== null) {
        sidebarContent.scrollTop = parseInt(savedPos, 10);
    } else {
        const activeItem = sidebarContent.querySelector('.submenu-item.active');
        if (activeItem) {
            activeItem.scrollIntoView({ block: 'center', behavior: 'instant' });
        }
    }

    const savePos = () => {
        sessionStorage.setItem('sidebar_scroll_position', sidebarContent.scrollTop);
    };

    sidebarContent.addEventListener('scroll', debounce(savePos, 100), { passive: true });

    sidebarContent.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            savePos();
        }
    });
}

function initSidebarMenu() {
    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang) {
        document.querySelectorAll('.language-selector').forEach(sel => {
            sel.value = savedLang;
        });
    }

    document.querySelectorAll('.nested-submenu').forEach(sub => {
        if (sub.querySelector('.submenu-item.active')) {
            sub.style.display = 'block';
            const catHeader = sub.previousElementSibling;
            if (catHeader && catHeader.classList.contains('submenu-category')) {
                const icon = catHeader.querySelector('.cat-icon');
                if (icon) {
                    icon.classList.remove('fa-chevron-right');
                    icon.classList.add('fa-chevron-down');
                }
            }
        }
    });

    const sidebarContent = document.querySelector('.sidebar-content');
    if (!sidebarContent) return;

    sidebarContent.addEventListener('click', (e) => {
        const title = e.target.closest('.menu-title');
        if (title && sidebarContent.contains(title)) {
            const group = title.closest('.menu-group');
            const icon = title.querySelector('.toggle-icon');
            if (group) {
                group.classList.toggle('open');
                if (icon) {
                    const isOpen = group.classList.contains('open');
                    icon.classList.toggle('fa-chevron-down', isOpen);
                    icon.classList.toggle('fa-chevron-right', !isOpen);
                }
            }
            return;
        }

        const item = e.target.closest('.submenu-item');
        if (item && sidebarContent.contains(item)) {
            const href = item.getAttribute('href');
            if (!href || href === '#') {
                e.preventDefault();
            }
            sessionStorage.setItem('sidebar_scroll_position', sidebarContent.scrollTop);
            sidebarContent.querySelectorAll('.submenu-item.active').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        }
    });
}

// Category Toggle
function toggleCategory(element) {
    const submenu = element.nextElementSibling;
    const icon = element.querySelector('.cat-icon');
    if (!submenu) return;

    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
        if (icon) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        }
    } else {
        submenu.style.display = 'none';
        if (icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
    }
}

// ==========================================
// CURQ Documentation Advanced Search Engine
// ==========================================

const searchCache = new Map();

// Helper to debounce high-frequency input events
function debounce(func, delay = 200) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// 1. Path & Metadata Extraction
function parseDocMetadata(docname) {
    const parts = docname.split('/');
    let moduleName = 'General';
    let sectionName = 'Article';

    if (parts.length >= 2 && parts[0] === 'docs') {
        const p1 = parts[1].toLowerCase();
        if (p1 === 'faq') {
            return { module: 'General', section: 'FAQ', metaLine: 'FAQ · General' };
        } else if (p1 === 'support') {
            return { module: 'Support', section: 'Contact', metaLine: 'Contact · Support' };
        }
        moduleName = parts[1];
        if (parts.length >= 3) {
            const rawSec = parts[2].toLowerCase();
            if (rawSec === 'manual') sectionName = 'Manual';
            else if (rawSec === 'articles' || rawSec === 'article') sectionName = 'Article';
            else if (rawSec === 'faq' || rawSec === 'faqs') sectionName = 'FAQ';
            else if (rawSec === 'procedures' || rawSec === 'procedure') sectionName = 'Procedure';
            else sectionName = rawSec.charAt(0).toUpperCase() + rawSec.slice(1);
        }
    }

    return {
        module: moduleName,
        section: sectionName,
        metaLine: `${sectionName} · ${moduleName}`
    };
}

// Strip leading numbers from title for cleaner display (e.g. "1. Access ..." -> "Access ...")
function cleanTitle(title) {
    if (!title) return '';
    return title.replace(/^\d+\.\s*/, '').trim();
}

// 2. Highlighting Utility
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightText(text, tokens) {
    if (!text) return '';
    const escapeHtml = (str) => str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    if (!tokens || tokens.length === 0) return escapeHtml(text);

    const validTokens = tokens.map(t => typeof t === 'string' ? t.trim() : '').filter(t => t.length > 0);
    if (validTokens.length === 0) return escapeHtml(text);

    const intervals = [];
    validTokens.forEach(token => {
        const regex = new RegExp(escapeRegExp(token), 'gi');
        let match;
        while ((match = regex.exec(text)) !== null) {
            intervals.push([match.index, match.index + match[0].length]);
            if (regex.lastIndex === match.index) {
                regex.lastIndex++;
            }
        }
    });

    if (intervals.length === 0) return escapeHtml(text);

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        const curr = intervals[i];
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            merged.push(curr);
        }
    }

    let result = '';
    let lastIndex = 0;
    merged.forEach(([start, end]) => {
        result += escapeHtml(text.slice(lastIndex, start));
        result += '<mark class="search-highlight">' + escapeHtml(text.slice(start, end)) + '</mark>';
        lastIndex = end;
    });
    result += escapeHtml(text.slice(lastIndex));

    return result;
}

// 3. Search Engine Algorithm & Scoring System
let sphinxSearchIndex = null;
let precomputedDocs = null;
let docHeadings = null;

window.Search = {
    setIndex: function (index) {
        sphinxSearchIndex = index;
        if (!index || !index.docnames) return;

        const docCount = index.docnames.length;
        precomputedDocs = new Array(docCount);
        docHeadings = Array.from({ length: docCount }, () => []);

        for (let d = 0; d < docCount; d++) {
            const rawTitle = index.titles[d] || '';
            const title = cleanTitle(rawTitle);
            const docname = index.docnames[d] || '';
            precomputedDocs[d] = {
                title,
                titleLower: title.toLowerCase(),
                docname,
                meta: parseDocMetadata(docname)
            };
        }

        if (index.alltitles) {
            for (const headingText in index.alltitles) {
                const cleanHead = cleanTitle(headingText);
                const headLower = cleanHead.toLowerCase();
                const entries = index.alltitles[headingText];
                for (let i = 0; i < entries.length; i++) {
                    const docId = entries[i][0];
                    if (docHeadings[docId]) {
                        docHeadings[docId].push({ cleanHead, headLower });
                    }
                }
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if (window.CURQ_CONFIG && window.CURQ_CONFIG.searchIndexUrl) {
        const script = document.createElement('script');
        script.src = window.CURQ_CONFIG.searchIndexUrl;
        document.head.appendChild(script);
    }
});

function searchDocumentation(rawQuery) {
    const query = rawQuery.trim().toLowerCase();
    if (!query) return [];

    if (searchCache.has(query)) {
        return searchCache.get(query);
    }

    if (!sphinxSearchIndex || !sphinxSearchIndex.docnames || !precomputedDocs) {
        return [];
    }

    const qTokens = query.split(/\s+/).filter(t => t.length > 0);
    if (qTokens.length === 0) return [];

    const results = [];
    const docCount = sphinxSearchIndex.docnames.length;

    const tokenData = qTokens.map(qToken => {
        const titletermScores = new Int32Array(docCount);
        const termScores = new Int32Array(docCount);
        const termMatches = [];

        if (sphinxSearchIndex.titleterms) {
            for (const term in sphinxSearchIndex.titleterms) {
                let score = 0;
                if (term === qToken) score = 30;
                else if (qToken.length >= 2 && term.startsWith(qToken)) score = 20;
                if (score > 0) {
                    const docs = sphinxSearchIndex.titleterms[term];
                    if (Array.isArray(docs)) {
                        for (let i = 0; i < docs.length; i++) {
                            titletermScores[docs[i]] += score;
                        }
                    } else {
                        titletermScores[docs] += score;
                    }
                }
            }
        }

        if (sphinxSearchIndex.terms) {
            for (const term in sphinxSearchIndex.terms) {
                let score = 0;
                if (term === qToken) score = 20;
                else if (qToken.length >= 2 && term.startsWith(qToken)) score = 10;
                if (score > 0) {
                    const docs = sphinxSearchIndex.terms[term];
                    termMatches.push({ term, docs });
                    if (Array.isArray(docs)) {
                        for (let i = 0; i < docs.length; i++) {
                            termScores[docs[i]] += score;
                        }
                    } else {
                        termScores[docs] += score;
                    }
                }
            }
        }

        return { qToken, titletermScores, termScores, termMatches };
    });

    for (let docId = 0; docId < docCount; docId++) {
        const doc = precomputedDocs[docId];
        let totalScore = 0;
        let matchedTokensCount = 0;
        let matchedHeading = null;
        let matchedTermList = [];
        const headings = docHeadings[docId];

        tokenData.forEach(td => {
            const qToken = td.qToken;
            let tokenScore = 0;
            let tokenMatched = false;

            if (doc.titleLower === query) { tokenScore += 100; tokenMatched = true; }
            else if (doc.titleLower === qToken) { tokenScore += 90; tokenMatched = true; }
            else if (doc.titleLower.startsWith(query)) { tokenScore += 80; tokenMatched = true; }
            else if (doc.titleLower.startsWith(qToken)) { tokenScore += 70; tokenMatched = true; }
            else if (doc.titleLower.includes(query)) { tokenScore += 60; tokenMatched = true; }
            else if (doc.titleLower.includes(qToken)) { tokenScore += 50; tokenMatched = true; }

            if (headings && headings.length > 0) {
                for (let i = 0; i < headings.length; i++) {
                    const h = headings[i];
                    if (h.headLower === qToken || h.headLower === query) {
                        tokenScore += 40; tokenMatched = true; matchedHeading = h.cleanHead;
                    } else if (h.headLower.startsWith(qToken)) {
                        tokenScore += 35; tokenMatched = true; if (!matchedHeading) matchedHeading = h.cleanHead;
                    } else if (h.headLower.includes(qToken)) {
                        tokenScore += 30; tokenMatched = true; if (!matchedHeading) matchedHeading = h.cleanHead;
                    }
                }
            }

            const ttScore = td.titletermScores[docId];
            if (ttScore > 0) {
                tokenScore += ttScore;
                tokenMatched = true;
            }

            const tScore = td.termScores[docId];
            if (tScore > 0) {
                tokenScore += tScore;
                tokenMatched = true;
                for (let m = 0; m < td.termMatches.length; m++) {
                    const tm = td.termMatches[m];
                    const docs = tm.docs;
                    if (Array.isArray(docs) ? docs.includes(docId) : docs === docId) {
                        matchedTermList.push(tm.term);
                    }
                }
            }

            if (tokenMatched) { matchedTokensCount++; totalScore += tokenScore; }
        });

        if (qTokens.length > 1 && matchedTokensCount === qTokens.length) totalScore += 50;

        if (totalScore > 0) {
            let snippet = '';
            if (matchedHeading) {
                snippet = `Section: ${matchedHeading}`;
            } else if (matchedTermList.length > 0) {
                const termsPreview = [...new Set(matchedTermList)].slice(0, 3).join(', ');
                snippet = `Contains relevant guidance regarding ${termsPreview} in ${doc.meta.module}.`;
            } else {
                snippet = `Documentation resource for ${doc.meta.section} in ${doc.meta.module}.`;
            }

            const base_url = window.CURQ_CONFIG ? window.CURQ_CONFIG.baseUrl : '/';
            const url = base_url + doc.docname + '.html';

            results.push({
                docId,
                title: doc.title,
                docname: doc.docname,
                meta: doc.meta,
                score: totalScore,
                snippet,
                url,
                tokens: qTokens
            });
        }
    }

    results.sort((a, b) => b.score - a.score);

    const topResults = results.slice(0, 15);
    searchCache.set(query, topResults);
    return topResults;
}

// 4. Render Results Card HTML
function renderSearchResults(results, labelElement, resultsContainer, query) {
    if (!query || query.trim().length === 0) {
        labelElement.textContent = "SEARCH";
        resultsContainer.innerHTML = "";
        return;
    }

    labelElement.textContent = `RESULTS FOR "${query.toUpperCase()}"`;

    if (!sphinxSearchIndex) {
        resultsContainer.innerHTML = '<p style="padding: 16px; font-size: 13px; color: #667085;">Loading search index...</p>';
        return;
    }

    if (results.length === 0) {
        resultsContainer.innerHTML = `<p style="padding: 16px; font-size: 13px; color: #667085;">No results found for "${query}".</p>`;
        return;
    }

    let html = '';
    results.forEach((res, index) => {
        const highlightedTitle = highlightText(res.title, res.tokens);
        const highlightedSnippet = highlightText(res.snippet, res.tokens);
        const highlightedMeta = highlightText(res.meta.metaLine, res.tokens);

        html += `
            <a href="${res.url}" class="search-result-card${index === 0 ? ' selected' : ''}" data-index="${index}">
                <div class="search-result-content">
                    <div class="search-result-header">
                        <h4 class="search-result-title">${highlightedTitle}</h4>
                        <span class="search-result-badge">${highlightedMeta}</span>
                    </div>
                    ${res.snippet ? `<p class="search-result-snippet">${highlightedSnippet}</p>` : ''}
                </div>
                <div class="search-result-arrow-wrap">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </a>
        `;
    });

    resultsContainer.innerHTML = html;
}

function performSearch(query, labelElement, resultsContainer) {
    const results = searchDocumentation(query);
    renderSearchResults(results, labelElement, resultsContainer, query);
}

// Keyboard Navigation Helper
function setupKeyboardNavigation(inputEl, resultsContainer, onClose) {
    let selectedIndex = 0;

    function getCards() {
        return resultsContainer.querySelectorAll('.search-result-card');
    }

    function updateSelection(cards) {
        cards.forEach((card, idx) => {
            if (idx === selectedIndex) {
                card.classList.add('selected');
                card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                card.classList.remove('selected');
            }
        });
    }

    inputEl.addEventListener('keydown', (e) => {
        const cards = getCards();
        if (cards.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % cards.length;
            updateSelection(cards);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + cards.length) % cards.length;
            updateSelection(cards);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (cards[selectedIndex]) {
                const targetUrl = cards[selectedIndex].getAttribute('href');
                if (targetUrl) window.location.href = targetUrl;
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            if (onClose) onClose();
        }
    });
}

// Landing Page Inline Search
const landingInput = document.getElementById('landing-search-input');
if (landingInput) {
    const landingDropdown = document.getElementById('landing-search-dropdown');
    const landingLabel = document.getElementById('landing-search-results-label');
    const landingResults = document.getElementById('landing-search-results');

    const debouncedLandingSearch = debounce((query) => {
        if (query.length > 0) {
            landingDropdown.style.display = 'block';
            performSearch(query, landingLabel, landingResults);
        } else {
            landingDropdown.style.display = 'none';
        }
    }, 200);

    landingInput.addEventListener('input', function (e) {
        const query = e.target.value.trim();
        debouncedLandingSearch(query);
    });

    document.getElementById('close-landing-search')?.addEventListener('click', function () {
        landingDropdown.style.display = 'none';
        landingInput.value = '';
    });

    setupKeyboardNavigation(landingInput, landingResults, () => {
        landingDropdown.style.display = 'none';
    });
}

// Modal Search
const searchModal = document.getElementById('search-modal');
const modalInput = document.getElementById('search-modal-input');

if (searchModal && modalInput) {
    const modalLabel = document.getElementById('search-results-label');
    const modalResults = document.getElementById('search-modal-results');

    window.openSearchModal = function () {
        searchModal.classList.add('active');
        modalInput.focus();
    };

    window.closeSearchModal = function () {
        searchModal.classList.remove('active');
        modalInput.value = '';
        if (modalLabel) modalLabel.textContent = 'SEARCH';
        if (modalResults) modalResults.innerHTML = '';
    };

    document.querySelector('.close-modal')?.addEventListener('click', window.closeSearchModal);

    searchModal.addEventListener('click', function (e) {
        if (e.target === this) window.closeSearchModal();
    });

    const debouncedModalSearch = debounce((query) => {
        performSearch(query, modalLabel, modalResults);
    }, 200);

    modalInput.addEventListener('input', function (e) {
        const query = e.target.value.trim();
        debouncedModalSearch(query);
    });

    setupKeyboardNavigation(modalInput, modalResults, window.closeSearchModal);

    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (!searchModal.classList.contains('active')) {
                window.openSearchModal();
            }
        }
    });
}

// Shared helper to build standard cards
function createCardElement(url, title, subtitle, type) {
    const card = document.createElement('a');
    card.href = url;

    if (type === 'search-result') {
        card.className = 'search-result-card custom-card-override';
        card.innerHTML = `
            <div class="search-result-content">
                <div class="search-result-header">
                    <h4 class="search-result-title">${title}</h4>
                </div>
                <span class="search-result-snippet">${subtitle}</span>
            </div>
            <div class="search-result-arrow-wrap">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        `;
    } else if (type === 'quick-action') {
        card.className = 'search-result-card custom-card-override qa-card-override';
        const hasUrl = url && url !== 'javascript:void(0)';
        card.innerHTML = `
            <div class="search-result-content">
                <div class="search-result-header">
                    <h4 class="search-result-title">${title}</h4>
                </div>
                <span class="search-result-snippet">${subtitle}</span>
            </div>
            ${hasUrl ? `
            <div class="search-result-arrow-wrap">
                <i class="fa-solid fa-arrow-right"></i>
            </div>` : ''}
        `;
    } else {
        card.className = type; // 'faq-card' or 'article-card'
        card.innerHTML = `
            <div>
                <h3>${title}</h3>
                <p>${subtitle}</p>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
        `;
    }
    return card;
}

// Overview Cards Formatting
function formatOverviewCards() {
    const path = window.location.pathname.toLowerCase();
    const isOverviewPage = path.includes('/00-overview') || (document.querySelector('.sphinx-content h1') && document.querySelector('.sphinx-content h1').textContent.toLowerCase().includes('overview'));

    if (!isOverviewPage) return;

    const mainContent = document.querySelector('.sphinx-content');
    if (!mainContent) return;

    const headings = Array.from(mainContent.querySelectorAll('h2')).filter(h2 => h2.querySelector('a.reference.internal'));
    if (headings.length === 0) return;

    const gridContainer = document.createElement('div');
    gridContainer.className = 'custom-overview-grid';

    const firstSection = headings[0].closest('section');
    if (firstSection) {
        firstSection.parentNode.insertBefore(gridContainer, firstSection);
    }

    headings.forEach(h2 => {
        const linkEl = h2.querySelector('a.reference.internal');
        const section = h2.closest('section');

        let pEl = h2.nextElementSibling;
        while (pEl && pEl.tagName !== 'P') pEl = pEl.nextElementSibling;

        const title = linkEl.textContent;
        const url = linkEl.getAttribute('href');
        const subtitle = pEl ? pEl.textContent : '';

        const card = createCardElement(url, title, subtitle, 'search-result');
        gridContainer.appendChild(card);

        if (section) section.style.display = 'none';
    });
}

// Format Quick Actions Tables
function formatQuickActionTables() {
    const headings = Array.from(document.querySelectorAll('.sphinx-content h3')).filter(h => h.textContent.includes('Quick Actions'));

    headings.forEach(heading => {
        let nextEl = heading.nextElementSibling;
        if (nextEl && nextEl.tagName === 'TABLE') {
            const table = nextEl;

            const gridContainer = document.createElement('div');
            gridContainer.className = 'custom-overview-grid qa-grid-margin';

            const cells = Array.from(table.querySelectorAll('tbody td'));
            cells.forEach(cell => {
                const strong = cell.querySelector('strong');
                if (!strong) return;

                const title = strong.textContent.trim();
                const clone = cell.cloneNode(true);
                const a = clone.querySelector('a');
                if (a) a.remove();
                const str = clone.querySelector('strong');
                if (str) str.remove();
                const subtitle = clone.textContent.replace(/^[\s:\-\–\—]+/, '').replace(/\s+/g, ' ').trim();

                const link = cell.querySelector('a');
                const url = link ? link.getAttribute('href') : 'javascript:void(0)';

                const card = createCardElement(url, title, subtitle, 'quick-action');
                gridContainer.appendChild(card);
            });

            table.parentNode.insertBefore(gridContainer, table);
            table.style.display = 'none';
        }
    });
}



function formatLandingPageCards() {
    const popSection = document.querySelector('.popular-articles-section .container');
    const faqSection = document.querySelector('.faq-section .container');

    const welcomeHeading = document.querySelector('#welcome-to-curq-documentation h1');
    if (welcomeHeading) {
        welcomeHeading.style.display = 'none';
    }

    [popSection, faqSection].forEach(container => {
        if (!container) return;

        // Find the main section title (the one without a link) and make it an h2 if it's a p.rubric
        const allRubrics = container.querySelectorAll('p.rubric, h2');
        allRubrics.forEach(el => {
            if (!el.querySelector('a')) {
                if (el.tagName === 'P') {
                    const h2 = document.createElement('h2');
                    h2.innerHTML = el.innerHTML;
                    h2.className = el.className;
                    h2.id = el.id;
                    el.parentNode.replaceChild(h2, el);
                }
            }
        });

        const headings = Array.from(container.querySelectorAll('h2, p.rubric')).filter(el => {
            return el.querySelector('a.reference.internal') || el.querySelector('a.reference.external');
        });
        if (headings.length === 0) return;

        const isFaq = container === faqSection;
        const gridClass = isFaq ? 'faq-list' : 'article-grid';
        const cardClass = isFaq ? 'faq-card' : 'article-card';

        const gridContainer = document.createElement('div');
        gridContainer.className = gridClass;

        container.appendChild(gridContainer);

        headings.forEach(headingEl => {
            const linkEl = headingEl.querySelector('a.reference.internal') || headingEl.querySelector('a.reference.external');

            let pEl = headingEl.nextElementSibling;
            while (pEl && pEl.tagName !== 'P') {
                pEl = pEl.nextElementSibling;
            }

            const title = linkEl.textContent;
            const url = linkEl.getAttribute('href');
            const subtitle = pEl ? pEl.textContent : '';

            const card = createCardElement(url, title, subtitle, cardClass);
            gridContainer.appendChild(card);

            headingEl.style.display = 'none';
            if (pEl) pEl.style.display = 'none';
        });
    });
}

// Collapsible FAQ Accordion Formatting
function formatFaqCards() {
    const path = window.location.pathname.toLowerCase();
    const mainContent = document.querySelector('.sphinx-content');
    if (!mainContent) return;

    // Event delegation for all FAQ headers (both generated and static)
    if (!mainContent.dataset.faqDelegated) {
        mainContent.addEventListener('click', (e) => {
            const header = e.target.closest('.faq-accordion-header');
            if (!header) return;

            const section = header.closest('.faq-accordion-item');
            if (!section) return;
            const answerDiv = section.querySelector('.faq-answer');
            const answerInner = section.querySelector('.faq-answer-inner');
            if (!answerDiv || !answerInner) return;

            const isOpen = section.classList.contains('open');
            if (isOpen) {
                section.classList.remove('open');
                answerDiv.style.maxHeight = '0px';
            } else {
                section.classList.add('open');
                answerDiv.style.maxHeight = answerInner.scrollHeight + 40 + 'px';
            }
        });
        mainContent.dataset.faqDelegated = 'true';
    }

    const isFaqPage = path.includes('/faq') || path.endsWith('/faq.html') || document.querySelector('.sphinx-content h1')?.textContent.toLowerCase().includes('faq');
    if (!isFaqPage) return;

    const sections = Array.from(mainContent.querySelectorAll('section')).filter(sec => {
        const heading = sec.querySelector('h2, h3');
        return heading && sec.parentElement && sec.parentElement.tagName === 'SECTION';
    });

    if (sections.length === 0) return;

    // Convert each section into an accordion item
    sections.forEach(section => {
        if (section.classList.contains('faq-accordion-item')) return;

        const heading = section.querySelector('h2, h3');
        if (!heading) return;

        section.classList.add('faq-accordion-item');

        const headerDiv = document.createElement('div');
        headerDiv.className = 'faq-accordion-header';

        const titleEl = heading.cloneNode(true);
        titleEl.classList.add('faq-question-title');
        titleEl.querySelectorAll('.headerlink').forEach(hl => hl.remove());

        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-chevron-down faq-toggle-icon';

        headerDiv.appendChild(titleEl);
        headerDiv.appendChild(icon);

        const answerDiv = document.createElement('div');
        answerDiv.className = 'faq-answer';

        const answerInner = document.createElement('div');
        answerInner.className = 'faq-answer-inner';

        Array.from(section.childNodes).forEach(child => {
            if (child !== heading && child.tagName !== 'HR') {
                answerInner.appendChild(child);
            }
        });

        answerDiv.appendChild(answerInner);

        section.innerHTML = '';
        section.appendChild(headerDiv);
        section.appendChild(answerDiv);
    });

    // Auto-open section if anchor target exists in URL hash
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetSec = document.getElementById(targetId);
        if (targetSec && targetSec.classList.contains('faq-accordion-item')) {
            targetSec.classList.add('open');
            const ans = targetSec.querySelector('.faq-answer');
            const inner = targetSec.querySelector('.faq-answer-inner');
            if (ans && inner) ans.style.maxHeight = inner.scrollHeight + 40 + 'px';
            setTimeout(() => {
                targetSec.scrollIntoView({ behavior: 'smooth' });
            }, 200);
        }
    }

    document.querySelectorAll('.sphinx-content hr').forEach(hr => hr.remove());
}

function initSidebars() {
    const leftToggle = document.querySelector('.left-toggle');
    const rightToggle = document.querySelector('.right-toggle');
    const leftSidebar = document.querySelector('.sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    function closeAllSidebars() {
        if (leftSidebar) leftSidebar.classList.remove('open');
        if (rightSidebar) rightSidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
    }

    if (leftToggle && leftSidebar && overlay) {
        leftToggle.addEventListener('click', () => {
            leftSidebar.classList.add('open');
            overlay.classList.add('active');
        });
    }

    if (rightToggle && rightSidebar && overlay) {
        rightToggle.addEventListener('click', () => {
            rightSidebar.classList.add('open');
            overlay.classList.add('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeAllSidebars);
    }

    // Close sidebar when a link is clicked
    if (leftSidebar) {
        leftSidebar.addEventListener('click', (e) => {
            if (e.target.closest('a')) closeAllSidebars();
        });
    }
    if (rightSidebar) {
        rightSidebar.addEventListener('click', (e) => {
            if (e.target.closest('a')) closeAllSidebars();
        });
    }
}

function initImageZoomModal() {
    let modal = document.getElementById('image-zoom-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal';
        modal.className = 'image-zoom-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Image preview');
        modal.innerHTML = `
            <div class="image-zoom-backdrop"></div>
            <div class="image-zoom-container">
                <div class="image-zoom-toolbar">
                    <button class="image-zoom-btn zoom-in-btn" type="button" title="Zoom in (+)"><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                    <button class="image-zoom-btn zoom-out-btn" type="button" title="Zoom out (-)"><i class="fa-solid fa-magnifying-glass-minus"></i></button>
                    <button class="image-zoom-btn zoom-reset-btn" type="button" title="Reset zoom (1:1)"><i class="fa-solid fa-arrows-rotate"></i></button>
                    <button class="image-zoom-btn image-zoom-close" type="button" title="Close (Esc)"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="image-zoom-stage">
                    <img class="image-zoom-preview" src="" alt="" draggable="false" />
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const backdrop = modal.querySelector('.image-zoom-backdrop');
    const stage = modal.querySelector('.image-zoom-stage');
    const preview = modal.querySelector('.image-zoom-preview');
    const closeBtn = modal.querySelector('.image-zoom-close');
    const zoomInBtn = modal.querySelector('.zoom-in-btn');
    const zoomOutBtn = modal.querySelector('.zoom-out-btn');
    const resetBtn = modal.querySelector('.zoom-reset-btn');

    let currentScale = 1;
    let translateX = 0;
    let translateY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    function applyTransform() {
        preview.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
        if (currentScale > 1) {
            stage.classList.add('is-zoomed');
            preview.style.cursor = 'grab';
        } else {
            stage.classList.remove('is-zoomed');
            preview.style.cursor = 'zoom-in';
        }
    }

    function setScale(newScale) {
        currentScale = Math.min(Math.max(newScale, 1), 4);
        if (currentScale === 1) {
            translateX = 0;
            translateY = 0;
        }
        applyTransform();
    }

    function openModal(img) {
        preview.src = img.currentSrc || img.src;
        preview.alt = img.alt || '';

        currentScale = 1;
        translateX = 0;
        translateY = 0;
        applyTransform();

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentScale = 1;
        translateX = 0;
        translateY = 0;
        applyTransform();
    }

    // Attach delegated click listener to documentation images
    function bindContentImages() {
        const content = document.querySelector('.sphinx-content');
        if (!content || content.dataset.zoomDelegated) return;
        content.dataset.zoomDelegated = 'true';

        content.addEventListener('click', (e) => {
            const img = e.target.closest('img');
            if (!img || !content.contains(img)) return;
            if (img.classList.contains('no-zoom') || img.classList.contains('onestein-badge-logo')) return;
            if (img.complete && (img.naturalWidth < 40 || img.naturalHeight < 40)) return;

            const link = img.closest('a');
            if (link) {
                const href = link.getAttribute('href') || '';
                if (href === '#' || href === 'javascript:void(0)' || /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(href)) {
                    e.preventDefault();
                } else {
                    return;
                }
            }
            openModal(img);
        });
    }

    bindContentImages();

    // Toolbar buttons
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    zoomInBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setScale(currentScale + 0.35);
    });

    zoomOutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setScale(currentScale - 0.35);
    });

    resetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setScale(1);
    });

    // Toggle zoom on image click
    preview.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentScale === 1) {
            setScale(1.85);
        } else {
            setScale(1);
        }
    });

    // Close when clicking empty space in stage
    stage.addEventListener('click', (e) => {
        if (e.target === stage) {
            closeModal();
        }
    });

    // Mouse wheel zoom
    stage.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.25 : -0.25;
        setScale(currentScale + delta);
    }, { passive: false });

    // Drag to pan when zoomed (Desktop)
    stage.addEventListener('mousedown', (e) => {
        if (currentScale <= 1) return;
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        stage.classList.add('is-dragging');
        preview.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        applyTransform();
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            stage.classList.remove('is-dragging');
            preview.style.cursor = currentScale > 1 ? 'grab' : 'zoom-in';
        }
    });

    // Touch dragging when zoomed (Mobile / Tablet)
    stage.addEventListener('touchstart', (e) => {
        if (currentScale <= 1 || e.touches.length !== 1) return;
        isDragging = true;
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
    }, { passive: true });

    stage.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        applyTransform();
    }, { passive: true });

    stage.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Keyboard support: Escape closes modal, +/- zooms, 0 resets
    window.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === '+' || e.key === '=') {
            setScale(currentScale + 0.35);
        } else if (e.key === '-' || e.key === '_') {
            setScale(currentScale - 0.35);
        } else if (e.key === '0') {
            setScale(1);
        }
    });
}

function initCurqDocs() {
    cleanHeadingNumbers();
    initSidebarScroll();
    initSidebarMenu();
    formatOverviewCards();
    formatQuickActionTables();
    formatLandingPageCards();
    formatFaqCards();
    initSidebars();
    initImageZoomModal();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initCurqDocs);
} else {
    initCurqDocs();
}
