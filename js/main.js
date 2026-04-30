import { BIRDS_RAW, STATUS_MAP, STATUS_NAME_TO_CODE } from '../data/data.js';

function loadBirds() {
    const stored = localStorage.getItem('birds');
    if (stored) return JSON.parse(stored);
    const birds = BIRDS_RAW.map(entry => ({ id: entry.pk, ...entry.fields }));
    localStorage.setItem('birds', JSON.stringify(birds));
    return birds;
}

function saveBirds(birds) {
    localStorage.setItem('birds', JSON.stringify(birds));
}

window.BirdStore = { load: loadBirds, save: saveBirds };

(function () {
    const t = document.querySelector('[data-theme-toggle]');
    const r = document.documentElement;
    let d = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    r.setAttribute('data-theme', d);
    updateToggleIcon(d);
    t && t.addEventListener('click', () => {
        d = d === 'dark' ? 'light' : 'dark';
        r.setAttribute('data-theme', d);
        t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
        updateToggleIcon(d);
    });

    function updateToggleIcon(mode) {
        if (!t) return;
        t.innerHTML = mode === 'dark'
            ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
            : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
})();

function normaliseStatus(raw) {
    if (!raw || !raw.trim()) return null;
    const trimmed = raw.trim();
    if (STATUS_MAP[trimmed.toUpperCase()]) return trimmed.toUpperCase();
    const fromName = STATUS_NAME_TO_CODE[trimmed.toLowerCase()];
    if (fromName) return fromName;
    return trimmed.toUpperCase();
}

function getStatusBadge(raw) {
    if (!raw || !raw.trim()) return '';
    const code = normaliseStatus(raw);
    const s = STATUS_MAP[code] || { label: code, cls: 'badge-dd', dot: '#6b6454' };
    return `<span class="badge ${s.cls}" aria-label="Conservation status: ${s.label}">
        <span class="badge-dot" style="background:${s.dot};"></span>
        ${s.label}
    </span>`;
}

function placeholderSVG() {
    return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="var(--color-surface-dynamic)"/>
        <path d="M32 20c0 5-4 9-9 9-2 0-4-.7-5.5-1.8L12 32l1.5 1.5 3-3c1.7 1.3 3.8 2 6 2 5.5 0 10-4.5 10-10h-1z" fill="var(--color-text-faint)"/>
        <circle cx="28" cy="18" r="2" fill="var(--color-text-faint)"/>
    </svg>`;
}

function getPlaceholderHTML(name) {
    return `<div class="card-image-wrap img-placeholder" aria-hidden="true" role="img" aria-label="No image available for ${name}">
        ${placeholderSVG()}
        <span>No photo available</span>
    </div>`;
}

function createCard(bird, index) {
    const card = document.createElement('article');
    card.className = 'bird-card';
    card.style.animationDelay = `${index * 45}ms`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${bird.common_name}`);

    let imageHTML;
    if (bird.image) {
        imageHTML = `
        <div class="card-image-wrap">
            <img
                src="${bird.image}"
                alt="${bird.common_name}"
                width="280"
                height="210"
                loading="lazy"
                decoding="async"
                onerror="this.parentElement.outerHTML = getPlaceholderHTML('${bird.common_name}')"
            >
        </div>`;
    } else {
        imageHTML = getPlaceholderHTML(bird.common_name);
    }

    const habitatHTML = bird.habitat
        ? `<span class="habitat-pill">
            <i data-lucide="map-pin"></i>${bird.habitat}
           </span>`
        : '';

    const statusHTML = getStatusBadge(bird.conservation_status);

    card.innerHTML = `
        ${imageHTML}
        <div class="card-body">
            <div>
                <h2 class="card-name">${bird.common_name}</h2>
                <p class="card-sci-name">${bird.scientific_name}</p>
            </div>
            <div class="card-meta">
                ${habitatHTML}
                ${statusHTML}
            </div>
        </div>
        <div class="card-footer">
            <span class="card-id">ID #${bird.id}</span>
            <span class="card-link">
                View details
                <i data-lucide="arrow-right"></i>
            </span>
        </div>
    `;

    card.addEventListener('click', () => { window.location.href = `/bird/${bird.id}`; });
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.location.href = `/bird/${bird.id}`;
        }
    });

    return card;
}

const grid        = document.getElementById('bird-grid');
const emptyState  = document.getElementById('empty-state');
const resultCount = document.getElementById('result-count');
const searchInput = document.getElementById('search');
const filterBtns  = document.querySelectorAll('.filter-btn');

let allBirds     = loadBirds();
let activeFilter = 'all';
let searchQuery  = '';

function render() {
    const query = searchQuery.toLowerCase();
    const filtered = allBirds.filter(bird => {
        const matchSearch =
            !query ||
            bird.common_name.toLowerCase().includes(query) ||
            bird.scientific_name.toLowerCase().includes(query) ||
            (bird.family  && bird.family.toLowerCase().includes(query))  ||
            (bird.order   && bird.order.toLowerCase().includes(query));

        const matchFilter =
            activeFilter === 'all' ||
            normaliseStatus(bird.conservation_status) === activeFilter;

        return matchSearch && matchFilter;
    });

    grid.innerHTML = '';
    filtered.forEach((bird, i) => grid.appendChild(createCard(bird, i)));
    lucide.createIcons();

    const count = filtered.length;
    resultCount.textContent = `${count} species found`;
    emptyState.style.display = count === 0 ? 'flex' : 'none';
}

searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    render();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        render();
    });
});

render();