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

// Version Switcher Logic
function switchVersion(targetUrl) {
    if (targetUrl) {
        window.location.href = targetUrl;
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
// CURQ Documentation Search Engine (MiniSearch + Mark.js)
// ==========================================

const searchCache = new Map();

function debounce(func, delay = 200) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

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
            else if (rawSec === 'tutorials' || rawSec === 'tutorial') sectionName = 'Tutorial';
            else if (rawSec === 'how-to' || rawSec === 'howto') sectionName = 'How-To';
            else if (rawSec === 'explanation' || rawSec === 'explanations') sectionName = 'Explanation';
            else if (rawSec === 'reference' || rawSec === 'references') sectionName = 'Reference';
            else if (rawSec === 'getting-started' || rawSec === 'getting started') sectionName = 'Getting Started';
            else if (rawSec === 'task-guides' || rawSec === 'task guides') sectionName = 'Task Guides';
            else if (rawSec === 'core-concepts' || rawSec === 'core concepts') sectionName = 'Core Concepts';
            else if (rawSec === 'settings-and-fields' || rawSec === 'settings and fields') sectionName = 'Settings and Fields';
            else sectionName = rawSec.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        }
    }

    return {
        module: moduleName,
        section: sectionName,
        metaLine: `${sectionName} · ${moduleName}`
    };
}

function cleanTitle(title) {
    if (!title) return '';
    return title
        .replace(/^\d+\.\s*/, '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .trim();
}

let miniSearch = null;
let rawSphinxIndex = null;

function buildMiniSearchIndex(index) {
    if (!index || !index.docnames) return;
    rawSphinxIndex = index;

    if (typeof MiniSearch === 'undefined') {
        window.addEventListener('load', () => buildMiniSearchIndex(index));
        return;
    }

    const docCount = index.docnames.length;
    const docs = [];

    for (let id = 0; id < docCount; id++) {
        const rawTitle = (index.titles && index.titles[id]) || '';
        const title = cleanTitle(rawTitle);
        const docname = index.docnames[id] || '';
        // Exclude popular articles, landing faq snippets, and root index from search
        if (
            !docname ||
            docname === 'index' ||
            docname.includes('popular_articles') ||
            docname.includes('landing_faq')
        ) {
            continue;
        }

        const meta = parseDocMetadata(docname);

        const headings = [];
        if (index.alltitles) {
            for (const hText in index.alltitles) {
                const entries = index.alltitles[hText];
                for (let i = 0; i < entries.length; i++) {
                    if (entries[i][0] === id) {
                        headings.push(cleanTitle(hText));
                    }
                }
            }
        }

        const keywords = [];
        if (index.terms) {
            for (const term in index.terms) {
                const d = index.terms[term];
                if (Array.isArray(d) ? d.includes(id) : d === id) {
                    keywords.push(term);
                }
            }
        }

        let baseUrl = '/';
        if (window.location.protocol === 'file:') {
            baseUrl = (window.CURQ_CONFIG && window.CURQ_CONFIG.baseUrl) || '';
        } else {
            const segs = window.location.pathname.split('/').filter(Boolean);
            if (segs.length > 0 && !segs[0].endsWith('.html') && segs[0] !== 'docs' && segs[0] !== '_static') {
                baseUrl = `/${segs[0]}/`;
            }
        }

        docs.push({
            id,
            title,
            docname,
            module: meta.module,
            section: meta.section,
            metaLine: meta.metaLine,
            headings: headings.join(' '),
            firstHeading: headings[0] || '',
            keywords: keywords.join(' '),
            url: baseUrl + docname + '.html'
        });
    }

    miniSearch = new MiniSearch({
        fields: ['title', 'module', 'section', 'headings', 'keywords'],
        storeFields: ['title', 'module', 'section', 'metaLine', 'firstHeading', 'docname', 'url'],
        searchOptions: {
            boost: { title: 4, module: 2.5, section: 2, headings: 1.5, keywords: 1 },
            prefix: true,
            fuzzy: 0.2
        }
    });

    miniSearch.addAll(docs);
}

window.Search = {
    setIndex: function (index) {
        buildMiniSearchIndex(index);
    }
};

function loadSearchIndex() {
    if (window.CURQ_CONFIG && window.CURQ_CONFIG.searchIndexUrl) {
        const script = document.createElement('script');
        script.src = window.CURQ_CONFIG.searchIndexUrl;
        document.head.appendChild(script);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", loadSearchIndex);
} else {
    loadSearchIndex();
}

function searchDocumentation(rawQuery) {
    const query = rawQuery.trim();
    if (!query || !miniSearch) return [];

    if (searchCache.has(query.toLowerCase())) {
        return searchCache.get(query.toLowerCase());
    }

    const results = miniSearch.search(query, {
        prefix: true,
        fuzzy: query.length > 3 ? 0.2 : false,
        combineWith: 'AND'
    }).filter(res => {
        const doc = (res.docname || '').toLowerCase();
        return !doc.includes('popular_articles') && !doc.includes('landing_faq') && doc !== 'index';
    }).slice(0, 15);

    searchCache.set(query.toLowerCase(), results);
    return results;
}

function renderSearchResults(results, labelElement, resultsContainer, query) {
    if (!query || !query.trim()) {
        labelElement.textContent = "SEARCH";
        resultsContainer.innerHTML = "";
        return;
    }

    labelElement.textContent = `RESULTS FOR "${query.toUpperCase()}"`;

    if (!miniSearch) {
        resultsContainer.innerHTML = '<p style="padding: 16px; font-size: 13px; color: #667085;">Loading search index...</p>';
        return;
    }

    if (results.length === 0) {
        resultsContainer.innerHTML = `<p style="padding: 16px; font-size: 13px; color: #667085;">No results found for "${query}".</p>`;
        return;
    }

    resultsContainer.innerHTML = results.map((res, index) => {
        const snippet = res.firstHeading
            ? `Section: ${res.firstHeading}`
            : `Documentation resource for ${res.section} in ${res.module}.`;

        return `
            <a href="${res.url}" class="search-result-card${index === 0 ? ' selected' : ''}" data-index="${index}">
                <div class="search-result-content">
                    <div class="search-result-header">
                        <h4 class="search-result-title">${res.title}</h4>
                        <span class="search-result-badge">${res.metaLine}</span>
                    </div>
                    <p class="search-result-snippet">${snippet}</p>
                </div>
                <div class="search-result-arrow-wrap">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </a>
        `;
    }).join('');

    // Highlighting via Mark.js library
    if (typeof Mark !== 'undefined') {
        const marker = new Mark(resultsContainer);
        marker.mark(query.trim().split(/\s+/).filter(t => t.length > 0), {
            className: 'search-highlight',
            separateWordSearch: true
        });
    }
}

function setupKeyboardNavigation(inputEl, resultsContainer, onClose) {
    let selectedIndex = 0;

    resultsContainer._resetSelection = function () {
        selectedIndex = 0;
    };

    function getCards() {
        return Array.from(resultsContainer.querySelectorAll('.search-result-card'));
    }

    function updateSelection(cards) {
        cards.forEach((card, idx) => {
            const isSel = (idx === selectedIndex);
            card.classList.toggle('selected', isSel);
            if (isSel) {
                card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        });
    }

    // Sync selection on mouse hover
    resultsContainer.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.search-result-card');
        if (card && resultsContainer.contains(card)) {
            const cards = getCards();
            const idx = cards.indexOf(card);
            if (idx !== -1) {
                selectedIndex = idx;
                updateSelection(cards);
            }
        }
    });

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
            const target = cards[selectedIndex] || cards[0];
            if (target) {
                const targetUrl = target.getAttribute('href');
                if (targetUrl) window.location.href = targetUrl;
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            if (onClose) onClose();
        }
    });
}

