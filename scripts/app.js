console.log('connected')

function init() {

  // Set up
  // Gameboard
  // Pacman/Mario
  // Enemies & move function
  // Collision & Game Over
  // Stars, Mushrooms & Score
  // Audio

  // ? SETUP

  // * ELEMENTS:

  // Grid & Gameboard
  const grid = document.querySelector('.grid') //gameBoard
  const scoreDisplay = document.querySelector('#score-num')

  // Characters
  const marioClass = 'mario'
  const marioStart = 243 //position
  let marioCurrent = marioStart


  // * VARIABLES:

  const width = 18
  const cellCount = width * width
  const c = [] // cells
  createGrid()
  // * see bottom of code for grid & element setup * //

  let score = 0


  // ? FUNCTIONS:

  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      cell.innerText = i
      cell.id = i
      grid.appendChild(cell)
      c.push(cell)
    }
    addMario(marioStart)
  }

  //MARIO / PACMAN FUNCTIONS:
  function addMario(position) {
    c[position].classList.add(marioClass)
  }

  function removeMario(position) {
    c[position].classList.remove(marioClass)
  }

  function moveMario(e){
    const key = e.keyCode
    const left = 37
    const right = 39
    const up = 38
    const down = 40

    if (key === left && marioCurrent % width !== 0 && c[marioCurrent - 1].classList.contains('road') === true) {
      removeMario(marioCurrent)
      marioCurrent--
    } else if (key === right && marioCurrent % width !== width - 1 && c[marioCurrent + 1].classList.contains('road') === true) {
      removeMario(marioCurrent)
      marioCurrent++
    } else if (key === up && marioCurrent >= width && c[marioCurrent - width].classList.contains('road') === true) {
      removeMario(marioCurrent)
      marioCurrent -= width
    } else if (key === down && marioCurrent + width <= cellCount - 1 && c[marioCurrent + width].classList.contains('road') === true) {
      removeMario(marioCurrent)
      marioCurrent += width
    } else {
      marioCurrent
    }

    if (c[marioCurrent].classList.contains('star')) {
      c[marioCurrent].classList.remove('star')
      score += 20
      scoreDisplay.innerHTML = score
    }

    if (c[marioCurrent].classList.contains('mushroom')) {
      c[marioCurrent].classList.remove('mushroom')
      score += 50
      scoreDisplay.innerHTML = score
    }

    //prevent browser from moving left to right with arrow keys:
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault()
    }

    addMario(marioCurrent)
  }


  //function getNextMove()

  //function makeMove()

  //

  //ENEMY / GHOSTS FUNCTIONS:

  // GAME FUNCTIONS:

  //function gameOver()

  //function checkCollision()

  //function gameLoop()

  //function startGame()

  //function developGrid() - at end as need to refactor


  // * SETUP -- DEVELOP GRID:

  const leftborderClass = 'leftborder'
  const leftborderCells = [c[0], c[18], c[54], c[72], c[90]]
  leftborderCells.forEach(cell => cell.classList.add(leftborderClass))

  const rightborderClass = 'rightborder'
  const rightborderCells = [c[132], c[36]]
  rightborderCells.forEach(cell => cell.classList.add(rightborderClass))

  const topborderClass = 'topborder'
  const topborderCells = [c[36]]
  topborderCells.forEach(cell => cell.classList.add(topborderClass))

  const bottomborderClass = 'bottomborder'
  const bottomborderCells = [c[36]]
  bottomborderCells.forEach(cell => cell.classList.add(bottomborderClass))

  const wallClass = 'wall'
  const wallCells = [c[20], c[38], c[22], c[23], c[24], c[29], c[30], c[31], c[33], c[51], c[73],
    c[74], c[58], c[59], c[60], c[77], c[62], c[63], c[80], c[81], c[97], c[98], c[99], c[100],
    c[65], c[66], c[67], c[84], c[87], c[88], c[112], c[113], c[130], c[131], c[120], c[121], c[138], c[139], c[166], c[167], c[184],
    c[185], c[174], c[175], c[192], c[193], c[205], c[206], c[207], c[208], c[224], c[225], c[217], c[218],
    c[236], c[254], c[220], c[221], c[228], c[229], c[231], c[232], c[249], c[267], c[289], c[290], c[291], c[256],
    c[274], c[292], c[293], c[294], c[258], c[259], c[260], c[261], c[262], c[263], c[278], c[279], c[296], c[297],
    c[299], c[300], c[265], c[283], c[301], c[302], c[303], c[304] ]
  wallCells.forEach(cell => cell.classList.add(wallClass))

  const blankClass = 'blank'
  const blankCells = [c[36], c[8], c[9], c[26], c[27], c[53], c[108], c[109], c[110], c[126], c[127], c[128],
    c[123], c[124], c[125], c[141], c[142], c[143], c[162], c[163], c[164], c[180], c[181], c[182], c[177], c[178], c[179], c[195],
    c[196], c[197], c[252], c[269] ]
  blankCells.forEach(cell => cell.classList.add(blankClass))

  const penClass = 'pen'
  const penCells = [c[133], c[134], c[135], c[136], c[151], c[152], c[153], c[154], c[169], c[170], c[171], c[172]]
  penCells.forEach(cell => cell.classList.add(penClass))

  const mushroomClass = 'mushroom'
  const mushroomCells = [c[55], c[70], c[200], c[248]]
  mushroomCells.forEach(cell => cell.classList.add(mushroomClass))
  mushroomCells.forEach(cell => cell.classList.add('road'))


  const starClass = 'star'
  const starCells = c.filter(cell => cell.classList.contains(wallClass) !== true && cell.classList.contains(blankClass) !== true && cell.classList.contains(penClass) !== true && cell.classList.contains(mushroomClass) !== true)
  starCells.forEach(cell => cell.classList.add(starClass))
  starCells.forEach(cell => cell.classList.add('road'))




  // ? EVENTS:

  // Keyboard Movement:
  document.addEventListener('keydown', moveMario)

  // Popup - Start:

  // Popup - Close:



}
window.addEventListener('DOMContentLoaded', init)
