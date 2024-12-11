class abbl extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <title>Apple</title>
      `;
    }
}

customElements.define('apple', abbl);