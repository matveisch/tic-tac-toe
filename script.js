// создаем игроков и присваиваем каждому свой элемент
const playerFactory = (sign) => {
    return {sign}
}

const player1 = playerFactory('X');
const player2 = playerFactory('O');

let gameBoard = (function() {
    'use strict';
    const boardContainer = document.querySelector('.board-container');
    const h1 = document.querySelector('h1');

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

                    // если не выведена надпись о выигрыше, то можно заполнять массив
                    if (h1.innerHTML === '') {
                        // в зависимости от четности хода выводим O или X
                        if (currentTurn % 2 === 0) {
                            boardContent.splice(element.id, 1, player1.sign);
                        } else if (currentTurn % 2 !== 0) {
                            boardContent.splice(element.id, 1, player2.sign);
                        }

                        currentTurn++;

                        // обновляем доску по клику на div
                        displayBoard()

                    }
                })
            }
        })

        // условия победы X
        if (boardContent[0] === 'X' && boardContent[1] === 'X' && boardContent[2] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[3] === 'X' && boardContent[4] === 'X' && boardContent[5] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[6] === 'X' && boardContent[7] === 'X' && boardContent[8] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[2] === 'X' && boardContent[4] === 'X' && boardContent[6] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[0] === 'X' && boardContent[3] === 'X' && boardContent[6] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[1] === 'X' && boardContent[4] === 'X' && boardContent[7] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[2] === 'X' && boardContent[5] === 'X' && boardContent[8] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[0] === 'X' && boardContent[4] === 'X' && boardContent[8] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        }

        // условия победы O
        if (boardContent[0] === 'O' && boardContent[1] === 'O' && boardContent[2] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[3] === 'O' && boardContent[4] === 'O' && boardContent[5] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[6] === 'O' && boardContent[7] === 'O' && boardContent[8] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[2] === 'O' && boardContent[4] === 'O' && boardContent[6] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[0] === 'O' && boardContent[3] === 'O' && boardContent[6] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[1] === 'O' && boardContent[4] === 'O' && boardContent[7] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[2] === 'O' && boardContent[5] === 'O' && boardContent[8] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[0] === 'O' && boardContent[4] === 'O' && boardContent[8] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent.every(element => element !== '') && h1.innerHTML === '') {
            h1.innerHTML = 'Draw';
        }

        if (h1.innerHTML !== '') {
            let h1Div = document.getElementById('h1-div');
            let button = document.createElement('button');
            button.textContent = 'reset';
            button.addEventListener('click', () => {
                boardContent = ['','','','','','','','',''];
                h1.innerHTML = '';
                currentTurn = 0;
                displayBoard();
                h1Div.removeChild(button)
            })
            h1Div.appendChild(button);
        }
    }

    displayBoard()

    return {

    };
})();