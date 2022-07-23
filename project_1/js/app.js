const play = {
playerAllHit: 0,
player: 1
}
const botPlay = {
  botAllHit: 0,    
}

// const empty = document.querySelector(".emptybot")
// const hit = document.querySelector(".pendinghitbot")

function gridClickBot(botPosition){
      const ship = document.querySelectorAll(".ship")
    const botMiss = document.querySelector(`.emptybot${botPosition}`)
    const botHit = document.querySelector(`.pendinghitbot${botPosition}`)
   console.log("position", botPosition)
    console.log("ship position",botBoard[botPosition])
let botBoardPosition = botBoard[botPosition]
changeCss2(botBoardPosition, botHit, botMiss, ship)
}
function changeCss2(botBoardPosition, botHit, botMiss, ship){
if(play.player === 1){
    gridClick();
}else{if(botBoardPosition === 2){
    botHit.className = "hit"
    botPlay.botAllHit++
    play.player++
    console.log(botPlay.botAllHit, "bot hit")
    console.log(play.player)
}else if(botBoardPosition === 0){
    botMiss.className = "miss"
    play.player++
}}
if(botPlay.botAllHit === 17){
      alert("Bot wins")
      ship.className = "gray"
    }
}
// function win(){
//    if(botPlay.botAllHit === 17){
//     alert("Bot wins")
//     ship.className = "gray"
//   }else if(play.playerAllHit === 17){
//     ship.className = "gray"
// alert("Player wins")
//   }  
// }
///// This isplayer one
function gridClick(position) {
      const ship = document.querySelectorAll(".ship")
const theHit = document.querySelector(`.pendinghit${position}`)
const theMiss = document.querySelector(`.empty${position}`)
console.log("position", position)
let boardPosition = board[position]
changeCss(boardPosition, theHit, theMiss, ship)
console.log("ship Points", boardPosition)
}
function changeCss(boardPosition, theHit, theMiss, ship) {
if(play.player === 0){
      return
}else{ if(boardPosition === 2){
    theHit.className = "hit"
    play.playerAllHit++
        play.player--
              console.log(play.player)
              console.log(play.botAllHit, "bot hits")
              console.log(play.playerAllHit, "player hits")
}else if(boardPosition === 0){
    theMiss.className = "miss"
    play.player--
}}
if(play.playerAllHit === 17){
      ship.className = "gray"
  alert("Player wins")
    }
}
// function botChoce(){

// }

// console.log("red")
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

function reset() {
hit.classList.remove("hit")
}

// function reset(){
//     if(play.playerAllHit === 17){
        
//     }
// }