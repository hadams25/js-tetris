class board
{
    constructor(rows, columns, block_size)
    {
        this.rows = rows;
        this.columns = columns;
        this.block_size = block_size;

        //creates an array that can be accessed using [column][row] / [x][y]
        this.grid = new Array(this.columns).fill(new Array(this.rows).fill(0));
    }

    reset()
    {
        this.grid = new Array(this.columns).fill(new Array(this.rows).fill(0));
    }

    clear_row(row)
    {
        for(let i = 0; i < this.columns; i++)
        {
            this.grid[i][row] = 0;
        }
    }

    shift_down(row)
    {
        for(let i = 0; i < this.columns; i++)
        {
           for(let j = row; j > 1; j--)
            {
                this.grid[i][j] = this.grid[i][j-1];
            }
        }
        this.clear_row(0);
    }
}