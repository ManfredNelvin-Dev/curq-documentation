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

// Breadcrumb Logic
function updateBreadcrumb(moduleName, pageName, moduleUrl, pageUrl) {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (!breadcrumb) return;
    const mUrl = moduleUrl || '#';
    const pUrl = pageUrl || 'javascript:void(0)';
    const homeUrl = window.CURQ_CONFIG ? window.CURQ_CONFIG.homeUrl : '/';
    breadcrumb.innerHTML = `
        <a href="${homeUrl}">Home</a>
        <span class="separator">/</span>
        <a href="${mUrl}">${moduleName}</a>
        <span class="separator">/</span>
        <a href="${pUrl}" class="current-section">${pageName}</a>
    `;
}

// Sidebar Dropdown Toggle
document.querySelectorAll('.menu-title').forEach(title => {
    title.addEventListener('click', () => {
        const group = title.closest('.menu-group');
        const icon = title.querySelector('.toggle-icon');

        group.classList.toggle('open');

        if (group.classList.contains('open')) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');

            const moduleNameSpan = group.querySelector('.menu-left span');
            const firstSubmenuItem = group.querySelector('.submenu-item');
            if (moduleNameSpan && firstSubmenuItem) {
                const moduleName = moduleNameSpan.innerText.trim();
                const pageName = firstSubmenuItem.textContent.trim();
                const moduleUrl = firstSubmenuItem.getAttribute('href');
                updateBreadcrumb(moduleName, pageName, moduleUrl, moduleUrl);
            }
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

        const group = item.closest('.menu-group');
        const moduleName = group.querySelector('.menu-left span').innerText.trim();
        const pageName = item.textContent.trim();
        const firstItem = group.querySelector('.submenu-item');
        const moduleUrl = firstItem ? firstItem.getAttribute('href') : href;

        updateBreadcrumb(moduleName, pageName, moduleUrl, href);
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

// Search Logic
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

function performSearch(query, labelElement, resultsContainer) {
    if (query.length > 0) {
        labelElement.textContent = `RESULTATEN VOOR "${query.toUpperCase()}"`;

        if (!sphinxSearchIndex) {
            resultsContainer.innerHTML = '<p style="padding: 16px; font-size: 13px; color: #667085;">Loading search index...</p>';
            return;
        }

        let matchedIds = new Set();

        sphinxSearchIndex.titles.forEach((title, id) => {
            if (title.toLowerCase().includes(query)) matchedIds.add(id);
        });

        for (let term in sphinxSearchIndex.terms) {
            if (term.includes(query) || query.includes(term)) {
                let docs = sphinxSearchIndex.terms[term];
                if (Array.isArray(docs)) docs.forEach(id => matchedIds.add(id));
                else matchedIds.add(docs);
            }
        }

        for (let term in sphinxSearchIndex.titleterms) {
            if (term.includes(query) || query.includes(term)) {
                let docs = sphinxSearchIndex.titleterms[term];
                if (Array.isArray(docs)) docs.forEach(id => matchedIds.add(id));
                else matchedIds.add(docs);
            }
        }

        if (matchedIds.size === 0) {
            resultsContainer.innerHTML = '<p style="padding: 16px; font-size: 13px; color: #667085;">No results found.</p>';
            return;
        }

        let html = '';
        const base_url = window.CURQ_CONFIG ? window.CURQ_CONFIG.baseUrl : '/';

        let count = 0;
        matchedIds.forEach(id => {
            if (count >= 10) return;
            count++;

            const title = sphinxSearchIndex.titles[id];
            let docname = sphinxSearchIndex.docnames[id];
            let url = base_url + docname + '.html';
            let displayPath = docname.replace('docs/', '').replace(/\//g, ' / ');

            html += `
                <a href="${url}" class="search-result-card">
                    <div class="search-result-text">
                        <h4>${title}</h4>
                        <p>${displayPath}</p>
                    </div>
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            `;
        });

        resultsContainer.innerHTML = html;
    } else {
        labelElement.textContent = "SEARCH";
        resultsContainer.innerHTML = "";
    }
}

// Landing Page Inline Search
const landingInput = document.getElementById('landing-search-input');
if (landingInput) {
    landingInput.addEventListener('input', function (e) {
        const query = e.target.value.trim().toLowerCase();
        const dropdown = document.getElementById('landing-search-dropdown');
        const label = document.getElementById('landing-search-results-label');
        const results = document.getElementById('landing-search-results');

        if (query.length > 0) {
            dropdown.style.display = 'block';
            performSearch(query, label, results);
        } else {
            dropdown.style.display = 'none';
        }
    });

    document.getElementById('close-landing-search').addEventListener('click', function () {
        document.getElementById('landing-search-dropdown').style.display = 'none';
        landingInput.value = '';
    });
}

// Modal Search
const searchModal = document.getElementById('search-modal');
const modalInput = document.getElementById('search-modal-input');

if (searchModal && modalInput) {
    window.openSearchModal = function () {
        searchModal.classList.add('active');
        modalInput.focus();
    };

    window.closeSearchModal = function () {
        searchModal.classList.remove('active');
        modalInput.value = '';
        document.getElementById('search-results-label').textContent = 'SEARCH';
        document.getElementById('search-modal-results').innerHTML = '';
    };

    document.querySelector('.close-modal').addEventListener('click', window.closeSearchModal);

    searchModal.addEventListener('click', function (e) {
        if (e.target === this) window.closeSearchModal();
    });

    modalInput.addEventListener('input', function (e) {
        const query = e.target.value.trim().toLowerCase();
        const label = document.getElementById('search-results-label');
        const results = document.getElementById('search-modal-results');
        performSearch(query, label, results);
    });
}
