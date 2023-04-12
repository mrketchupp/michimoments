class largeButton extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
      return ['action'];
  }
  attributeChangedCallback(atr, oldValue, newValue) {
      atr === 'action' && oldValue !== newValue ? this.action = newValue : console.log(`Error con: ${atr}`);
  }
  getTemplate() {
      const template = document.createElement('template');
      template.innerHTML = /*html*/ `
        <button><slot name="icon"></slot><p>${this.action}</p></button>

      ${this.getStyles()}
      `;
      return template;
  }
  getStyles() {
      return /*css*/`
          <style>
            :host {
              --color: #18191F;
              --font: Montserrat;
            }
            button {
              display: flex;
              padding: 16px;
              border: 2px var(--color) solid;
              border-radius: 16px;
              color: var(--color);
              font-family: var(--font);
              font-weight:bolder;
              font-size: 21px;
              box-shadow: 0px 4px 0px var(--color);
            }
            p {
              margin: 0px;
              margin-left: 5px;
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

customElements.define('large-button', largeButton);