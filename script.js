let gameBoard = document.querySelector('#gameBoard');
let grid;


function makeOriginalGrid() {
  for ( i = 0; i < 256; i++ ) {
    grid = document.createElement('div');

    grid.classList.add('whitesquare');
    gameBoard.appendChild(grid);
    gameBoard.addEventListener('mouseover', hoverBlack);
  }
}

makeOriginalGrid();

function hoverBlack(e) {
  if (e.target.className === 'whitesquare') {
    e.target.classList.remove('whitesquare')
    e.target.classList.add('blacksquare')
  }
}

function newGrid() {

  function resetGameBoard() {
    return prompt('How big would you like the new board to be?')
  }

  let newGameBoard = resetGameBoard();

  if (isNaN(newGameBoard)) {
    alert('You didn\'t enter a number!')
  } else if (newGameBoard == null || newGameBoard == '' || newGameBoard.trim() == '') {
    alert('You didn\'t enter a number!')
  } else {
    while (gameBoard.hasChildNodes()) {
      gameBoard.removeChild(gameBoard.firstChild);
      gameBoard.removeAttribute('id');
      gameBoard.setAttribute('id', 'gameBoard2');
    }

    for ( i = 0; i < newGameBoard * newGameBoard; i++ ) {
      const grid = document.createElement('div');
      grid.classList.add('whitesquare');

      let gameBoard2 = document.getElementById('gameBoard2')
      gameBoard2.style.gridTemplateColumns = `repeat(${newGameBoard}, 1fr)`;
      gameBoard2.style.gridTemplateRows = `repeat(${newGameBoard}, 1fr)`;
      gameBoard2.appendChild(grid);

      gameBoard2.addEventListener('mouseover', hoverBlack);
    }
  }
}

const reset = document.querySelector('#reset')
reset.addEventListener('click', (e) => {
  newGrid()
})
