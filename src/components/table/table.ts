import { dispatch, state } from "../../store"
import { resetGame } from "../../store/actions"
import { creationSquare } from "../../utilities/creationSquare"
import "../export"

export class MineTable extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/table/table.css")
        this.shadowRoot?.appendChild(link)

        const gridContainer = this.ownerDocument.createElement("section")
        this.shadowRoot?.appendChild(gridContainer)

        const title = this.ownerDocument.createElement("h1")
        title.innerHTML = "Buscaminas"
        gridContainer.appendChild(title)

        const mineGrid = this.ownerDocument.createElement("mine-grid")
        gridContainer.appendChild(mineGrid)

        const resetButton = this.ownerDocument.createElement("button")
        resetButton.innerHTML = "RESET GAME"
        gridContainer.appendChild(resetButton)

        resetButton.addEventListener("click", () => {
            dispatch(
                resetGame()
            )
        })

        // const squaresContainer = this.ownerDocument.createElement("div")
        // gridContainer.appendChild(squaresContainer)

        // const squares = creationSquare(state.selected)
        // squares?.forEach((element) => {
        //     squaresContainer.appendChild(element)
        // })
    }
}

customElements.define("mine-table", MineTable)