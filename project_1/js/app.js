const game = {
playerAllHit: 0,
player: 1
}
const botPlay = {
  botAllHit: 0 
}
// const empty = document.querySelector(".emptybot")
// const hit = document.querySelector(".pendinghitbot")
function gridClickBot(botPosition){
//// All of the query selectors here are Player2 right now I was calling it bot because I was trying to make the bot choose at random. I'll implement if I can figure it out
      const position = document.querySelector(".bothplayers")
      const theWin = document.querySelector(".thewin")
      const ship = document.querySelectorAll(".ship")
//// I have an enormous amount of trouble trying to figure outhow to set-up the grid in my JavaScript. But with the help of a teacher I am using this method ${} it's basically hard coding the positional data into the HTML
      const botMiss = document.querySelector(`.emptybot${botPosition}`)
      const botHit = document.querySelector(`.pendinghitbot${botPosition}`)
let botBoardPosition = botBoard[botPosition]
changeCss2(botBoardPosition, botHit, botMiss, ship, theWin, position)
}
function changeCss2(botBoardPosition, botHit, botMiss, ship, theWin, position){
//// There are many different if else statements here.There are some that add to player and also inputs classes for the red and white pegs
if(game.player === 1){
    gridClick();
}else{if(botBoardPosition === 2){
    botHit.className = "hit"
    botPlay.botAllHit++
    game.player++
}else if(botBoardPosition === 0){
    botMiss.className = "miss"
    game.player++
}}
if(botPlay.botAllHit === 17){
      alert("Bot wins")
      // ship.className = "gray"
      theWin.src = "img/200.gif"
      position.classList.remove = "bothplayers"
      position.className = "bothplayers2"
    }
}
///// This is player one
function gridClick(position) {
//// Everything here is for player 1, specifically selecting things from the Dom
      const position1 = document.querySelector(".bothplayers")
      const theWin = document.querySelector(".thewin")
      const ship = document.querySelectorAll(".ship")
      const theHit = document.querySelector(`.pendinghit${position}`)
      const theMiss = document.querySelector(`.empty${position}`)
let boardPosition = board[position]
changeCss(boardPosition, theHit, theMiss, ship, theWin, position1)
}
function changeCss(boardPosition, theHit, theMiss, ship, theWin, position1) {
if(game.player === 0){
      return
}else{ if(boardPosition === 2){
    theHit.className = "hit"
    game.playerAllHit++
        game.player--
}else if(boardPosition === 0){
    theMiss.className = "miss"
    game.player--
}}
if(game.playerAllHit === 17){
      // ship.className = "gray"
      alert("Player wins")
      theWin.src = "img/200.gif"
      position1.classList.remove = "bothplayers"
      position1.className = "bothplayers2"
    }
}
//// This is the player1 board
let board = [
2, 2, 2, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 2, 0, 0, 0, 0, 0, 0,
0, 0, 0, 2, 0, 0, 0, 0, 0, 0,
0, 0, 0, 2, 0, 0, 0, 0, 0, 0,
0, 0, 0, 2, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 2, 2, 2, 2, 2,
2, 0, 0, 0, 0, 0, 0, 0, 0, 2,
2, 0, 0, 0, 0, 0, 0, 0, 0, 2,
2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
//// This is the bot board
let botBoard = [
0, 0, 0, 0, 0, 2, 2, 2, 0, 0,
0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
0, 0, 0, 2, 2, 2, 2, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
0, 2, 0, 0, 0, 2, 2, 2, 0, 0]

// function botChoce(){
// }

// let tile = botBoard[Math.floor(Math.random()*botBoard.length)];
// console.log(tile)
// function botGrid() {
//       for (var i = 0; i < botBoard.length; i++) {
//             console.log(botBoard[i]);

//             if(i === 0){
//                   empty.innerHTML = ""
//                empty.innerHTML += `<div class="miss"></div`
//             }
//             if (i === 2){
//                   hit.innerHTML = ""
//                   hit.innerHTML += `<div class="hit"></div>`
//             }
//         }
//       }
// botGrid();
// function reset() {
// hit.classList.remove("hit")
// }
// function reset(){
//     if(play.playerAllHit === 17){
//     }
// }