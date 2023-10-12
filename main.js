const rollButton = document.getElementById('rollButton');
const resultMessage = document.getElementById("resultMessage");
const currentScore = document.getElementById("currentScore");
const gif = document.getElementById('gif');
const imageContainer = document.getElementById('imageContainer');

const imageSources = ['die1.gif', 'die2.gif', 'die3.gif', 'die4.gif', 'die5.gif', 'die6.gif'];

const startingImageSource = 'diceStart.png';

let rollingScore = 0; // The rolling score is zero at the start


// Roll the die function
function rollDie() {
    const result = Math.floor(Math.random() * 6) + 1;
    displayImage(result - 1);
    rollingScore += result; // Adds the random number to the rolling score
    currentScore.textContent = rollingScore; // Outputs the rolling score

    if (result === 1) { // If the random number is one, then
        resultMessage.textContent = "Game Over! You rolled a one!";
        rollButton.textContent = "Restart Game";
        rollButton.removeEventListener('click', rollDie); //Removes the roll die button, as the game needs to restart
        rollButton.addEventListener('click', startGame); //Enables the start game button 
        rollButton.disabled = false;
    } else if (rollingScore >= 20) { // If the rolling score is 20 or more, then
        resultMessage.textContent = "Congratulations! You made it to 20 points without rolling a 1!";
        rollButton.textContent = "Restart Game";
        rollButton.removeEventListener('click', rollDie); //Removes the roll die button, as the game needs to restart
        rollButton.addEventListener('click', startGame); //Enables the start game button
        rollButton.disabled = false;
    }
}


// Start the game function
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


// Add an event listener to the button to start the game when clicked
rollButton.addEventListener('click', startGame);





