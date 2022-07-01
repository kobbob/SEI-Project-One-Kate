console.log('connected')

function init() {

  // * Player set up


  // * Create Grid
  const grid = document.querySelector('.grid')

  const width = 18
  const cellCount = width * width
  const cells = []

  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      cell.innerText = i
      cell.id = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    console.log(cells)
  }
  createGrid()




}

window.addEventListener('DOMContentLoaded', init)
