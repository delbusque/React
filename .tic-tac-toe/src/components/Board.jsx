const Board = ({ gameBoard, changeTurn }) => {

  return (
    <div className="board-cont">
      {gameBoard.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <button
              className="board-btn"
              key={colIndex}
              onClick={() => changeTurn(rowIndex, colIndex)}
              disabled={playerSymbol !== null}
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
