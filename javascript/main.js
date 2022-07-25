const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

ctx.canvas.width = Columns * BlockSize;
ctx.canvas.height = Rows * BlockSize;

ctx.scale(BlockSize, BlockSize);


let board = new Board(Columns, Rows, BlockSize);

function play(){
    board.reset();
    console.table(board.grid);
}