const mathExamplesButton = document.getElementById(`mathExamplesButton`);
mathExamplesButton.addEventListener(`click`, playSimpleArithmetic);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
    const operation = ['+', '-', '*', '/'];
    const operator = operation[getRandomNumber(0, operation.length - 1)];
    let num1;
    let num2;
    let correctAnswer;

    switch (operator) {
        case '+':
            num1 = getRandomNumber(1, 10);
            num2 = getRandomNumber(1, 10);
            correctAnswer = num1 + num2;
            break;

        case '-':
            num1 = getRandomNumber(1, 20);
            num2 = getRandomNumber(1, num1 - 1);
            correctAnswer = num1 - num2;
            break;

        case '*':

            num1 = getRandomNumber(1, 10);
            num2 = getRandomNumber(1, 10);
            correctAnswer = num1 * num2;
            break;

        case '/':
            num2 = getRandomNumber(1, 10);
            correctAnswer = getRandomNumber(1, 10);
            num1 = correctAnswer * num2;
            break;
    }

    return {
        task: `${num1} ${operator} ${num2}`,
        answer: correctAnswer
    };
}



function playSimpleArithmetic() {
    const currentTask = generateTask();
    const userAnswer = prompt(`Решите задачу: ${currentTask.task}`);

    if (userAnswer === null || userAnswer === '') {
        alert('Игра отменена');
        return;
    }

    let userNumber = parseInt(userAnswer);

    if (isNaN(userNumber)) {
        alert('Введите корректное число.');
        return;
    } else if (userNumber === currentTask.answer) {
        alert('Верный ответ!');
    } else {
        alert(`Ошибка! Верный ответ ${currentTask.answer}`);
    }
}


