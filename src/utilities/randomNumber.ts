const randomIntFromInterval = (min: number, max: number) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomCells = (minesCount: number, selected: number) => {
    const minesList = []
    for (let i = 0; i < minesCount; i++) {
        const randomMine = randomIntFromInterval(1, 64)
        if (randomMine === selected) {
            i =- 1
            continue 
        }
        minesList.push(randomMine)
    }
    return minesList
}