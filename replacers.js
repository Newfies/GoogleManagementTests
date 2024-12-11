class replace1 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <title>Apple</title>
      `;
    }
}

customElements.define('apple', replace1);