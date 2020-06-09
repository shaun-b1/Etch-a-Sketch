let gameBoard = document.querySelector('#gameBoard');
let grid;

function hoverBlack(e) {
  if (e.target.className === 'blankSquare') {
    e.target.style.background = 'black';
    e.target.style.opacity = 1;
  }
}

function hoverGreyscale(e) {
  if (e.target.className == 'blankSquare') {
    if (e.target.style.opacity < 1 && e.target.style.backgroundColor != 'black') {
      e.target.style.backgroundColor = 'black';
      e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
    } else if (e.target.style.opacity == 1 & e.target.style.backgroundColor != 'black') {
      e.target.style.backgroundColor = 'black';
      e.target.style.opacity = 0.1;
    } else if (e.target.style.opacity < 1 && e.target.style.backgroundColor == 'black') {
      e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
    } else if (e.target.style.opacity == 1 && e.target.style.backgroundColor == 'black') {
      return;
    }
  }
}

function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function hoverMulticolour(e) {
  if (e.target.className === 'blankSquare') {
    e.target.style.background = generateRandomColor();
    e.target.style.opacity = 1;
  }
}

function makeOriginalGrid() {
  for ( i = 0; i < 256; i++ ) {
    grid = document.createElement('div');

    grid.classList.add('blankSquare');
    gameBoard.appendChild(grid);
    gameBoard.addEventListener('mouseover', hoverBlack);
  }
}

makeOriginalGrid();

function newGrid() {

  function resetGameBoard() {
    return prompt('How big would you like the new board to be?', '')
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
      grid.classList.add('blankSquare');

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

const blackout = document.querySelector('#blackout')
blackout.addEventListener('click', (e) => {
  gameBoard.removeEventListener('mouseover', hoverGreyscale)
  gameBoard.removeEventListener('mouseover', hoverMulticolour)
  gameBoard.addEventListener('mouseover', hoverBlack)
})

const greyscale = document.querySelector('#greyscale')
greyscale.addEventListener('click', (e) => {
  gameBoard.removeEventListener('mouseover', hoverBlack)
  gameBoard.removeEventListener('mouseover', hoverMulticolour)
  gameBoard.addEventListener('mouseover', hoverGreyscale)
})

const multicolour = document.querySelector('#multicolour')
multicolour.addEventListener('click', (e) => {
  gameBoard.removeEventListener('mouseover', hoverGreyscale)
  gameBoard.removeEventListener('mouseover', hoverBlack)
  gameBoard.addEventListener('mouseover', hoverMulticolour)
})
