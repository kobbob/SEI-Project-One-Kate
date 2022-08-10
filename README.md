![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
# GA Project 1: ‘Mario Kart Pac-Man’

## Overview

During General Assembly’s Software Engineering Immersive course, our first project was to build a grid based game using vanilla javascript and functional programming.   

We had one week to complete the project and to implement our learning of HTML, CSS and JavaScript from the previous two weeks. 

## Navigation

* [The Brief](#the-brief)
* [Technologies Used](#technologies-used)
* [Game Logic](#game-logic)
* [Building the Game](#building-the-game)
  * [Setting up the Grid](#setting-up-the-grid)
  * [Movement](#movement)
  * [Game Over](#game-over)
* [Challenges](#challenges)
* [Future Improvements](#future-improvements)


## The Brief

* Submit a wireframe for approval. 
* Meet project requirements for brief/game logic. 
* Design logic for winning and visually display which player won. 
* Include separate HTML / CSS / JavaScript files. 
* Use JavaScript for DOM manipulation. 
* Time: One Week.



## Technologies Used
* JavaScript (ES6+)
* HTML5 
* CSS3  
* Git & GitHub 


## Game Logic
Based on the classic arcade game ‘Pac Man’, I have used the original game logic but have adapted the characters to reflect the game Mario-Kart 

* The player aims to eat all the food in a maze whilst being hunted by ghosts/enemies. 
* If the player eats a special flashing icon, the enemies start to flash and can now be captured by the player, sending them back to their holding pen where they can once again start to hunt the player. 
* The aim is to achieve the highest score possible before being killed by the enemies. 

Project Requirements: 
* The player should be able to clear at least one board
* The player's score should be displayed at the end of the game

## Building the game

### Setting up the Grid
To create the game board grid, I first set the number of “cells” I wanted the grid to make up (width * length), and then used a for loop to create HTML divs and assign them to a parent div (“grid”). 

```javascript
 const grid = document.querySelector('.grid') //gameBoard
 const width = 18
 const cellCount = width * width
 const c = [] // cells
 createGrid()

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
 ```

This creates a grid with 18 by 18 cells/divs. By assigning an iteration to each div, I could create a maze layout based on the number assigned to the div. 

To create a maze with border-lines rather than block colours, I assigned certain cells either a right, left, top or bottom border class and styled these with CSS. On reflection, this was fairly time consuming and I could have achieved a similar effect in less time. 

I then placed all the characters and point gaining icons onto the grid using the same method. For example: 

```javascript
 const mushroomClass = 'mushroom'
 const mushroomCells = [c[55], c[70], c[200], c[248]]
 mushroomCells.forEach(cell => cell.classList.add(mushroomClass))
 mushroomCells.forEach(cell => cell.classList.add('road'))
```

![P1startgame](https://user-images.githubusercontent.com/103049670/183933096-292b1bac-9088-43df-b67f-364c9efa9a3b.png)


### Movement

__Player (Mario) Movement__

The player (Mario) should be able to navigate through the maze and collect the star or mushroom icons to gain points. Mario should not be able to move outside of the given maze. The player will control Mario’s movement with the arrow functions on their keyboard (instructions to be added as a future improvement). The below function checks to see if when Mario is moved into a new cell, it must contain the class ‘road’ in order to move into it: 

```javascript
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
 
```

As Mario moves around the grid, the player is able to accumulate points as Mario consumes both stars and mushroom icons. Once Mario is able to consume all icons without colliding with an enemy, the player has won the game. 

The function ‘checkForWin’ is activated once the game starts to check if the total score reaches 1940 (total of all stars and mushroom points combined): 

```javascript
   function checkForWin() {
     if (score === 1940) {
       enemies.forEach(enemy => clearInterval(enemy.timerId))
       document.removeEventListener('keyup', moveMario)
       setTimeout(function() {
         alert('You have WON!')
       }, 500)
     }
   }
```

__Enemy Movement__

The enemies currently move at random once the game begins. A future improvement will be to move them intelligently towards Mario, each having their own logic. 

Their start position is situated within a ‘pen’ in the middle of the grid. They begin to move out of the pen at random, also making sure to navigate within the structure of the maze. 

```javascript
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
```

### Game Over
For the player to lose a game, they have to collide with the enemy. This would mean being in the same cell/div at the same time. The function ‘checkForGameOver’ writes the logic that if an ‘enemy’ is in the same cell as Mario’s current position, then an alert will activate game over: 

```javascript
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
```




## Challenges
* Spending too much time on CSS rather than game logic - I think my desire to create borders on each cell wall wasted a lot of time at the beginning of the project. There could be a more efficient way of styling this and achieving the same effect. 
* Working on the logic of the game and player/enemy movement in the given project timeframe. 
* Being unable to achieve the desired styling in the given time frame. 


## Future Improvements
* Adding an arcade screen that wraps around the grid/maze. 
* Interactive buttons integrated into the arcade screen. 
* Intelligent ghost/enemy movement. 
* Creating different levels of difficulty as the player wins each game. 
* Creating a leaderboard that stores the player’s historical game scores. 
* Refactor code. 
* Add instructions for the user/player. 
* Fix bugs. 


