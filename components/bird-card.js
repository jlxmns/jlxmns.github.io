import { STATUS_MAP, STATUS_NAME_TO_CODE } from '../data/data.js';

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
    const s = STATUS_MAP[code] || { label: code, cls: 'badge--dd', dot: '#6b6454' };
    return `<span class="badge ${s.cls}" aria-label="Conservation status: ${s.label}">
        <span class="badge__dot" style="background:${s.dot};"></span>
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
    return `<div class="bird-card__image-wrap bird-card__img-placeholder" aria-hidden="true" role="img" aria-label="No image available for ${name}">
        ${placeholderSVG()}
        <span>No photo available</span>
    </div>`;
}

window.getPlaceholderHTML = getPlaceholderHTML;

export function createCard(bird, index) {
    const card = document.createElement('article');
    card.className = 'bird-card';
    card.style.animationDelay = `${index * 45}ms`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${bird.common_name}`);

    let imageHTML;
    if (bird.image) {
        imageHTML = `
        <div class="bird-card__image-wrap">
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
        <div class="bird-card__body">
            <div>
                <h2 class="bird-card__name">${bird.common_name}</h2>
                <p class="bird-card__sci-name">${bird.scientific_name}</p>
            </div>
            <div class="bird-card__meta">
                ${habitatHTML}
                ${statusHTML}
            </div>
        </div>
        <div class="bird-card__footer">
            <span class="bird-card__id">ID #${bird.id}</span>
            <span class="bird-card__link">
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

export { normaliseStatus };