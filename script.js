const container = document.getElementById("container")
let size = 10;

for (let i = 0; i < size; i++){
    let row = document.createElement('div')
    row.classList.add('row')
    for (let j = 0; j < size; j++){
        let column = document.createElement('div')
        column.classList.add('column')
        row.append(column);
    }
    container.append(row)
    
}