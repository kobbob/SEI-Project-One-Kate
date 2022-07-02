console.log('connected')

function init() {

  // * Character set up -------------------------
  const marioClass = 'mario'
  const marioStart = 243
  let marioCurrent = marioStart

  const bowserClass = 'bowser'
  const bowserStart = 152
  const waluigiClass = 'waluigi'
  const waluigiStart = 151
  const kingbooClass = 'kingboo'
  const kingbooStart = 153

  const starClass = 'star'


  // * <<<<<<<<<<<< GRID CONFIGURATION >>>>>>>>>>>

  const grid = document.querySelector('.grid')

  const wallClass = 'wall'
  const removeCellClass = 'removeCell'
  const penClass = 'pen'
  const leftborderClass = 'leftborder'
  const rightborderClass = 'rightborder'
  const topborderClass = 'topborder'
  const bottomborderClass = 'bottomborder'

  const width = 18
  const cellCount = width * width
  const cells = []
  const wallCells = []
  const removeCells = []
  const penCells = []
  const leftborderCells = []
  const rightborderCells = []
  const topborderCells = []
  const bottomborderCells = []
  const starCells = []


  // * Create Grid ----------------------------
  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      // cell.innerText = i
      cell.id = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addMario(marioStart)
    addBowser(bowserStart)
    addWaluigi(waluigiStart)
    addKingboo(kingbooStart)
  }
  createGrid()


  // * Create Walls ---------------------------
  function addWallCells() {
    for (let i = 0; i < cells.length; i++) {
      if ((i === 20 || i === 38 || i === 22 || i === 23 || i === 24 || i === 29 || i === 30 || i === 31 || i === 33
        || i === 38 || i === 51 || i === 8 || i === 9 || i === 26 || i === 27 || i === 53 || i === 36
        || i === 58 || i === 59 || i === 60 || i === 62 || i === 63 || i === 65 || i === 66 || i === 67
        || i === 73 || i === 74 || i === 77 || i === 80 || i === 81 || i === 84 || i === 87 || i === 88
        || i === 97 || i === 98 || i === 99 || i === 100 || i === 252
        || i === 108 || i === 109 || i === 110 || i === 123 || i === 124 || i === 125 || i === 126 || i === 127 || i === 128 || i === 141 || i === 142 || i === 143
        || i === 162 || i === 163 || i === 164 || i === 180 || i === 181 || i === 182 || i === 177 || i === 178 || i === 179 || i === 195 || i === 196 || i === 197
        || i === 252 || i === 269
        || i === 112 || i === 113 || i === 120 || i === 121
        || i === 130 || i === 131 || i === 138 || i === 139
        || i === 166 || i === 167 || i === 174 || i === 175
        || i === 184 || i === 185 || i === 192 || i === 193
        || i === 205 || i === 206 || i === 207 || i === 208
        || i === 217 || i === 218 || i === 220 || i === 221 || i === 224 || i === 225 || i === 228 || i === 229 || i === 231 || i === 232
        || i === 236 || i === 249
        || i === 254 || i === 256 || i === 258 || i === 259 || i === 260 || i === 261 || i === 262 || i === 263 || i === 265 || i === 267
        || i === 274 || i === 278 || i === 279 || i === 283
        || i === 289 || i === 290 || i === 291 || i === 292 || i === 293 || i === 294 || i === 296 || i === 297 || i === 299 || i === 300 || i === 301 || i === 302 || i === 303 || i === 304)) {
        wallCells.push(cells[i])
        wallCells.forEach(wallCell => {
          wallCell.classList.add(wallClass)
        })
      }
    }
  }
  addWallCells()


  // * Remove Cells ---------------------------
  function removeGridCells() {
    for (let i = 0; i < cells.length; i++) {
      if (( i === 8 || i === 9
        || i === 26 || i === 27
        || i === 36 || i === 53
        || i === 108 || i === 109 || i === 110 || i === 123 || i === 124 || i === 125
        || i === 126 || i === 127 || i === 128 || i === 141 || i === 142 || i === 143
        || i === 162 || i === 163 || i === 164 || i === 177 || i === 178 || i === 179
        || i === 180 || i === 181 || i === 182 || i === 195 || i === 196 || i === 197
        || i === 252 || i === 269)) {
        removeCells.push(cells[i])
        removeCells.forEach(removeCell => {
          removeCell.classList.add(removeCellClass)
        })
      }
    }
  }
  removeGridCells()


  // * Create Pen ---------------------------
  function createPen() {
    for (let i = 0; i < cells.length; i++) {
      if (( i === 133 || i === 134 || i === 135 || i === 136 || i === 151 || i === 152 || i === 153 || i === 154 || i === 169 || i === 170 || i === 171 || i === 172)) {
        penCells.push(cells[i])
        penCells.forEach(penCell => {
          penCell.classList.add(penClass)
        })
      }
    }
  }
  createPen()


  // * Create Left Edge Border ---------------------------
  function createLeftBorder() {
    for (let i = 0; i < cells.length; i++) {
      if (( i === 0 || i === 18 || i === 54 || i === 72 || i === 90 || i === 269 || i === 144 || i === 198 || i === 216 || i === 234 || i === 270 || i === 288 || i === 306
        || i === 73 || i === 217 || i === 289
        || i === 20 || i === 38 || i === 236 || i === 254
        || i === 21 || i === 39 || i === 75 || i === 219 || i === 237 || i === 255
        || i === 22 || i === 58 || i === 112 || i === 130 || i === 166 || i === 184 || i === 220 || i === 256 || i === 274
        || i === 77 || i === 257 || i === 275
        || i === 78 || i === 114 || i === 132 || i === 168 || i === 186 || i === 222 || i === 258
        || i === 97 || i === 133 || i === 151 || i === 169 || i === 205
        || i === 25 || i === 61 || i === 295
        || i === 8 || i === 26 || i === 62 || i === 80 || i === 224 || i === 278 || i === 296
        || i === 29 || i === 65 || i === 299
        || i === 84 || i === 120 || i === 138 || i === 174 || i === 192 || i === 228
        || i === 265 || i === 283
        || i === 33 || i === 51 || i === 87 || i === 123 || i === 141 || i === 177 || i === 195 || i === 231 || i === 249 || i === 267
        || i === 53)) {
        leftborderCells.push(cells[i])
        leftborderCells.forEach(leftborderCell => {
          leftborderCell.classList.add(leftborderClass)
        })
      }
    }
  }
  createLeftBorder()


  // * Create Right Edge Border ---------------------------
  function createRightBorder() {
    for (let i = 0; i < cells.length; i++) {
      if (( i === 9 || i === 27 || i === 63 || i === 81 || i === 225 || i === 279 || i === 297
        || i === 100 || i === 136 || i === 154 || i === 172 || i === 208 || i === 263
        || i === 84
        || i === 31 || i === 67 || i === 121 || i === 139 || i === 175 || i === 193 || i === 229 || i === 265 || i === 283
        || i === 33 || i === 51 || i === 249 || i === 267
        || i === 88 || i === 232 || i === 304
        || i === 17 || i === 35 || i === 71 || i === 89 || i === 107 || i === 161 || i === 215 || i === 233 || i === 251 || i === 287 || i === 305 || i === 323
        || i === 36 || i === 110 || i === 128 || i === 164 || i === 182 || i === 252)) {
        rightborderCells.push(cells[i])
        rightborderCells.forEach(rightborderCell => {
          rightborderCell.classList.add(rightborderClass)
        })
      }
    }
  }
  createRightBorder()

  // * Create Top Edge Border ---------------------------
  function createTopBorder() {
    for (let i = 0; i < cells.length; i++) {
      if (( i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 10 || i === 11 || i === 12 || i === 13 || i === 14 || i === 15 || i === 16 || i === 17
        || i === 20 || i === 22 || i === 23 || i === 24 || i === 29 || i === 30 || i === 31 || i === 33 || i === 36 || i === 53 || i === 58 || i === 59 || i === 60 || i === 62 || i === 63 || i === 65 || i === 66 || i === 67
        || i === 73 || i === 74 || i === 87 || i === 88
        || i === 97 || i === 100
        || i === 108 || i === 109 || i === 110 || i === 112 || i === 113 || i === 120 || i === 121 || i === 123 || i === 124 || i === 125
        || i === 159 || i === 160 || i === 161
        || i === 162 || i === 163 || i === 164 || i === 166 || i === 167 || i === 133 || i === 136 || i === 174 || i === 175 || i === 177 || i === 178 || i === 179
        || i === 205 || i === 206 || i === 207 || i === 208 || i === 217 || i === 218 || i === 220 || i === 221 || i === 228 || i === 229 || i === 231 || i === 232 || i === 252 || i === 256 || i === 258 || i === 259 || i === 260 || i === 261 || i === 262 || i === 263 || i === 265 || i === 269
        || i === 289 || i === 290 || i === 291 || i === 293 || i === 294 || i === 299 || i === 300 || i === 302 || i === 303 || i === 304)) {
        topborderCells.push(cells[i])
        topborderCells.forEach(topborderCell => {
          topborderCell.classList.add(topborderClass)
        })
      }
    }
  }
  createTopBorder()

  // * Create Bottom Edge Border ---------------------------
  function createBottomBorder() {
    for (let i = 0; i < cells.length; i++) {
      if (( i === 36 || i === 38 || i === 22 || i === 23 || i === 24 || i === 26 || i === 27 || i === 29 || i === 30 || i === 31 || i === 51 || i === 53
        || i === 126 || i === 127 || i === 128 || i === 58 || i === 60 || i === 65 || i === 67 || i === 73 || i === 74 || i === 97 || i === 98 || i === 99 || i === 100 || i === 84 || i === 87 || i === 88
        || i === 77 || i === 130 || i === 131 || i === 138 || i === 139 || i === 169 || i === 170 || i === 171 || i === 172 || i === 180 || i === 181 || i === 182 || i === 184 || i === 185 || i === 192 || i === 193 || i === 195 || i === 196 || i === 197
        || i === 217 || i === 220 || i === 221 || i === 205 || i === 208 || i === 224 || i === 225 || i === 228 || i === 229 || i === 232 || i === 254 || i === 252 || i === 258 || i === 259 || i === 262 || i === 263 || i === 267 || i === 269
        || i === 306 || i === 307 || i === 308 || i === 309 || i === 310 || i === 311 || i ===  312 || i ===  313 || i === 314 || i ===  315 || i === 316 || i === 317 || i === 318 || i ===  319 || i ===  320 || i === 321 || i === 322 || i === 323
        || i === 289 || i === 290 || i === 291 || i === 292 || i === 293 || i === 294 || i === 296 || i === 297 || i === 299 || i === 300 || i === 301 || i === 302 || i === 303 || i === 304 )) {
        bottomborderCells.push(cells[i])
        bottomborderCells.forEach(bottomborderCell => {
          bottomborderCell.classList.add(bottomborderClass)
        })
      }
    }
  }
  createBottomBorder()



  // * <<<<<<<<<<<< ELEMENT  CONFIGURATION >>>>>>>>>>>>>>

  function addStars() {
    for (let i = 0; i < cells.length; i++) {
      if (( i !== 20 ) && ( i !== 38 ) && ( i !== 22 ) && ( i !== 23 ) && ( i !== 24 ) && ( i !== 8 ) && ( i !== 9 ) && ( i !== 26 ) && ( i !== 27 ) && ( i !== 29 ) && ( i !== 30 )
      && ( i !== 31 ) && ( i !== 33 ) && ( i !== 51 ) && ( i !== 53 ) && ( i !== 36 ) && ( i !== 58 ) && ( i !== 59 ) && ( i !== 60 ) && ( i !== 62 ) && ( i !== 63 ) && ( i !== 65 )
      && ( i !== 66 ) && ( i !== 67 ) && ( i !== 73 ) && ( i !== 74 ) && ( i !== 77 ) && ( i !== 80 ) && ( i !== 81 ) && ( i !== 84 ) && ( i !== 87 ) && ( i !== 88 ) && ( i !== 97 ) && ( i !== 98 )
      && ( i !== 100 ) && ( i !== 108 ) && ( i !== 109 ) && ( i !== 110 ) && ( i !== 112 ) && ( i !== 113 ) && ( i !== 120 ) && ( i !== 121 ) && ( i !== 123 ) && ( i !== 124 ) && ( i !== 125 ) && ( i !== 126 ) && ( i !== 127)
      && ( i !== 128 ) && ( i !== 130 ) && ( i !== 131 ) && ( i !== 133 ) && ( i !== 134 ) && ( i !== 135 ) && ( i !== 136 ) && ( i !== 138 ) && ( i !== 139 ) && ( i !== 141 ) && ( i !== 142 ) && ( i !== 143 )
      && ( i !== 151 ) && ( i !== 152 ) && ( i !== 153 ) && ( i !== 154 ) && ( i !== 162 ) && ( i !== 163 ) && ( i !== 164 ) && ( i !== 166 ) && ( i !== 167 ) && ( i !== 169 ) && ( i !== 170 ) && ( i !== 171 )
      && ( i !== 172 ) && ( i !== 174 ) && ( i !== 175 ) && ( i !== 177 ) && ( i !== 178 ) && ( i !== 179 ) && ( i !== 180 ) && ( i !== 181 ) && ( i !== 182 ) && ( i !== 184 ) && ( i !== 185 ) && ( i !== 192 )
      && ( i !== 193 ) && ( i !== 195 ) && ( i !== 196 ) && ( i !== 197 ) && ( i !== 205 ) && ( i !== 206 ) && ( i !== 207 ) && ( i !== 208 ) && ( i !== 217 ) && ( i !== 218 ) && ( i !== 220 ) && ( i !== 221 )
      && ( i !== 224 ) && ( i !== 225 ) && ( i !== 228 ) && ( i !== 229 ) && ( i !== 231 ) && ( i !== 232 ) && ( i !== 236 ) && ( i !== 254 ) && ( i !== 252) && ( i !== 254 ) && ( i !== 256 ) && ( i !== 258)
      && ( i !== 259 ) && ( i !== 260 ) && ( i !== 261 ) && ( i !== 262 ) && ( i !== 263 ) && ( i !== 265 ) && ( i !== 267 ) && ( i !== 269 ) && ( i !== 274 ) && ( i !== 278 ) && ( i !== 279 ) && ( i !== 283 )
      && ( i !== 289 ) && ( i !== 290 ) && ( i !== 291 ) && ( i !== 292 ) && ( i !== 293 ) && ( i !== 294 ) && ( i !== 296 ) && ( i !== 297 ) && ( i !== 299 ) && ( i !== 300 ) && ( i !== 301 ) && ( i !== 302 )
      && ( i !== 303 ) && ( i !== 304 ) && ( i !== 99 ) && ( i !== 249)) {
        starCells.push(cells[i])
        starCells.forEach(starCell => {
          starCell.classList.add(starClass)
        })
      }
    }
  }
  addStars()


  // * Add mushrooms to road ---------------------------
  const mushroomClass = 'mushroom'
  const mushroomCells = [cells[55], cells[70], cells[200], cells[248]]
  mushroomCells.forEach(cell => cell.classList.add(mushroomClass))



  // * <<<<<<<<<<<< GAME CONFIGURATION >>>>>>>>>>>>>>>


  // * Character Movement ---------------------------
  function addMario(position) {
    cells[position].classList.add(marioClass)
  }

  function removeMario(position) {
    cells[position].classList.remove(marioClass)
  }

  function addBowser(position) {
    cells[position].classList.add(bowserClass)
  }

  // function removeBowser(position) {
  //   cells[position].classList.remove(bowserClass)
  // }

  function addWaluigi(position) {
    cells[position].classList.add(waluigiClass)
  }

  // function removeWaluigi(position) {
  //   cells[position].classList.remove(waluigiClass)
  // }

  function addKingboo(position) {
    cells[position].classList.add(kingbooClass)
  }

  // function removeKingboo(position) {
  //   cells[position].classList.remove(kingbooClass)
  // }

  starCells.forEach(cell => cell.classList.add('road'))



  // * Movement Function ----------------------------

  function handleKeyDown(event){
    const key = event.keyCode
    const left = 37
    const right = 39
    const up = 38
    const down = 40

    // * Mario Moves:
    if (key === left && cells[marioCurrent - 1].classList.contains('road') === true) {
      removeMario(marioCurrent)
      marioCurrent--
    } else if (key === right && cells[marioCurrent + 1].classList.contains('road') === true) {
      removeMario(marioCurrent)
      marioCurrent++
    } else if (key === up && cells[marioCurrent - width].classList.contains('road') === true) {
      removeMario(marioCurrent)
      marioCurrent -= width
    } else if (key === down && cells[marioCurrent + width].classList.contains('road') === true) {
      removeMario(marioCurrent)
      marioCurrent += width
    } else {
      marioCurrent
    }


    if (cells[marioCurrent].classList.contains('star')) {
      cells[marioCurrent].classList.remove('star')
    }

    if (cells[marioCurrent].classList.contains('mushroom')) {
      cells[marioCurrent].classList.remove('mushroom')
    }

    addMario(marioCurrent)
  }


  document.addEventListener('keydown', handleKeyDown)





}

