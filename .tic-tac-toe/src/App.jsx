import "./App.css";
import { useState } from "react";

import Logo from "./components/Logo";
import Player from "./components/Player";
import Board from "./components/Board";

function App() {
  const [isActive, setIsActive] = useState("X");

  const activePlayerHandler = () => {
    setIsActive((current) =>
      current === "X" ? (current = "O") : (current = "X")
    );
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
          changeActivePlayer={activePlayerHandler}
          activePlayer={isActive}
        />
      </div>
    </>
  );
}

export default App;
