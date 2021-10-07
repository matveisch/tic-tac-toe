let gameBoard = (function() {
    'use strict';

    let boardContent = ['X','O','X','X','O','X','O','O','X'];

    // создаем для каждого элемента в массиве отдельный div с этим элементом
    boardContent.forEach((item) => {
        const boardContainer = document.querySelector('.board-container');
        const container = document.createElement('div');
        container.classList.add('board-element');
        container.textContent = item;
        boardContainer.appendChild(container);
    })

    return {
    };
})();

const playerFactory = (name, sign) => {
    return {name, sign}
}

const player1 = playerFactory('me', 'X');
const player2 = playerFactory('you', 'O');

console.log(player1);
console.log(player2);