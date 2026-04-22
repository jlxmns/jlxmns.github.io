// ─── Hardcoded bird data ───────────────────────────────────────────────────
const BIRDS_RAW = [
    {"model":"BirdSound.bird","pk":1,"fields":{"common_name":"Curiango-comum","scientific_name":"Nyctidromus albicollis","order":"Caprimulgiformes","family":"Caprimulgidae","wingspan":null,"weight":"53.0","length":"28.0","habitat":"Lowland open country, including savanna and similar grassy and brushy habitats, pasture, forest edge, farm fields, roadways, plantations, and mangroves.","conservation_status":"LC","image":"images/Common_pauraque_Nyctidromus_albicollis_yucatanensis_Orange_Walk_jtYFO8Z.jpg","description":"Noitibó-pauraque, bacurau-comum ou curiango-comum (Nyctidromus albicollis) é uma ave da família Caprimulgidae.","created_at":"2026-04-06T14:06:15.314Z","updated_at":"2026-04-07T15:52:52.274Z"}},
    {"model":"BirdSound.bird","pk":3,"fields":{"common_name":"Black-bellied Whistling-Duck","scientific_name":"Dendrocygna autumnalis","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"51.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1643650997626-0124dbb98261.jpg","description":null,"created_at":"2026-04-07T17:06:50.155Z","updated_at":"2026-04-07T17:06:50.155Z"}},
    {"model":"BirdSound.bird","pk":4,"fields":{"common_name":"Snow Goose","scientific_name":"Anser caerulescens","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"83.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1542252223-c7f5b1142f93.jpg","description":null,"created_at":"2026-04-07T17:06:51.048Z","updated_at":"2026-04-07T17:06:51.048Z"}},
    {"model":"BirdSound.bird","pk":5,"fields":{"common_name":"Ross's Goose","scientific_name":"Anser rossii","order":"Anseriformes","family":"Anatidae","wingspan":"116.0","weight":null,"length":"64.0","habitat":null,"conservation_status":"Low Concern","image":"images/3280289132_1e89c721cd_m.jpg","description":null,"created_at":"2026-04-07T17:06:51.716Z","updated_at":"2026-04-07T17:06:51.716Z"}},
    {"model":"BirdSound.bird","pk":6,"fields":{"common_name":"Greater White-fronted Goose","scientific_name":"Anser albifrons","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"81.0","habitat":null,"conservation_status":"Low Concern","image":"images/5382367023_0756c7408a_m.jpg","description":null,"created_at":"2026-04-07T17:06:52.314Z","updated_at":"2026-04-07T17:06:52.314Z"}},
    {"model":"BirdSound.bird","pk":7,"fields":{"common_name":"Brant","scientific_name":"Branta bernicla","order":"Anseriformes","family":"Anatidae","wingspan":"108.0","weight":null,"length":"62.2","habitat":null,"conservation_status":"Restricted Range","image":"images/8181837365_3b7f69eb7b_w.jpg","description":null,"created_at":"2026-04-07T17:06:53.239Z","updated_at":"2026-04-07T17:06:53.239Z"}},
    {"model":"BirdSound.bird","pk":8,"fields":{"common_name":"Cackling Goose","scientific_name":"Branta hutchinsii","order":"Anseriformes","family":"Anatidae","wingspan":"111.0","weight":null,"length":"65.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1654981853680-2e7830d61cae.jpg","description":null,"created_at":"2026-04-07T17:06:54.751Z","updated_at":"2026-04-07T17:06:54.751Z"}},
    {"model":"BirdSound.bird","pk":9,"fields":{"common_name":"Canada Goose","scientific_name":"Branta canadensis","order":"Anseriformes","family":"Anatidae","wingspan":"170.0","weight":null,"length":"110.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1513209395699-7a1e7f745942.jpg","description":null,"created_at":"2026-04-07T17:06:56.236Z","updated_at":"2026-04-07T17:06:56.236Z"}},
    {"model":"BirdSound.bird","pk":10,"fields":{"common_name":"Mute Swan","scientific_name":"Cygnus olor","order":"Anseriformes","family":"Anatidae","wingspan":"238.0","weight":null,"length":"152.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1582730463790-3c3864de6cbf.jpg","description":null,"created_at":"2026-04-07T17:06:57.270Z","updated_at":"2026-04-07T17:06:57.270Z"}},
    {"model":"BirdSound.bird","pk":11,"fields":{"common_name":"Trumpeter Swan","scientific_name":"Cygnus buccinator","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"158.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1649577452407-7a1d8d8723ea.jpg","description":null,"created_at":"2026-04-07T17:06:59.329Z","updated_at":"2026-04-07T17:06:59.329Z"}},
    {"model":"BirdSound.bird","pk":12,"fields":{"common_name":"Tundra Swan","scientific_name":"Cygnus columbianus","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"147.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1626405687101-0d7ec3acdc10.jpg","description":null,"created_at":"2026-04-07T17:07:00.196Z","updated_at":"2026-04-07T17:07:00.196Z"}},
    {"model":"BirdSound.bird","pk":13,"fields":{"common_name":"Muscovy Duck","scientific_name":"Cairina moschata","order":"Anseriformes","family":"Anatidae","wingspan":"152.0","weight":null,"length":"84.0","habitat":null,"conservation_status":"Declining","image":"images/photo-1604338834026-0aec6ac202bf.jpg","description":null,"created_at":"2026-04-07T17:07:01.051Z","updated_at":"2026-04-07T17:07:01.051Z"}},
    {"model":"BirdSound.bird","pk":14,"fields":{"common_name":"Wood Duck","scientific_name":"Aix sponsa","order":"Anseriformes","family":"Anatidae","wingspan":"73.0","weight":null,"length":"54.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1517465096483-7631c1c48b75.jpg","description":null,"created_at":"2026-04-07T17:07:01.838Z","updated_at":"2026-04-07T17:07:01.838Z"}},
    {"model":"BirdSound.bird","pk":15,"fields":{"common_name":"Blue-winged Teal","scientific_name":"Spatula discors","order":"Anseriformes","family":"Anatidae","wingspan":"62.0","weight":null,"length":"41.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1662692837581-4df7428e1c5b.jpg","description":null,"created_at":"2026-04-07T17:07:02.748Z","updated_at":"2026-04-07T17:07:02.748Z"}},
    {"model":"BirdSound.bird","pk":16,"fields":{"common_name":"Cinnamon Teal","scientific_name":"Spatula cyanoptera","order":"Anseriformes","family":"Anatidae","wingspan":"57.0","weight":null,"length":"42.8","habitat":null,"conservation_status":"Declining","image":"images/24844553587_0456698de8_m.jpg","description":null,"created_at":"2026-04-07T17:07:03.298Z","updated_at":"2026-04-07T17:07:03.298Z"}},
    {"model":"BirdSound.bird","pk":17,"fields":{"common_name":"Northern Shoveler","scientific_name":"Spatula clypeata","order":"Anseriformes","family":"Anatidae","wingspan":"84.0","weight":null,"length":"51.0","habitat":null,"conservation_status":"Low Concern","image":"images/NorthernShoveler4.jpg","description":null,"created_at":"2026-04-07T17:07:05.672Z","updated_at":"2026-04-07T17:07:05.672Z"}},
    {"model":"BirdSound.bird","pk":18,"fields":{"common_name":"Gadwall","scientific_name":"Mareca strepera","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"57.0","habitat":null,"conservation_status":"Low Concern","image":"images/Gadwall.jpg","description":null,"created_at":"2026-04-07T17:07:07.127Z","updated_at":"2026-04-07T17:07:07.127Z"}},
    {"model":"BirdSound.bird","pk":19,"fields":{"common_name":"American Wigeon","scientific_name":"Mareca americana","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"59.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1634502141156-8de3e97ad93f.jpg","description":null,"created_at":"2026-04-07T17:07:08.762Z","updated_at":"2026-04-07T17:07:08.762Z"}},
    {"model":"BirdSound.bird","pk":20,"fields":{"common_name":"Mallard","scientific_name":"Anas platyrhynchos","order":"Anseriformes","family":"Anatidae","wingspan":"95.0","weight":null,"length":"65.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1579444798661-ce60beaa0413.jpg","description":null,"created_at":"2026-04-07T17:07:10.501Z","updated_at":"2026-04-07T17:07:10.501Z"}},
    {"model":"BirdSound.bird","pk":21,"fields":{"common_name":"American Black Duck","scientific_name":"Anas rubripes","order":"Anseriformes","family":"Anatidae","wingspan":"95.0","weight":null,"length":"59.0","habitat":"Rivers","conservation_status":"LC","image":"images/photo-1659664007103-e0ad4701973e.jpg","description":"test","created_at":"2026-04-07T17:07:11.289Z","updated_at":"2026-04-07T21:51:51.065Z"}},
    {"model":"BirdSound.bird","pk":22,"fields":{"common_name":"Mottled Duck","scientific_name":"Anas fulvigula","order":"Anseriformes","family":"Anatidae","wingspan":"87.2","weight":null,"length":"57.2","habitat":null,"conservation_status":"Red Watch List","image":"images/photo-1662682093478-ec57603050d0.jpg","description":null,"created_at":"2026-04-07T17:07:12.237Z","updated_at":"2026-04-07T17:07:12.237Z"}},
    {"model":"BirdSound.bird","pk":23,"fields":{"common_name":"Northern Pintail","scientific_name":"Anas acuta","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"76.0","habitat":null,"conservation_status":"Low Concern","image":"images/50879565191_f15fa9a4a8.jpg","description":null,"created_at":"2026-04-07T17:07:12.853Z","updated_at":"2026-04-07T17:07:12.853Z"}},
    {"model":"BirdSound.bird","pk":24,"fields":{"common_name":"Canvasback","scientific_name":"Aythya valisineria","order":"Anseriformes","family":"Anatidae","wingspan":"89.0","weight":null,"length":"56.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1604040058326-a3b482c6fe27.jpg","description":null,"created_at":"2026-04-07T17:07:13.550Z","updated_at":"2026-04-07T17:07:13.550Z"}},
    {"model":"BirdSound.bird","pk":25,"fields":{"common_name":"Ring-necked Duck","scientific_name":"Aythya collaris","order":"Anseriformes","family":"Anatidae","wingspan":"63.0","weight":null,"length":"46.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1662905048828-b922c97a2332.jpg","description":null,"created_at":"2026-04-07T17:07:14.420Z","updated_at":"2026-04-07T17:07:14.420Z"}},
    {"model":"BirdSound.bird","pk":26,"fields":{"common_name":"Greater Scaup","scientific_name":"Aythya marila","order":"Anseriformes","family":"Anatidae","wingspan":"79.0","weight":null,"length":"56.0","habitat":null,"conservation_status":"Common Bird in Steep Decline","image":"images/photo-1630497946593-2d38c0fd65a7.jpg","description":null,"created_at":"2026-04-07T17:07:15.362Z","updated_at":"2026-04-07T17:07:15.362Z"}},
    {"model":"BirdSound.bird","pk":27,"fields":{"common_name":"Lesser Scaup","scientific_name":"Aythya affinis","order":"Anseriformes","family":"Anatidae","wingspan":"78.0","weight":null,"length":"46.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1632700601246-75a49a9ce4bc.jpg","description":null,"created_at":"2026-04-07T17:07:17.220Z","updated_at":"2026-04-07T17:07:17.220Z"}},
    {"model":"BirdSound.bird","pk":28,"fields":{"common_name":"Steller's Eider","scientific_name":"Polysticta stelleri","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"45.0","habitat":null,"conservation_status":"Red Watch List","image":"images/photo-1621841956972-2b23bf770f27.jpg","description":null,"created_at":"2026-04-07T17:07:18.317Z","updated_at":"2026-04-07T17:07:18.317Z"}},
    {"model":"BirdSound.bird","pk":29,"fields":{"common_name":"King Eider","scientific_name":"Somateria spectabilis","order":"Anseriformes","family":"Anatidae","wingspan":null,"weight":null,"length":"64.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1641824220551-8dd3c10ed295.jpg","description":null,"created_at":"2026-04-07T17:07:19.380Z","updated_at":"2026-04-07T17:07:19.380Z"}},
    {"model":"BirdSound.bird","pk":31,"fields":{"common_name":"Harlequin Duck","scientific_name":"Histrionicus histrionicus","order":"Anseriformes","family":"Anatidae","wingspan":"66.0","weight":null,"length":"46.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1641578391156-57e0cc51edc1.jpg","description":null,"created_at":"2026-04-07T17:07:22.169Z","updated_at":"2026-04-07T17:07:22.169Z"}},
    {"model":"BirdSound.bird","pk":32,"fields":{"common_name":"Surf Scoter","scientific_name":"Melanitta perspicillata","order":"Anseriformes","family":"Anatidae","wingspan":"77.0","weight":null,"length":"60.0","habitat":null,"conservation_status":"Low Concern","image":"images/photo-1645799142571-5e075c44dbbf.jpg","description":null,"created_at":"2026-04-07T17:07:22.981Z","updated_at":"2026-04-07T17:07:22.981Z"}}
];

// ─── Normalize raw Django fixture format into flat bird objects ────────────
function loadBirds() {
    const stored = localStorage.getItem('birds');
    if (stored) return JSON.parse(stored);
    // Seed from hardcoded data on first load
    const birds = BIRDS_RAW.map(entry => ({ id: entry.pk, ...entry.fields }));
    localStorage.setItem('birds', JSON.stringify(birds));
    return birds;
}

function saveBirds(birds) {
    localStorage.setItem('birds', JSON.stringify(birds));
}

// Expose globally so add/edit pages can call this
window.BirdStore = { load: loadBirds, save: saveBirds };

// ─── Theme toggle ──────────────────────────────────────────────────────────
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

// ─── Conservation status helpers ───────────────────────────────────────────
const STATUS_MAP = {
    EX: { label: 'Extinct',                  cls: 'badge-ex', dot: '#6b6454' },
    EW: { label: 'Extinct in the Wild',      cls: 'badge-ew', dot: '#8b2020' },
    CR: { label: 'Critically Endangered',    cls: 'badge-cr', dot: '#8b2020' },
    EN: { label: 'Endangered',               cls: 'badge-en', dot: '#b07030' },
    VU: { label: 'Vulnerable',               cls: 'badge-vu', dot: '#a05c1a' },
    NT: { label: 'Near Threatened',          cls: 'badge-nt', dot: '#1a5480' },
    CD: { label: 'Conservation Dependent',   cls: 'badge-nt', dot: '#1a5480' },
    LC: { label: 'Least Concern',            cls: 'badge-lc', dot: '#2d6a4f' },
    DD: { label: 'Data Deficient',           cls: 'badge-dd', dot: '#6b6454' },
    NE: { label: 'Not Evaluated',            cls: 'badge-dd', dot: '#6b6454' },
};

const STATUS_NAME_TO_CODE = {
    'extinct': 'EX',
    'extinct in the wild': 'EW',
    'critically endangered': 'CR',
    'endangered': 'EN',
    'red watch list': 'EN',
    'vulnerable': 'VU',
    'common bird in steep decline': 'VU',
    'restricted range': 'VU',
    'near threatened': 'NT',
    'declining': 'NT',
    'conservation dependent': 'CD',
    'least concern': 'LC',
    'low concern': 'LC',
    'data deficient': 'DD',
    'not evaluated': 'NE',
};

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

// ─── Bird card renderer ────────────────────────────────────────────────────
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

// ─── Render & filter logic ─────────────────────────────────────────────────
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