window.addEventListener('DOMContentLoaded', init)




// console.log(marioCurrent % width)
// if (key === left && marioCurrent % width !== 0) {
//   removeMario(marioCurrent)
//   marioCurrent--
// } else if (key === right && marioCurrent % width !== width - 1) {
//   removeMario(marioCurrent)
//   marioCurrent++
// } else if (key === up && marioCurrent >= width) {
//   removeMario(marioCurrent)
//   marioCurrent -= width
// } else if (key === down && marioCurrent + width <= cellCount - 1) {
//   removeMario(marioCurrent)
//   marioCurrent += width
// } else {
//   console.log('INVALID KEY')
// }

// addMario(marioCurrent)
// }




// console.log(marioCurrent % width)
// if (key === left && marioCurrent % width !== 0 || cells[marioCurrent - 1].classList.contains('wall') === true ) {
//   removeMario(marioCurrent)
//   marioCurrent--
// } else if (key === right && marioCurrent % width !== width - 1) {
//   removeMario(marioCurrent)
//   marioCurrent++
// } else if (key === up && marioCurrent >= width) {
//   removeMario(marioCurrent)
//   marioCurrent -= width
// } else if (key === down && marioCurrent + width <= cellCount - 1) {
//   removeMario(marioCurrent)
//   marioCurrent += width
// } else {
//   console.log('INVALID KEY')
// }

