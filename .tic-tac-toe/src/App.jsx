import "./App.css";
import { useState } from "react";

import Logo from "./components/Logo";
import Player from "./components/Player";
import Board from "./components/Board";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const turnHandler = (rowIndex, colIndex) => {
    setIsActive((current) => current === "X" ? (current = "O") : (current = "X"))

    setGameTurns(prevTurns => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = 'O'
      }
      let updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns;
    })
  };

  return (
    <>
      <Logo />

      <div className="game-cont">
        <div className="player-cont">
          <Player
            defaultPlayer={{ name: "Player 1", symbol: "X" }}
            isActive={isActive === "X"}
          />
          <Player
            defaultPlayer={{ name: "Player 2", symbol: "O" }}
            isActive={isActive === "O"}
          />
        </div>

        <Board
          activePlayer={gameTurns.player}
          changeTurn={turnHandler}
          turns={gameTurns}
        />

        <Log turns={gameTurns} />
      </div>
    </>
  );
}

export default App;
