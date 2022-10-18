// Iteration 5: Store the player score and display it on the game over screen
var playagain = document.getElementById('play-again-button')
playagain.onclick = screenchange

function screenchange(){
    location.href=('game.html')
}
var updatedscore = document.getElementById('score-board')
updatedscore.innerHTML = sessionStorage.getItem("scores")