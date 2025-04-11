const quizGameButton = document.getElementById('quizGameButton');
quizGameButton.addEventListener('click', playQuizGame);

const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function playQuizGame() {
    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        let validAnswer = false;
        let userAnswer;

        while (!validAnswer) {
            let questionText = quiz[i].question + "\n" +
                quiz[i].options.join("\n") +
                "\nВведите номер ответа (1-3):";

            userAnswer = prompt(questionText);

            if (userAnswer === null) {
                alert("Игра прервана!");
                return;
            }

            let answerNumber = parseInt(userAnswer);


            if (isNaN(answerNumber) || answerNumber < 1 || answerNumber > 3) {
                alert("Ошибка! Введите число от 1 до 3!");
            } else {
                validAnswer = true;
                if (answerNumber === quiz[i].correctAnswer) {
                    correctCount++;
                    alert("Правильно!");
                } else {
                    alert("Неправильно! Правильный ответ: " + quiz[i].correctAnswer);
                }
            }
        }
    }

    alert(`Викторина завершена!\nПравильных ответов: ${correctCount} из ${quiz.length}`);
}
