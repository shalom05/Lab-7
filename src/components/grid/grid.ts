import { addObserver, state } from "../../store"
import { creationSquare } from "../../utilities/creationSquare"
import "../export"

export class MineGrid extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this)
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            const link = this.ownerDocument.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/grid/grid.css");
            this.shadowRoot?.appendChild(link);

            const squaresContainer = this.ownerDocument.createElement("div");
            this.shadowRoot?.appendChild(squaresContainer);

            const squares = creationSquare(state.selected);
            squares?.forEach((element) => {
                squaresContainer.appendChild(element);
            })
        }
    }
}

customElements.define("mine-grid", MineGrid)