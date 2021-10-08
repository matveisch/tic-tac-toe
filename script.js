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
    }

    displayBoard()

    return {
        boardContent: boardContent,
        displayBoard: displayBoard,
    };
})();

let displayController = (function() {
    'use strict';

    const boardElements = document.querySelectorAll('.board-element');
    boardElements.forEach((element) => {
        element.addEventListener('click', () => {
            gameBoard.boardContent.splice(1, 1, 'X');
            gameBoard.displayBoard();

        })
    })

    return {

    };
})();

// создаем игроков и присваиваем каждому свой элемент
const playerFactory = (sign) => {
    return {sign}
}

const player1 = playerFactory('X');
const player2 = playerFactory('O');