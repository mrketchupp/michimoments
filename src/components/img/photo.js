class contraPhoto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ['url', 'alt'];
  }
  attributeChangedCallback(atr, oldValue, newValue) {
    atr === 'url' && oldValue !== newValue ? this.url = newValue : console.log(`Error con: ${atr}`);
    atr === 'alt' && oldValue !== newValue ? this.alt = newValue : console.log(`Error con: ${atr}`);
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = /*html*/ `
        <img src="${this.url}" alt="this.alt">
      ${this.getStyles()}
      `;
    return template;
  }
  getStyles() {
    return /*css*/`
          <style>
            :host {
              --color: #18191F;
            }
            img {
              width: 100%;
              border: 2px var(--color) solid;
              border-radius: 16px;
              }
          </style>
      `;
  }

  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('contra-photo', contraPhoto);