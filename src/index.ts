import "./components/export"


export class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const game = this.ownerDocument.createElement("mine-table")
        this.shadowRoot?.appendChild(game)
    }
}

customElements.define("app-container", AppContainer)