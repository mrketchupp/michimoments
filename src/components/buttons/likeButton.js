class likeButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = /*html*/ `
        <button><slot name="icon"></slot></button>

      ${this.getStyles()}
      `;
    return template;
  }
  getStyles() {
    return /*css*/`
          <style>
            :host {
              --background: #ffffff;
              --border: #18191F;
              --size: 44px;
            }
            button {
              width: var(--size);
              height: var(--size);
              padding: 8px;
              border-radius: 50%;
              border: none;
              background-color: var(--background);
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

customElements.define('like-button', likeButton);