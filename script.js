let options, blackSheep, score;

function startGame() {
    options = ["sheep", "goat", "tiger", "pig", "dog", "cat"];
    // Shuffle the options randomly
    options.sort(() => Math.random() - 0.5);
    // Choose the black sheep
    blackSheep = options[Math.floor(Math.random() * options.length)];
    score = 0;

    updateUI();
}

function updateUI() {
    document.getElementById('game-container').style.display = 'block';

    let selectElement = document.getElementById('choice');
    selectElement.innerHTML = '';
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let optionElement = document.createElement('option');
        optionElement.value = i;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    }

    document.getElementById('result').textContent = '';
}

function submitChoice() {
    let choice = document.getElementById('choice').value;
    let chosenOption = options[choice];

    if (chosenOption === blackAnimal) {
        document.getElementById('result').textContent = "Correct! That's the black sheep.";
        score++;
    } else {
        document.getElementById('result').textContent = `Wrong choice. The black sheep was ${blackSheep}.`;
    }

    document.getElementById('result').textContent += ` Your score: ${score}`;
}

function playAgain() {
    document.getElementById('game-container').style.display = 'none';
    startGame();
}
