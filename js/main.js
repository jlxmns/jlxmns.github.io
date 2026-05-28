import { BIRDS_RAW } from '../data/data.js';
import { createCard, normaliseStatus } from '../components/bird-card.js';

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
            (bird.family && bird.family.toLowerCase().includes(query)) ||
            (bird.order && bird.order.toLowerCase().includes(query));

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