const container = document.getElementById("container")
let size = document.getElementById("size")
let sizeLabel = document.getElementById("sizeLabel")
sizeLabel.textContent = `${size.value} X ${size.value}`;

function slide() {
    sizeLabel.textContent = `${size.value} X ${size.value}`;
    let row = container.querySelectorAll(".row");
    row.forEach(e => {
        container.removeChild(e)
    });
    console.log(row)
    makeGrid(size.value)
}

makeGrid(size.value)
function makeGrid (gridSize){
    for (let i = 0; i < gridSize; i++){
        let row = document.createElement('div')
        row.classList.add('row')
        for (let j = 0; j < gridSize; j++){
            let column = document.createElement('div')
            column.classList.add('column')
            row.append(column);
        }
        container.append(row)
    }
}
    