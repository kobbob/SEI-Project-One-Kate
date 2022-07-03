console.log('connected')

function init() {

  // Set up
  // Gameboard
  // Pacman/Mario
  // Enemies & move function
  // Collision & Game Over
  // Stars, Mushrooms & Score
  // Audio
  // intro popup

  // ? SETUP

  // * ELEMENTS:

  // Grid & Gameboard
  const grid = document.querySelector('.grid') //gameBoard
  const scoreDisplay = document.querySelector('#score-num')
  const startButton = document.querySelector('#start')
  const restartButton = document.querySelector('#restart')

  // Characters
  const marioClass = 'mario'
  const marioStart = 243 //position
  let marioCurrent = marioStart

  const bowserClass = 'bowser'
  const waluigiClass = 'waluigi'
  const kingbooClass = 'kingboo'
  const koopatroopaClass = 'koopatroopa'

  class Enemy {
    constructure(enemyStart, speed) {
      this.enemyStart = enemyStart
      this.speed = speed
      this.enemyCurrent = this.enemyCurrent
      this.enemyT = NaN
      this.enemyMove = false
    }
  }

  let enemies = [
    { name: 'bowser', startPosition: 152, currentPosition: 152, timeId: 0, timeInterval: 400 },
    { name: 'waluigi', startPosition: 151, currentPosition: 151, timeId: 0, timeInterval: 400 },
    { name: 'kingboo', startPosition: 153, currentPosition: 153, timeId: 0, timeInterval: 400 },
    { name: 'koopatroopa', startPosition: 154, currentPosition: 154, timeId: 0, timeInterval: 400 }
  ]


  // * VARIABLES:

  const width = 18
  const cellCount = width * width
  const c = [] // cells
  createGrid()
  // * see bottom of code for grid & element setup * //

  let score = 0
  let gameOver = false




  // ? FUNCTIONS:

  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      // cell.innerText = i
      cell.id = i
      grid.appendChild(cell)
      c.push(cell)
    }
    enemies.forEach((enemy, i) => {
      addEnemyStart(i)
    })
    addMario(marioStart)
  }

  // function gamePlay() {
  //   wonButton.style.display = 'none'
  //   lostButton.style.display = 'none'
  //   gameStartScreen()
  //   setTimeout(() => {
  //     marioMoves()
  //     updateDotsRemaining(dotsRemaining)
  //     updateValues(score)
  //     ghostsMove()
  //   }, 1600)
  // }

  //* GAME START


  // function gameStartScreen() {
  //   let readyInterval = 0
  //   readyInterval = setInterval(() => {
  //     getReady.classList.toggle('disappear')
  //   }, 500)

  //   setTimeout(() => {
  //     clearInterval(readyInterval)
  //     getReady.classList.add('no-display')
  //     getReady.classList.remove('get-ready')
  //     document.querySelector('header').style.display = 'flex'
  //   }, 1500)
  // }






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
      score += 10
      scoreDisplay.innerHTML = score
    }

    if (c[marioCurrent].classList.contains('mushroom')) {
      c[marioCurrent].classList.remove('mushroom')
      score += 20
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

  function ghostsMove() {

    const bowserGetsOutInterval = setInterval(() => {
      c[enemies[0].currentPosition].classList.remove('bowser')
      c[enemies[0].currentPosition] -= width
      c[enemies[0].currentPosition].classList.add('bowser')
    }, 200)
    setTimeout(() => {
      clearInterval(bowserGetsOutInterval)
    }, 800)


  }



















  function addEnemyStart(i) {
    c[enemies[0].startPosition].classList.add(bowserClass)
    c[enemies[1].startPosition].classList.add(waluigiClass)
    c[enemies[2].startPosition].classList.add(kingbooClass)
    c[enemies[3].startPosition].classList.add(koopatroopaClass)
  }

  function addEnemy(i) {
    c[enemies[0].currentPosition].classList.add(bowserClass)
    c[enemies[1].currentPosition].classList.add(waluigiClass)
    c[enemies[2].currentPosition].classList.add(kingbooClass)
    c[enemies[3].currentPosition].classList.add(koopatroopaClass)
  }

  function removeEnemy(i) {
    c[enemies[0].currentPosition].classList.remove(bowserClass)
    c[enemies[1].currentPosition].classList.remove(waluigiClass)
    c[enemies[2].currentPosition].classList.remove(kingbooClass)
    c[enemies[3].currentPosition].classList.remove(koopatroopaClass)
  }

  // function randomMovementEnemy() {
  //   const randomIndex = Math.floor(Math.random() * movements.length)
  //   return movements[randomIndex]
  // }

  // const movements = [- width, + width, - 1, + 1]
  // let movement = randomMovementEnemy()

  // function moveEnemy(enemy) {
  // if (enemies[i].timerId) return
  // enemies[i].timerId = setInterval(() => {
  //   enemies.forEach((enemy, i) => {
  //     removeEnemy(i)
  //   })
  // })
  // const movements = [+ width, - width, + 1, - 1]
  // let movement = movements[Math.floor(Math.random() * movements.length)]

  // setTimeout(() => {
  //   enemy.enemyT = setInternal(() => {
  //     if (gameOver === false) {
  //       if ((c[enemy.enemyCurrent + movement].classList.contains('road') || c[enemy.enemyCurrent + movement].classList.contains(bowserClass) || c[enemy.enemyCurrent + movement].classList.contains(waluigiClass) || c[enemy.enemyCurrent + movement].classList.contains(kingbooClass) || c[enemy.enemyCurrent + movement].classList.contains(koopatroopaClass) !== true)) {
  //         removeEnemy
  //       }
  //     }
  //   })
  // })

  //   if (key === left && marioCurrent % width !== 0 && c[marioCurrent - 1].classList.contains('road') === true) {
  //     removeEnemy(marioCurrent)
  //   } else if (key === right && marioCurrent % width !== width - 1 && c[marioCurrent + 1].classList.contains('road') === true) {
  //     removeMario(marioCurrent)
  //   } else if (key === up && marioCurrent >= width && c[marioCurrent - width].classList.contains('road') === true) {
  //     removeMario(marioCurrent)
  //   } else if (key === down && marioCurrent + width <= cellCount - 1 && c[marioCurrent + width].classList.contains('road') === true) {
  //     removeMario(marioCurrent)
  //   } else {
  //     marioCurrent
  //   }

  //   if (c[marioCurrent].classList.contains('star')) {
  //     c[marioCurrent].classList.remove('star')
  //     score += 10
  //     scoreDisplay.innerHTML = score
  //   }

  //   if (c[marioCurrent].classList.contains('mushroom')) {
  //     c[marioCurrent].classList.remove('mushroom')
  //     score += 20
  //     scoreDisplay.innerHTML = score
  //   }
  // }

  // GAME FUNCTIONS:

  //function checkCollision()

  //function gameLoop()

  function startGame() {
    score = 0
    scoreDisplay.innerHTML = score
    starCells.forEach(cell => cell.classList.add(starClass))
    mushroomCells.forEach(cell => cell.classList.add(mushroomClass))
    addMario(marioStart)
    removeMario(marioCurrent)
    marioCurrent = marioStart
  }

  function restartGame() {
    score = 0
    scoreDisplay.innerHTML = score
    starCells.forEach(cell => cell.classList.add(starClass))
    mushroomCells.forEach(cell => cell.classList.add(mushroomClass))
    addMario(marioStart)
    removeMario(marioCurrent)
    marioCurrent = marioStart
    gameOver = false
  }

  // function endGame() {
  //   if (score === 3920) {
  //     setTimeout(() => {
  //       gameOver = true
  //     }, 125)
  //     }
  //     removeMario(marioCurrent)
  //   }
  // }


  // * SETUP -- DEVELOP GRID:

  const leftborderClass = 'leftborder'
  const leftborderCells = [c[0], c[18], c[54], c[72], c[90], c[144], c[198], c[216], c[234], c[270], c[288], c[306], c[20], c[38], c[73], c[112], c[130], c[166], c[184], c[217], c[236], c[254], c[289],c[220], c[256], c[274], c[22], c[58], c[77], c[97], c[133], c[151], c[169], c[258], c[8], c[26], c[62], c[80], c[205], c[224], c[278], c[296], c[29], c[65], c[84], c[120], c[138], c[174], c[192], c[228], c[265], c[283], c[299], c[33], c[51], c[53], c[87], c[123], c[141], c[177], c[195], c[231], c[249], c[267], c[269] ]
  leftborderCells.forEach(cell => cell.classList.add(leftborderClass))

  const rightborderClass = 'rightborder'
  const rightborderCells = [c[36], c[110], c[128], c[164], c[182], c[252], c[20], c[24], c[9], c[27], c[31], c[33], c[17], c[35], c[38], c[51], c[60], c[63], c[67], c[71], c[74], c[77], c[81], c[84], c[88], c[89], c[100], c[107], c[113], c[121], c[131], c[139], c[136], c[154], c[172], c[175], c[193], c[208], c[167], c[185], c[218], c[236], c[254], c[221], c[256], c[274], c[294], c[225], c[279], c[297], c[263], c[229], c[265], c[283], c[249], c[267], c[232], c[304], c[161], c[215], c[233], c[251], c[305], c[323], c[287]]
  rightborderCells.forEach(cell => cell.classList.add(rightborderClass))

  const topborderClass = 'topborder'
  const topborderCells = [c[36], c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[10], c[11], c[12], c[13], c[14], c[15], c[16], c[17], c[20], c[22], c[23], c[24], c[29], c[30], c[31], c[33], c[53], c[58], c[59], c[60], c[62], c[63], c[65], c[66], c[67], c[87], c[88], c[73], c[74], c[97], c[100], c[108], c[109], c[110], c[112], c[113], c[120], c[121], c[123], c[124], c[125], c[133], c[136], c[162], c[163], c[164], c[166], c[167], c[174], c[175], c[177], c[178], c[179], c[205], c[206], c[207], c[208], c[217], c[218], c[220], c[221], c[228], c[229], c[231], c[232], c[256], c[258], c[259], c[260], c[261], c[262], c[263], c[265], c[252], c[269], c[289], c[290], c[291], c[293], c[294], c[299], c[300], c[302], c[303], c[304]]
  topborderCells.forEach(cell => cell.classList.add(topborderClass))

  const bottomborderClass = 'bottomborder'
  const bottomborderCells = [c[36], c[38], c[22], c[23], c[24], c[26], c[27], c[29], c[30], c[31], c[51], c[53], c[58], c[65], c[67], c[73], c[74], c[53], c[77], c[60], c[97], c[98], c[99], c[100], c[84], c[87], c[88], c[126], c[127], c[128], c[130], c[131], c[138], c[139], c[141], c[142], c[143], c[169], c[170], c[171], c[172], c[192], c[193], c[195], c[196], c[197], c[180], c[181], c[182], c[184], c[185], c[205], c[208], c[217], c[220], c[221], c[224], c[225], c[228], c[229], c[232], c[252], c[254], c[258], c[259], c[262], c[263], c[267], c[269], c[289], c[290], c[291], c[292], c[293], c[294], c[296], c[297], c[299], c[300], c[301], c[302], c[303], c[304], c[306], c[307], c[308], c[309], c[310], c[311], c[312], c[313], c[314], c[315], c[316], c[317], c[318], c[319], c[320], c[321], c[322], c[323] ]
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




  // ? EVENT LISTENERS:

  // Keyboard Movement:
  document.addEventListener('keydown', moveMario)

  // Start game:
  startButton.addEventListener('click', startGame)

  // Restart game:
  restartButton.addEventListener('click', restartGame)

  // Popup - Start:

  // Popup - Close:



}
window.addEventListener('DOMContentLoaded', init)
