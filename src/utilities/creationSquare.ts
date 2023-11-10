import "../components/export"
import { dispatch, state } from "../store"
import { addOpened, lostGame, resetGame, uploadMines } from "../store/actions"
import { randomCells } from "./randomNumber"

export const creationSquare = (selected: string) => {
    if (state.lost === false) {
        const squareList = []

        if (state.started === false) {

            for (let i = 1; i < 65; i++) {
                const row: number = Math.ceil(i / 8)
                const column: number = ((i - 1) % 8) + 1

                const square = document.createElement("square-square")
                square.setAttribute("ident", `${i}`)
                square.setAttribute("column", `${column}`)
                square.setAttribute("row", `${row}`)
                squareList.push(square)
            }

            return squareList
        } else {
            let minesList = []
            if (state.mines === "") {
                minesList = randomCells(10, parseInt(selected))
                console.log(minesList)
                dispatch(
                    uploadMines(JSON.stringify(minesList))
                )
            } else {
                minesList = JSON.parse(state.mines)
            }

            for (let i = 1; i < 65; i++) {
                const row: number = Math.ceil(i / 8)
                const column: number = ((i - 1) % 8) + 1

                const square = document.createElement("square-square")
                square.setAttribute("ident", `${i}`)
                square.setAttribute("column", `${column}`)
                square.setAttribute("row", `${row}`)

                state.opened.forEach(element => {
                    console.log(element)
                    if (element === i) {
                        square.setAttribute("opened", "true")
                    }
                });

                minesList.forEach((mine: number) => {
                    if (mine === i) {
                        square.setAttribute("mine", "true")
                    }
                    if (mine === parseInt(selected)) {
                        console.log("Perdiste")
                        dispatch(
                            lostGame(JSON.stringify(true))
                        )
                        return
                    }
                });

                squareList.push(square)
            }
            return squareList

        }
    }

}