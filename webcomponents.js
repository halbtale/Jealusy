class Card extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const raw = await fetch("components/card.html");
        const html = await raw.text();
        const title = this.getAttribute("title") || "TITLE";
        const description = this.getAttribute("description") || "DESCRIPTION";
        const imgUrl = this.getAttribute("imgUrl") || "IMAGE";
        this.innerHTML = html.replace('{{TITLE}}', title).replace('{{DESCRIPTION}}', description).replace('{{IMAGE}}', imgUrl);
    }
}
customElements.define("app-card", Card);