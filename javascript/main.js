const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

ctx.canvas.width = Columns * BlockSize;
ctx.canvas.height = Rows * BlickSize;

ctx.scale(BlickSize, BlockSize);