function setupSearchInput(inputEl, labelEl, resultsEl, containerEl, onClose) {
    if (!inputEl) return;

    const debouncedSearch = debounce((query) => {
        if (query.length > 0) {
            if (containerEl) containerEl.style.display = 'block';
            const results = searchDocumentation(query);
            renderSearchResults(results, labelEl, resultsEl, query);
            resultsEl._resetSelection?.();
        } else {
            if (containerEl) containerEl.style.display = 'none';
            labelEl.textContent = 'SEARCH';
            resultsEl.innerHTML = '';
        }
    }, 150);

    inputEl.addEventListener('input', (e) => debouncedSearch(e.target.value.trim()));
    setupKeyboardNavigation(inputEl, resultsEl, onClose);

    if (resultsEl) {
        resultsEl.addEventListener('click', (e) => {
            if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
            const card = e.target.closest('.search-result-card');
            if (card && resultsEl.contains(card)) {
                const url = card.getAttribute('href');
                if (url && url !== '#' && !url.startsWith('javascript:')) {
                    e.preventDefault();
                    window.location.href = url;
                }
            }
        });
    }
}

// Landing Search
const landingInput = document.getElementById('landing-search-input');
const landingDropdown = document.getElementById('landing-search-dropdown');
const landingLabel = document.getElementById('landing-search-results-label');
const landingResults = document.getElementById('landing-search-results');

if (landingInput) {
    setupSearchInput(landingInput, landingLabel, landingResults, landingDropdown, () => {
        landingDropdown.style.display = 'none';
    });

    document.getElementById('close-landing-search')?.addEventListener('click', () => {
        landingDropdown.style.display = 'none';
        landingInput.value = '';
    });
}

