// init array
var imagesArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]



// make random 0-5
function rollADice() {
    var random = Math.random();
    var range = Math.floor(random * 6);
    
    return range;
}

// find winner
var player1 = rollADice();
var player2 = rollADice();

document.querySelectorAll(".dice")[0].setAttribute("src", "img/" + imagesArray[player1]);
document.querySelectorAll(".dice")[1].setAttribute("src", "img/" + imagesArray[player2]);

// update elements

if(player1 > player2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (player2 > player1) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").textContent = "Draw";
}