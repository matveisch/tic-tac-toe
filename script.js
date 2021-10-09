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

    let currentTurn = 0;

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

            // выводим в div содежимое массива
            container.textContent = item;

            boardContainer.appendChild(container);
        })

        // выводим X или O по нажанию на div
        const boardElements = document.querySelectorAll('.board-element');
        boardElements.forEach((element) => {

            // если div пустой
            if (element.innerHTML === '') {
                element.addEventListener('click', () => {

                    // в зависимости от четности хода выводим O или X
                    if (currentTurn % 2 === 0) {
                        boardContent.splice(element.id, 1, player1.sign);
                    } else if (currentTurn % 2 !== 0) {
                        boardContent.splice(element.id, 1, player2.sign);
                    }

                    currentTurn++;

                    // обновляем доску по клику на div
                    displayBoard()
                })
            }
        })

        const h1Container = document.querySelector('#h1-container');
        if (boardContent[0] === 'X' && boardContent[1] === 'X' && boardContent[2] === 'X') {
            const h1 = document.createElement('h1');
            h1.innerHTML = 'Player 1 wins';
            h1Container.appendChild(h1);
            boardElements.forEach((element) => {
                element.removeEventListener('click');
            })
        }
    }

    displayBoard()

    return {
        boardContent: boardContent
    };
})();