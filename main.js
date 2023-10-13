const player1 = { currentScore: 0, finalScore: 0, gameOver: false };
const player2 = { currentScore: 0, finalScore: 0, gameOver: false };
const rollButton = document.getElementById("rollButton");
const passButton = document.getElementById("passButton");
const winMessage = document.getElementById("winMessage");

let currentPlayer = player1; // Set's Player One as the first player
document.getElementById("player1").classList.add("active"); 

rollButton.addEventListener("click", () => {
    if (!currentPlayer.gameOver) {
        const roll = Math.floor(Math.random() * 6) + 1;

        const currentScoreElement = document.getElementById(`currentScore${currentPlayer === player1 ? 1 : 2}`);
        currentScoreElement.textContent = roll;

        if (roll === 1) {
            currentPlayer.gameOver = true;
            currentScoreElement.textContent = "1 (Game Over)";
            togglePlayer();
        } else {
            currentPlayer.currentScore += roll;
            currentScoreElement.textContent = currentPlayer.currentScore;
        }
    }
});

passButton.addEventListener("click", () => {
    if (!currentPlayer.gameOver) {
        currentPlayer.finalScore = currentPlayer.currentScore;
        togglePlayer();

        if (currentPlayer.gameOver) {
            winMessage.textContent = `Player ${currentPlayer === player1 ? 1 : 2} wins with a score of ${currentPlayer.finalScore}!`;
            rollButton.disabled = true;
            passButton.disabled = true;
        }
    }
});

function togglePlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;

    document.getElementById("player1").classList.toggle("active");
    document.getElementById("player2").classList.toggle("active");
}







