const player1 = { currentScore: 0, finalScore: 0, gameOver: false };
const player2 = { currentScore: 0, finalScore: 0, gameOver: false };
const rollButton = document.getElementById("rollButton");
const passButton = document.getElementById("passButton");
const winMessage = document.getElementById("winMessage");
const imageContainer = document.getElementById('imageContainer');

const imageSources = ['die1.gif', 'die2.gif', 'die3.gif', 'die4.gif', 'die5.gif', 'die6.gif'];

const startingImageSource = 'diceStart.png';

let currentPlayer = player1; // Set's Player One as the first player
document.getElementById("player1").classList.add("active"); 

rollButton.addEventListener("click", () => {
    if (!currentPlayer.gameOver) {
        const roll = Math.floor(Math.random() * 6) + 1;
        displayImage(roll - 1);
        const currentScoreElement = document.getElementById(`currentScore${currentPlayer === player1 ? 1 : 2}`);
        currentScoreElement.textContent = roll;

        if (roll === 1) {
            currentPlayer.gameOver = true;
            currentScoreElement.textContent = "1 (Game Over)";
            switchPlayer();
        } else {
            currentPlayer.currentScore += roll;
            currentScoreElement.textContent = currentPlayer.currentScore;

            // Check if the current player's score is 20 or more
            if (currentPlayer.currentScore >= 20) {
                currentPlayer.gameOver = true;
                winMessage.textContent = `Player ${currentPlayer === player1 ? 1 : 2} wins with a score of ${currentPlayer.currentScore}!`;
                rollButton.disabled = true;
                passButton.disabled = true;
            }
        }
    }
});

passButton.addEventListener("click", () => {
    if (!currentPlayer.gameOver) {
        currentPlayer.finalScore = currentPlayer.currentScore;
        switchPlayer();

        if (currentPlayer.gameOver) {
            winMessage.textContent = `Player ${currentPlayer === player1 ? 1 : 2} wins with a score of ${currentPlayer.finalScore}!`;
            rollButton.disabled = true;
            passButton.disabled = true;
        }
    }
});

// Function to display the starting image of a die on 1
function displayStartingImage() {
    imageContainer.innerHTML = '';
    const img = new Image();
    img.src = startingImageSource;
    imageContainer.appendChild(img);
}

// Dice gif roll
function displayImage(index) {
    imageContainer.innerHTML = '';
    const img = new Image();
    img.src = imageSources[index];
    imageContainer.appendChild(img);
}

displayStartingImage();

function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;

    document.getElementById("player1").classList.toggle("active");
    document.getElementById("player2").classList.toggle("active");
}







