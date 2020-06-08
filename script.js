let gameBoard = document.querySelector('#gameBoard');
let grid;


function makeOriginalGrid() {
  for ( i = 0; i < 256; i++ ) {
    grid = document.createElement('div');

    grid.classList.add('blanksquare');
    gameBoard.appendChild(grid);
    gameBoard.addEventListener('mouseover', hoverBlack);
  }
}

makeOriginalGrid();

function hoverBlack(e) {
  if (e.target.className === 'blanksquare') {
    e.target.classList.remove('blanksquare')
    e.target.classList.add('blacksquare')
  }
}
