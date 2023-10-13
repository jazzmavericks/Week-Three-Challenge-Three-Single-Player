const rollButton = document.getElementById('rollButton');
const resultMessage = document.getElementById("resultMessage");
const currentScore = document.getElementById("currentScore");
const gif = document.getElementById('gif');
const imageContainer = document.getElementById('imageContainer');

const imageSources = ['die1.gif', 'die2.gif', 'die3.gif', 'die4.gif', 'die5.gif', 'die6.gif'];

const startingImageSource = 'diceStart.png';

let rollingScore = 0; // The rolling score is zero at the start

function rollDie() {
    const result = Math.floor(Math.random() * 6) + 1;
    displayImage(result - 1);
    rollingScore += result;
    currentScore.textContent = rollingScore;

    if (result === 1) {
        resultMessage.textContent = "Game Over! You rolled a one!";
        rollButton.textContent = "Restart Game";
        rollButton.removeEventListener('click', rollDie);
        rollButton.addEventListener('click', startGame);
        rollButton.disabled = false;
    } else if (rollingScore >= 20) {
        resultMessage.textContent = "Congratulations! You made it to 20 points without rolling a 1!";
        rollButton.textContent = "Restart Game";
        rollButton.removeEventListener('click', rollDie);
        rollButton.addEventListener('click', startGame);
        rollButton.disabled = false;
    }
}

function startGame() {
    resultMessage.textContent = "";
    rollButton.textContent = "Roll Die";
    currentScore.textContent = "0";
    rollButton.removeEventListener('click', startGame);
    rollButton.addEventListener('click', rollDie);
    rollingScore = 0;
    displayStartingImage();
    rollButton.disabled = false;
}

function displayStartingImage() {
    imageContainer.innerHTML = '';
    const img = new Image();
    img.src = startingImageSource;
    imageContainer.appendChild(img);
}

function displayImage(index) {
    imageContainer.innerHTML = '';
    const img = new Image();
    img.src = imageSources[index];
    imageContainer.appendChild(img);
}

displayStartingImage();

rollButton.addEventListener('click', startGame);
