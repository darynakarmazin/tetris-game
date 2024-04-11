const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 20;
const TETROMINO_NAMES = ["O"];

const TETROMINOES = {
  O: [
    [1, 1],
    [1, 1],
  ],
};

function convertPositionToIndex(row, column) {
  return row * PLAYFIELD_COLUMNS + column;
}

let playfield;
let tetromino;

function generatePlayField() {
  for (let i = 0; i < PLAYFIELD_ROWS * PLAYFIELD_COLUMNS; i++) {
    const div = document.createElement("div");
    document.querySelector(".grid").append(div);
  }

  playfield = new Array(PLAYFIELD_ROWS)
    .fill()
    .map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
  //   console.table(playField);
}

function generateTetromino() {
  const name = TETROMINO_NAMES[0];
  const matrix = TETROMINOES[name];
  console.log(matrix);
  tetromino = {
    name,
    matrix: TETROMINO_NAMES[0],
    row: 4,
    column: 3,
  };
}

generatePlayField();
generateTetromino();

const cells = document.querySelectorAll(".grid div");
function drawPlayField() {
  //   console.log(cells);
  //   cells[15].classList.add("O");
}

function drawTetromino() {
  const name = tetromino.name;
  const tetrominoMatrixSize = tetromino.matrix.lenght;

  for (let row = 0; row < 1; row++) {
    for (let column = 0; column < 1; column++) {
      const cellIndex = convertPositionToIndex(
        tetromino.row + row,
        tetromino.column + column
      );
      console.log(cellIndex);
      cells[cellIndex].classList.add("O");
    }
  }
}
drawTetromino();
drawPlayField();
