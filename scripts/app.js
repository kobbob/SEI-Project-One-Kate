
function init() {


  // ! SETUP
  // ---------------------------------------------------------------------------

  // * ELEMENTS:

  // Grid & Gameboard
  const grid = document.querySelector('.grid') //gameBoard
  const scoreDisplay = document.querySelector('#score-num')
  const startButton = document.querySelector('#start')
  const restartButton = document.querySelector('#restart')
  const timer = document.querySelector('#timer')

  let score = 0
  let lives = 3
  let scoreTimer = 0
  let startTimerId = null
  let toWin = 0
  let gameOver = false
  let countSeconds = 60



  // Characters
  const marioClass = 'mario'
  const marioStart = 243 //start position
  let marioCurrent = marioStart

  // use constructor to create multiple enemies
  class Enemy {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.timeId = NaN
      this.enemyMove = false
    }
  }

  const enemies = [
    new Enemy('bowser', 152, 200),
    new Enemy('waluigi', 151, 200),
    new Enemy('kingboo', 153, 200),
    new Enemy('koopatroopa', 154, 200)
  ]



  // * SETUP -- DEVELOP GRID:

  const width = 18
  const cellCount = width * width
  const c = [] // cells
  createGrid()

  // -- Comment: There is definitely a better way of doing this....

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




  // ! EVENT LISTENERS:

  document.addEventListener('keydown', moveMario)
  startButton.addEventListener('click', startGame)
  restartButton.addEventListener('click', restartGame)
  document.addEventListener('keydown', stationaryGrid)


  // ! FUNCTIONS:
  // ---------------------------------------------------------------------------

  //  create grid/gameboard
  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      // cell.innerText = i
      cell.id = i
      grid.appendChild(cell)
      c.push(cell)
    }
    addMario(marioStart)
    scoreDisplay.innerHTML = 0
  }
  // elements: 'wall' / 'road' / 'star' / 'mushroom' / 'blank'



  // * MARIO / PACMAN FUNCTIONS:
  // nb starting position @ top of code

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

    addMario(marioCurrent)
    starPoint()
    mushroomPoint()
    checkForGameOver()
    checkForWin()
  }


  // star eaten
  function starPoint() {
    if (c[marioCurrent].classList.contains('star')) {
      score += 10
      //toWin
      c[marioCurrent].classList.remove('star')
    }
    scoreDisplay.innerHTML = score
  }

  // mushroom eaten
  function mushroomPoint() {
    if (c[marioCurrent].classList.contains('mushroom')) {
      c[marioCurrent].classList.remove('mushroom')
      score += 20
      //setTimeout for enemys
    }
    scoreDisplay.innerHTML = score
  }



  // * ENEMY FUNCTIONS & SETUP:

  // place enemies on grid
  enemies.forEach(enemy => {
    c[enemy.currentIndex].classList.add(enemy.className)
    c[enemy.currentIndex].classList.add('enemy')
  })

  // these enemies will move randomly
  enemies.forEach(enemy => moveEnemy(enemy))

  function enemiesRestart(enemy) {
    c[enemy.startIndex].classList.add(enemy.className)
  }

  function moveEnemy (enemy) {
    const directions = [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    setTimeout(() => {
      enemy.timerId = setInterval(function () {
        if (!c[enemy.currentIndex + direction].classList.contains('enemy') && !c[enemy.currentIndex + direction].classList.contains('wall') && !c[enemy.currentIndex + direction].classList.contains('blank')) {
          c[enemy.currentIndex].classList.remove(enemy.className)
          c[enemy.currentIndex].classList.remove('enemy')
          enemy.currentIndex += direction
          c[enemy.currentIndex].classList.add(enemy.className, 'enemy')
        } else {
          direction = directions[Math.floor(Math.random() * directions.length)]
        }

        checkForGameOver()
        checkForWin()

      }, enemy.speed)
    }, 2000)

  }


  // * GAME FUNCTIONS:

  //function checkCollision()

  //function gameLoop()

  function startGame() {
    score = 0
    scoreDisplay.innerHTML = score
    document.addEventListener('keydown', moveMario)
    enemies.forEach((enemy, index) => {
      moveEnemy(index, enemy.timeId)
    })
    startTimer()
    starCells.forEach(cell => cell.classList.add(starClass))
    mushroomCells.forEach(cell => cell.classList.add(mushroomClass))
    addMario(marioStart)
    removeMario(marioCurrent)
    marioCurrent = marioStart
    enemiesRestart()
  }

  function startTimer() {
    if (startTimerId) return
    startTimerId = setInterval(() => {
      countSeconds = countSeconds - 1
      timer.innerHTML = countSeconds
      if (countSeconds < 1 ){
        endOfGame()
        timer.innerHTML = 'Times Up'
        return
      }
    }, 1000)
    // enemiesInPen()
  }

  function restartGame() {
    score = 0
    scoreDisplay.innerHTML = score
    document.addEventListener('keydown', moveMario)
    enemies.forEach((enemy, index) => {
      moveEnemy(index, enemy.timeId)
    })
    startTimer()
    starCells.forEach(cell => cell.classList.add(starClass))
    mushroomCells.forEach(cell => cell.classList.add(mushroomClass))
    addMario(marioStart)
    removeMario(marioCurrent)
    marioCurrent = marioStart
    gameOver = false
  }

  function endOfGame() {
    // startAudio.pause()
    enemies.forEach(enemy => clearInterval(enemy.timerId))
    clearInterval(startTimerId)
    clearInterval(scoreTimer)
    removeMario(marioCurrent)
    document.addEventListener('keydown', handleKeyEnd)
    document.addEventListener('keyup', handleKeyEnd)
    startGame()
  }

  //* Stop Down Arrow Working

  function handleKeyEnd(){
    removeMario(marioCurrent)
  }



  function stationaryGrid(e) {
    //prevent browser from moving left to right with arrow keys:
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault()
    }
  }


  //check for a game over
  function checkForGameOver() {
    if (c[marioCurrent].classList.contains('enemy')) {
      enemies.forEach(enemy => clearInterval(enemy.timerId))
      document.removeEventListener('keyup', moveMario)
      setTimeout(function() {
        alert('Game Over')
      }, 500)
      setTimeout(function() {
        startGame()
      })
    }
  }

  //check for a win
  function checkForWin() {
    if (score === 1940) {
      enemies.forEach(enemy => clearInterval(enemy.timerId))
      document.removeEventListener('keyup', moveMario)
      setTimeout(function() {
        alert('You have WON!')
      }, 500)
    }
  }



  // ---------------------------------------------------------------------------





  // Popup - Start:

  // Popup - Close:



}
window.addEventListener('DOMContentLoaded', init)
