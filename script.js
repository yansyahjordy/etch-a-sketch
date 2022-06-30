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
    let color = colorForm.color.value;
    changeColor(color)
}

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

function makeColor(x){
    let items = container.querySelectorAll(".column");
    items.forEach(e => {
        e.addEventListener('mouseover', ()=>{
            e.style.backgroundColor = x;
        })
    });
}

let colorForm=document.getElementById("colorForm")

function changeColor (x){
    let items = container.querySelectorAll(".column");
    items.forEach(e => {
        e.removeEventListener;
        e.addEventListener('mouseover', ()=>{
            e.style.backgroundColor = x;
        })
    });
}

colorForm.addEventListener('click', ()=>{
    let color = colorForm.color.value;
    changeColor(color)
})

makeGrid(size.value)
makeColor(colorForm.color.value)

let colorpicker=document.getElementById("colorpicker")
colorpicker.addEventListener('change', ()=>{
    changeColor(colorpicker.value)
})

let grid = document.getElementById("grid")
grid.addEventListener('click', ()=>{
    let items = container.querySelectorAll(".column,.row");
    items.forEach(e => {
        e.classList.toggle('noborder')
    })
})