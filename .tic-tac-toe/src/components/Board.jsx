import { useState } from "react";

const boardArr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const Board = () => {

    const [turn, setTurn] = useState('X')

    let board = boardArr;

    const gameBoard = board.map((row, rowIndex) =>
        <div className="board-row" key={rowIndex}>
            {row.map((col, colIndex) =>
                <button className='board-btn' key={colIndex}
                    onClick={() => turnHandler(rowIndex, colIndex)}>
                    {board[rowIndex][colIndex]}
                </button>)}
        </div>)

    const turnHandler = (row, col) => {
        turn === 'X' ? board[row][col] = 'X' : board[row][col] = 'O'
        setTurn(oldTurn => oldTurn === 'X' ? oldTurn = 'O' : oldTurn = 'X')
    }
    console.log(board);

    return (
        <div className='board-cont'>
            {gameBoard}
        </div>
    )
}

export default Board