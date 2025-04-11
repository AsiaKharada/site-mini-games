const colorBlock = document.querySelectorAll('#game-6');
const colorBtn = document.querySelectorAll('.color-btn');

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

if (colorBtn.length > 0) {
    colorBtn[0].addEventListener('click', () => {
        colorBlock.forEach(box => {
            box.style.backgroundColor = getRandomColor();
        });
    });
}