
export class PodcastPreview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // fetch data 
        const title = this.getAttribute('title') || 'Untitled';
        const image = this.getAttribute('image') || '';
        const seasons = this.getAttribute('seasons') || '0';
        const genres = this.getAttribute('genres') || 'General';
        const updated = this.getAttribute('updated') || 'Unknown';

        // linked stylesheet to use existing css classes
        this.shadowRoot.innerHTML = `
            <!-- This link lets the Shadow DOM read your exact styles.css file -->
            <link rel="stylesheet" href="./styles.css">
            
            <div class="card">
                <img src="${image}" alt="${title}" />
                <h3>${title}</h3>
                <p><strong>Seasons:</strong> ${seasons}</p>
                <div class="tags">
                    <span class="tag">${genres}</span>
                </div>
                <div class="updated-text">Updated: ${updated}</div>
            </div>
        `;

        this.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('podcast-selected', {
                // to hear the click through the shadow "security shield"
                bubbles: true,
                composed: true,
                detail: { title, image, seasons, genres, updated }
            }));
        });
    }
}

customElements.define('podcast-preview', PodcastPreview);
