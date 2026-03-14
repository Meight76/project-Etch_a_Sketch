const gridContainer = document.querySelector("#container");
const FIRST_GRID_DIMENSION = 16;

let gridCount = 0
function generateGridToDiv(gridDimension) {
    for (let i = 0; i < gridDimension; i++) {
        // create a row section and set an id to it
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("divRow")
        // create elements to the row
        for (let y = 0; y < gridDimension; y++) {
            const gridDivItem = document.createElement("div");
            gridDivItem.classList.add("gridItem");
            gridDiv.appendChild(gridDivItem);

        }
        gridDiv.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        })
        gridContainer.appendChild(gridDiv);
    }
}

function removeGridFromDiv() {
    gridContainer.textContent = "";
}

const topScreenButton = document.querySelector("#topScreenButton");
topScreenButton.addEventListener("click", (event) => {
    removeGridFromDiv();
    let newGridDimension = 101;
    while (newGridDimension > 100 || newGridDimension < 0) {
        newGridDimension = Number(prompt("What grid dimension should be (min: 0 max: 100): "));
    }
    generateGridToDiv(newGridDimension);
})

generateGridToDiv(FIRST_GRID_DIMENSION);
console.log(gridCount);
