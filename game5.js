const paperGameButton = document.getElementById(`paperGameButton`);
paperGameButton.addEventListener(`click`, playPaperGame);


function playPaperGame() {
    const variants = ["камень", "ножницы", "бумага"];
    let userVariant =  prompt(`Выбери один из вариантов: ${variants}`);
    let randomIndex = Math.floor(Math.random() * variants.length);
    let randomVariantСomputer = variants[randomIndex]
    if (userVariant === null){
        
        alert('Игра отменена')
        
    } else
    if (userVariant.toLowerCase() === randomVariantСomputer.toLowerCase()) {
        alert(`Ваш выбор - ${userVariant}, а выбор компьютера - ${randomVariantСomputer}
        Результат: Ничья` 
        
        )
    } else 
    if (userVariant.toLowerCase() === "камень".toLowerCase() && randomVariantСomputer.toLowerCase() === 'бумага'.toLowerCase()) {
        alert(`Ваш выбор - ${userVariant}, а выбор компьютера - ${randomVariantСomputer}
            Результат: Ты проиграл` 
            
            )
    } else
    if (userVariant.toLowerCase() === "камень".toLowerCase() && randomVariantСomputer.toLowerCase() === 'ножницы'.toLowerCase()) {
        alert(`Ваш выбор - ${userVariant}, а выбор компьютера - ${randomVariantСomputer}
            Результат: Ты выиграл` 
        ) 
    }else
    if (userVariant.toLowerCase() === "ножницы".toLowerCase() && randomVariantСomputer.toLowerCase() === 'бумага'.toLowerCase()) {
        alert(`Ваш выбор - ${userVariant}, а выбор компьютера - ${randomVariantСomputer}
            Результат: Ты выиграл` 
        )  
    }else
    if (userVariant.toLowerCase() === "ножницы".toLowerCase() && randomVariantСomputer.toLowerCase() === 'камень'.toLowerCase()) {
        alert(`Ваш выбор - ${userVariant}, а выбор компьютера - ${randomVariantСomputer}
            Результат: Ты проиграл` 
        ) 
    }else
    if (userVariant.toLowerCase() === "бумага".toLowerCase() && randomVariantСomputer.toLowerCase() === 'камень'.toLowerCase()) {
        alert(`Ваш выбор - ${userVariant}, а выбор компьютера - ${randomVariantСomputer}
            Результат: Ты выиграл` 
        ) 
    }else
    if (userVariant.toLowerCase() === "бумага".toLowerCase() && randomVariantСomputer.toLowerCase() === 'ножницы'.toLowerCase()) {
        alert(`Ваш выбор - ${userVariant}, а выбор компьютера - ${randomVariantСomputer}
            Результат: Ты проиграл` 
        ) 
    }
    else {
        alert(`Вы ввели не коректное значение. 
            Вариант должен быть - камень, ножницы или  бумага` )
    }
}