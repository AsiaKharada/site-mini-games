const flipTextButton = document.getElementById(`flipTextButton`);
flipTextButton.addEventListener(`click`, playTextGame)


function playTextGame() {
    let userText = prompt('Введите текст, который нужно перевернуть');

    if (userText === null || userText.trim() === '') {
        alert('Игра отменена.');
        return;
    }

   userText = userText.split("").reverse("").join("");
    alert(userText);
}

