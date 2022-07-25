class board
{
    constructor(rows, columns, block_size)
    {
        this.rows = rows;
        this.columns = columns;
        this.block_size = block_size;
        this.grid = new Array(this.columns).fill(new Array(this.rows).fill(0));
    }
}