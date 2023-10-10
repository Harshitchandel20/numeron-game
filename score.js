
// Iteration 5: Store the player score and display it on the game over screen

const score_Board = document.getElementById("score-board")

score_Board.innerText = localStorage.getItem("total")

const play_again_button = document.getElementById("play-again-button")

play_again_button.onclick = function(){
    location.href="game.html"
}