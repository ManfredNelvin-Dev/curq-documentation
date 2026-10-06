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

document.addEventListener("DOMContentLoaded", () => {
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
});

// Sidebar Dropdown Toggle
document.querySelectorAll('.menu-title').forEach(title => {
    title.addEventListener('click', () => {
        const group = title.closest('.menu-group');
        const icon = title.querySelector('.toggle-icon');

        group.classList.toggle('open');

        if (group.classList.contains('open')) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
    });
});

document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const href = item.getAttribute('href');

        if (!href || href === '#') {
            e.preventDefault();
        }

        document.querySelectorAll('.submenu-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});

// Category Toggle
function toggleCategory(element) {
    const submenu = element.nextElementSibling;
    const icon = element.querySelector('.cat-icon');

    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
    } else {
        submenu.style.display = 'none';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
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
    if (!text || !tokens || tokens.length === 0) return text || '';

    let htmlEscaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    const sortedTokens = [...tokens].sort((a, b) => b.length - a.length);

    sortedTokens.forEach(token => {
        if (!token || token.length < 1) return;
        const regex = new RegExp(`(${escapeRegExp(token)})`, 'gi');
        htmlEscaped = htmlEscaped.replace(regex, '<mark class="search-highlight">$1</mark>');
    });

    return htmlEscaped;
}

// 3. Search Engine Algorithm & Scoring System
let sphinxSearchIndex = null;
window.Search = {
    setIndex: function (index) {
        sphinxSearchIndex = index;
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

    if (!sphinxSearchIndex || !sphinxSearchIndex.docnames) {
        return [];
    }

    const qTokens = query.split(/\s+/).filter(t => t.length > 0);
    if (qTokens.length === 0) return [];

    const results = [];
    const docCount = sphinxSearchIndex.docnames.length;

    for (let docId = 0; docId < docCount; docId++) {
        const rawTitle = sphinxSearchIndex.titles[docId] || '';
        const title = cleanTitle(rawTitle);
        const titleLower = title.toLowerCase();
        const docname = sphinxSearchIndex.docnames[docId] || '';
        const meta = parseDocMetadata(docname);

        let totalScore = 0;
        let matchedTokensCount = 0;
        let matchedHeading = null;
        let matchedTermList = [];

        qTokens.forEach(qToken => {
            let tokenScore = 0;
            let tokenMatched = false;

            // --- A. Title Matching ---
            if (titleLower === query) {
                tokenScore += 100;
                tokenMatched = true;
            } else if (titleLower === qToken) {
                tokenScore += 90;
                tokenMatched = true;
            } else if (titleLower.startsWith(query)) {
                tokenScore += 80;
                tokenMatched = true;
            } else if (titleLower.startsWith(qToken)) {
                tokenScore += 70;
                tokenMatched = true;
            } else if (titleLower.includes(query)) {
                tokenScore += 60;
                tokenMatched = true;
            } else if (titleLower.includes(qToken)) {
                tokenScore += 50;
                tokenMatched = true;
            }

            // --- B. Heading Matching (alltitles) ---
            if (sphinxSearchIndex.alltitles) {
                for (const headingText in sphinxSearchIndex.alltitles) {
                    const entries = sphinxSearchIndex.alltitles[headingText];
                    const belongsToDoc = entries.some(entry => entry[0] === docId);

                    if (belongsToDoc) {
                        const cleanHead = cleanTitle(headingText);
                        const headLower = cleanHead.toLowerCase();

                        if (headLower === qToken || headLower === query) {
                            tokenScore += 40;
                            tokenMatched = true;
                            matchedHeading = cleanHead;
                        } else if (headLower.startsWith(qToken)) {
                            tokenScore += 35;
                            tokenMatched = true;
                            if (!matchedHeading) matchedHeading = cleanHead;
                        } else if (headLower.includes(qToken)) {
                            tokenScore += 30;
                            tokenMatched = true;
                            if (!matchedHeading) matchedHeading = cleanHead;
                        }
                    }
                }
            }

            // --- C. Titleterms Matching ---
            if (sphinxSearchIndex.titleterms) {
                for (const term in sphinxSearchIndex.titleterms) {
                    if (term === qToken) {
                        const docs = sphinxSearchIndex.titleterms[term];
                        const hits = Array.isArray(docs) ? docs.includes(docId) : docs === docId;
                        if (hits) {
                            tokenScore += 30;
                            tokenMatched = true;
                        }
                    } else if (qToken.length >= 2 && term.startsWith(qToken)) {
                        const docs = sphinxSearchIndex.titleterms[term];
                        const hits = Array.isArray(docs) ? docs.includes(docId) : docs === docId;
                        if (hits) {
                            tokenScore += 20;
                            tokenMatched = true;
                        }
                    }
                }
            }

            // --- D. Terms Matching (Body / Content) ---
            if (sphinxSearchIndex.terms) {
                for (const term in sphinxSearchIndex.terms) {
                    if (term === qToken) {
                        const docs = sphinxSearchIndex.terms[term];
                        const hits = Array.isArray(docs) ? docs.includes(docId) : docs === docId;
                        if (hits) {
                            tokenScore += 20;
                            tokenMatched = true;
                            matchedTermList.push(term);
                        }
                    } else if (qToken.length >= 2 && term.startsWith(qToken)) {
                        const docs = sphinxSearchIndex.terms[term];
                        const hits = Array.isArray(docs) ? docs.includes(docId) : docs === docId;
                        if (hits) {
                            tokenScore += 10;
                            tokenMatched = true;
                            matchedTermList.push(term);
                        }
                    }
                }
            }

            if (tokenMatched) {
                matchedTokensCount++;
                totalScore += tokenScore;
            }
        });

        // Multi-Word Query Bonus
        if (qTokens.length > 1 && matchedTokensCount === qTokens.length) {
            totalScore += 50;
        }

        if (totalScore > 0) {
            let snippet = '';
            if (matchedHeading) {
                snippet = `Section: ${matchedHeading}`;
            } else if (matchedTermList.length > 0) {
                const termsPreview = [...new Set(matchedTermList)].slice(0, 3).join(', ');
                snippet = `Contains relevant guidance regarding ${termsPreview} in ${meta.module}.`;
            } else {
                snippet = `Documentation resource for ${meta.section} in ${meta.module}.`;
            }

            const base_url = window.CURQ_CONFIG ? window.CURQ_CONFIG.baseUrl : '/';
            const url = base_url + docname + '.html';

            results.push({
                docId,
                title,
                docname,
                meta,
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

    labelElement.textContent = `RESULTATEN VOOR "${query.toUpperCase()}"`;

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
}

// FAQ Accordion Logic
function initFaqAccordions() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/faq/') || path.endsWith('/faq.html')) {
        const headings = document.querySelectorAll('.sphinx-content h2');
        headings.forEach(heading => {
            let container = heading.parentElement;

            // MyST/Sphinx usually wraps headings in <section>
            if (container && (container.tagName === 'SECTION' || container.classList.contains('section'))) {
                const details = document.createElement('details');
                details.className = 'faq-accordion';

                const summary = document.createElement('summary');
                summary.innerHTML = heading.innerHTML;
                // add icon wrapper
                summary.innerHTML += '<i class="fa-solid fa-chevron-down accordion-icon"></i>';
                details.appendChild(summary);

                const contentDiv = document.createElement('div');
                contentDiv.className = 'faq-accordion-content';

                // move all siblings after heading to contentDiv
                Array.from(container.childNodes).forEach(child => {
                    if (child !== heading && child.tagName !== 'HR') {
                        contentDiv.appendChild(child);
                    }
                });

                details.appendChild(contentDiv);

                container.innerHTML = '';
                container.appendChild(details);
            }
        });

        // Cleanup remaining HRs
        document.querySelectorAll('.sphinx-content hr').forEach(hr => hr.remove());
    }
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initFaqAccordions);
} else {
    initFaqAccordions();
}

// Mobile Sidebar Toggle
document.addEventListener("DOMContentLoaded", () => {
    const leftToggle = document.querySelector('.left-toggle');
    const rightToggle = document.querySelector('.right-toggle');
    const leftSidebar = document.querySelector('.sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    function closeAllSidebars() {
        if(leftSidebar) leftSidebar.classList.remove('open');
        if(rightSidebar) rightSidebar.classList.remove('open');
        if(overlay) overlay.classList.remove('active');
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
    document.querySelectorAll('.sidebar a, .right-sidebar a').forEach(link => {
        link.addEventListener('click', closeAllSidebars);
    });
});
