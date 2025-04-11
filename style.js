// Task 1
let password = "пароль";

let password2 = "12345"
let result = prompt("Введите пароль");
if (result == password2){
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}
   
// Task 2 
let c = -3;
if (c > 0 && c < 10) {
    alert("Верно");
} else {
    alert("Неверно");
}

// Task 3
let d = 13;
let e = 113;

if(d > 100 || e > 100){
    alert("Верно");
} else {
    alert("Неверно");
}

// Task 4
let a = 2;
let b = 3;
alert(Number(a) + Number(b));

// Task 5
function getSeason(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12) {
        return "Ошибка: введите число от 1 до 12.";
    }

    let season;
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "осень";
            break;
        default:
            season = "Неизвестный месяц"; // Этот случай никогда не выполнится из-за проверки в начале
    }

    return `Месяц номер ${monthNumber} относится к сезону: ${season}`;
}

let monthNumber = 12;
console.log(getSeason(monthNumber));
