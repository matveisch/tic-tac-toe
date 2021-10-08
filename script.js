// создаем игроков и присваиваем каждому свой элемент
const playerFactory = (sign) => {
    return {sign}
}

const player1 = playerFactory('X');
const player2 = playerFactory('O');

let gameBoard = (function() {
    'use strict';
    const boardContainer = document.querySelector('.board-container');

    let boardContent = ['','','','','','','','',''];

    function displayBoard() {
        // divCounter используется для создания id
        let divCounter = 0;

        // очищаем страницу каждый раз перед выводом div
        while (boardContainer.firstChild) {
            boardContainer.removeChild(boardContainer.firstChild)
        }

        // создаем для каждого элемента в массиве отдельный div с этим элементом
        boardContent.forEach((item) => {
            const container = document.createElement('div');

            container.classList.add('board-element');

            // создаем id для каждого div
            container.id = divCounter;
            divCounter++;

            container.textContent = item;
            boardContainer.appendChild(container);
        })

        // выводим X по нажанию на div
        const boardElements = document.querySelectorAll('.board-element');
        boardElements.forEach((element) => {
            element.addEventListener('click', () => {
                gameBoard.boardContent.splice(element.id, 1, player1.sign);
                gameBoard.displayBoard()
            })
        })
    }

    displayBoard()

    return {
        boardContent: boardContent,
        displayBoard: displayBoard
    };
})();