// addMario(marioCurrent)
// }


//   cells[marioCurrent].classList.remove('mario')

//   switch (event.keyCode) {
//     case 37: // left
//       if (
//         marioCurrent % width !== 0 &&
//         cells[marioCurrent - 1].classList.contains('wall') &&
//         cells[marioCurrent - 1].classList.contains('leftborder')
//       )
//         marioCurrent -= 1
//       break
//     case 39: // right
//       if (
//         marioCurrent % width !== width - 1 &&
//         cells[marioCurrent + 1].classList.contains('wall') &&
//         cells[marioCurrent - 1].classList.contains('rightborder')
//       )
//         marioCurrent += 1
//       break
//     case 38: // up
//       if (
//         marioCurrent >= width &&
//         cells[marioCurrent - width].classList.contains('wall') &&
//         cells[marioCurrent - 1].classList.contains('topborder')
//       )
//         marioCurrent -= width
//       break
//     case 40: //down
//       if (
//         marioCurrent + width <= cellCount - 1 &&
//         cells[marioCurrent + width].classList.contains('wall') &&
//         cells[marioCurrent - 1].classList.contains('bottomborder')
//       )
//         marioCurrent += width
//       break
//   }
//   cells[marioCurrent].classList.add('mario')
// }
// // ? Events
// document.addEventListener('keydown', handleKeyDown)

//   //  Collecting STARS & MUSHROOMS -----------------
//   if (cells[marioCurrent].classList.contains('star')) {
//     cells[marioCurrent].classList.remove('star')
//   } else if (cells[marioCurrent].classList.contains('mushroom')) {
//     cells[marioCurrent].classList.remove('mushroom')
//   }
//   cells[marioCurrent].classList.add('mario')

// }
