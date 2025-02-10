import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Board = ({ changeActivePlayer, activePlayer }) => {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  const turnHandler = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((boardRow) => [...boardRow])];
      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });

    changeActivePlayer();
  };

  return (
    <div className="board-cont">
      {gameBoard.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <button
              className="board-btn"
              key={colIndex}
              onClick={() => turnHandler(rowIndex, colIndex)}
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
