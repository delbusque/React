// import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Board = ({ activePlayer, changeTurn, turns }) => {

  let gameBoard = initialBoard;
  console.log(turns);

  turns?.map(turn => {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  })

  return (
    <div className="board-cont">
      {gameBoard.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <button
              className="board-btn"
              key={colIndex}
              onClick={() => changeTurn(rowIndex, colIndex)}
            >
              {playerSymbol}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