// Modal Search
const searchModal = document.getElementById('search-modal');
const modalInput = document.getElementById('search-modal-input');
const modalLabel = document.getElementById('search-results-label');
const modalResults = document.getElementById('search-modal-results');

if (searchModal && modalInput) {
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

    setupSearchInput(modalInput, modalLabel, modalResults, null, window.closeSearchModal);

    document.addEventListener('keydown', (e) => {
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
    card.href = url || 'javascript:void(0)';

    if (type === 'search-result' || type === 'quick-action') {
        card.className = `search-result-card custom-card-override ${type === 'quick-action' ? 'qa-card-override' : ''}`;
        card.innerHTML = `
            <div class="search-result-content">
                <div class="search-result-header"><h4 class="search-result-title">${title}</h4></div>
                <span class="search-result-snippet">${subtitle}</span>
            </div>
            ${url && url !== 'javascript:void(0)' ? '<div class="search-result-arrow-wrap"><i class="fa-solid fa-arrow-right"></i></div>' : ''}
        `;
    } else {
        card.className = type;
        card.innerHTML = `<div><h3>${title}</h3><p>${subtitle}</p></div><i class="fa-solid fa-arrow-right"></i>`;
    }
    return card;
}

function extractCardData(headingEl) {
    const linkEl = headingEl.querySelector('a.reference.internal, a.reference.external');
    if (!linkEl) return null;
    let pEl = headingEl.nextElementSibling;
    while (pEl && pEl.tagName !== 'P') pEl = pEl.nextElementSibling;
    return {
        url: linkEl.getAttribute('href') || '#',
        title: linkEl.textContent.trim(),
        subtitle: pEl ? pEl.textContent.trim() : '',
        pEl
    };
}

// Overview Cards Formatting
function formatOverviewCards() {
    const path = window.location.pathname.toLowerCase();
    const isOverview = path.includes('/00-overview') || document.querySelector('.sphinx-content h1')?.textContent.toLowerCase().includes('overview');
    if (!isOverview) return;

    const headings = Array.from(document.querySelectorAll('.sphinx-content h2')).filter(h => h.querySelector('a.reference.internal'));
    if (!headings.length) return;

    const grid = document.createElement('div');
    grid.className = 'custom-overview-grid';
    headings[0].closest('section')?.before(grid);

    headings.forEach(h2 => {
        const data = extractCardData(h2);
        if (data) {
            grid.appendChild(createCardElement(data.url, data.title, data.subtitle, 'search-result'));
            h2.closest('section')?.style.setProperty('display', 'none');
        }
    });
}

// Format Quick Actions Tables
function formatQuickActionTables() {
    document.querySelectorAll('.sphinx-content h3').forEach(h => {
        if (!h.textContent.includes('Quick Actions')) return;
        const table = h.nextElementSibling;
        if (!table || table.tagName !== 'TABLE') return;

        const grid = document.createElement('div');
        grid.className = 'custom-overview-grid qa-grid-margin';

        table.querySelectorAll('tbody td').forEach(cell => {
            const strong = cell.querySelector('strong');
            if (!strong) return;
            const title = strong.textContent.trim();
            const link = cell.querySelector('a');
            const url = link ? link.getAttribute('href') : 'javascript:void(0)';

            const clone = cell.cloneNode(true);
            clone.querySelectorAll('a, strong').forEach(el => el.remove());
            const subtitle = clone.textContent.replace(/^[\s:\-\–\—]+/, '').replace(/\s+/g, ' ').trim();

            grid.appendChild(createCardElement(url, title, subtitle, 'quick-action'));
        });

        table.before(grid);
        table.style.display = 'none';
    });
}

// Landing Page Cards Formatting
function formatLandingPageCards() {
    document.querySelector('#welcome-to-curq-documentation h1')?.style.setProperty('display', 'none');

    [
        { sel: '.popular-articles-section .container', grid: 'article-grid', card: 'article-card' },
        { sel: '.faq-section .container', grid: 'faq-list', card: 'faq-card' }
    ].forEach(({ sel, grid, card }) => {
        const container = document.querySelector(sel);
        if (!container) return;

        container.querySelectorAll('p.rubric').forEach(p => {
            if (!p.querySelector('a')) {
                const h2 = document.createElement('h2');
                h2.innerHTML = p.innerHTML;
                h2.className = p.className;
                p.replaceWith(h2);
            }
        });

        const headings = Array.from(container.querySelectorAll('h2, p.rubric')).filter(el => el.querySelector('a.reference'));
        if (!headings.length) return;

        const gridEl = document.createElement('div');
        gridEl.className = grid;
        container.appendChild(gridEl);

        headings.forEach(h => {
            const data = extractCardData(h);
            if (data) {
                gridEl.appendChild(createCardElement(data.url, data.title, data.subtitle, card));
                h.style.display = 'none';
                if (data.pEl) data.pEl.style.display = 'none';
            }
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
                // Auto-close any other currently open accordion item across the page
                document.querySelectorAll('.faq-accordion-item.open').forEach(item => {
                    if (item !== section) {
                        item.classList.remove('open');
                        const otherAnswer = item.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0px';
                        }
                    }
                });

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
            document.querySelectorAll('.faq-accordion-item.open').forEach(item => {
                if (item !== targetSec) {
                    item.classList.remove('open');
                    const otherAnswer = item.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.style.maxHeight = '0px';
                }
            });

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

function initImageViewer() {
    const content = document.querySelector('.sphinx-content');
    if (!content) return;

    function setupViewer() {
        if (typeof Viewer === 'undefined') {
            setTimeout(setupViewer, 50);
            return;
        }

        if (content._viewerInstance) {
            try {
                content._viewerInstance.destroy();
            } catch (e) { }
        }

        // Prevent default navigation if an image is wrapped in a thumbnail/image link
        if (!content.dataset.viewerBound) {
            content.dataset.viewerBound = 'true';
            content.addEventListener('click', (e) => {
                const img = e.target.closest('img');
                if (!img || !content.contains(img)) return;
                if (img.classList.contains('no-zoom') || img.classList.contains('onestein-badge-logo')) return;
                const link = img.closest('a');
                if (link) {
                    const href = link.getAttribute('href') || '';
                    if (href === '#' || href === 'javascript:void(0)' || /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(href)) {
                        e.preventDefault();
                    }
                }
            });
        }

        content._viewerInstance = new Viewer(content, {
            filter(image) {
                if (image.classList.contains('no-zoom') || image.classList.contains('onestein-badge-logo')) {
                    return false;
                }
                if (image.complete && image.naturalWidth && (image.naturalWidth < 40 || image.naturalHeight < 40)) {
                    return false;
                }
                return true;
            },
            button: true,
            navbar: false,
            title: false,
            toolbar: {
                zoomIn: 1,
                zoomOut: 1,
                oneToOne: 1,
                reset: 1,
            },
            tooltip: false,
            zoomRatio: 0.3,
            movable: true,
            zoomable: true,
            rotatable: false,
            scalable: false,
            transition: true,
            backdrop: true,
        });
    }

    setupViewer();
}

function setupRelatedDocs() {
    const relatedSec = document.getElementById('related-documentation');
    if (!relatedSec) return;

    const furtherWithList = document.querySelector('.right-sidebar .right-sidebar-list');
    if (furtherWithList) {
        const links = Array.from(relatedSec.querySelectorAll('a')).filter(a => {
            return !a.classList.contains('headerlink') && a.textContent.trim() !== '¶';
        });

        if (links.length > 0) {
            furtherWithList.innerHTML = '';
            const currentParams = new URLSearchParams(window.location.search);
            const moduleParam = currentParams.get('module');

            links.forEach(a => {
                const li = document.createElement('li');
                const newA = document.createElement('a');
                let href = a.getAttribute('href');
                if (moduleParam && href && !href.includes('module=')) {
                    if (href.includes('#')) {
                        const [p, f] = href.split('#', 2);
                        const sep = p.includes('?') ? '&' : '?';
                        href = `${p}${sep}module=${moduleParam}#${f}`;
                    } else {
                        const sep = href.includes('?') ? '&' : '?';
                        href = `${href}${sep}module=${moduleParam}`;
                    }
                }
                newA.href = href;
                newA.textContent = a.textContent.trim();
                li.appendChild(newA);
                furtherWithList.appendChild(li);
            });
        }
    }

    // Clean up in-body section and preceding HR
    let prev = relatedSec.previousElementSibling;
    if (prev && prev.tagName === 'HR') {
        prev.remove();
    }
    relatedSec.remove();

    // Clean up TOC
    document.querySelectorAll('.toc-container a[href="#related-documentation"]').forEach(el => {
        el.closest('li')?.remove();
    });
}

function initMermaidSizing() {
    function constrainSvgs() {
        document.querySelectorAll('.mermaid svg, pre.mermaid > svg').forEach(svg => {
            const vb = svg.getAttribute('viewBox');
            if (vb) {
                const parts = vb.trim().split(/[\s,]+/).map(Number);
                if (parts.length >= 4 && parts[2] > 0) {
                    const natWidth = parts[2];
                    svg.style.setProperty('max-width', Math.min(natWidth, 1020) + 'px', 'important');
                    svg.style.setProperty('width', '100%', 'important');
                }
            }
        });
    }

    const observer = new MutationObserver(constrainSvgs);
    const content = document.querySelector('.sphinx-content') || document.body;
    observer.observe(content, { childList: true, subtree: true });
    constrainSvgs();
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
    initImageViewer();
    setupRelatedDocs();
    initMermaidSizing();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initCurqDocs);
} else {
    initCurqDocs();
}
