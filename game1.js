const guessNumberButton = document.getElementById(`guessNumberButton`);
guessNumberButton.addEventListener(`click`, playGuessGame);


function playGuessGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess;

    do {
        let game = prompt('Угадайте число от 1 до 100');
        if (game === null || game === '') {
            alert('Игра отменена.');
            return;
        }
        userGuess = parseInt(game);

        if (isNaN(userGuess)) {
            alert('Введите корректное число.');
            continue;
        }
        if (userGuess < randomNumber) {
            alert('Загаданное число больше.');
        } else if (userGuess > randomNumber) {
            alert('Загаданное число меньше.');

        }
    } while (userGuess !== randomNumber);
    alert('Вы угадали!');
}
