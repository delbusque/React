import "./App.css";
import { useState } from "react";

import Logo from "./components/Logo";
import Player from "./components/Player";
import Board from "./components/Board";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const WINNING_COMBOS = [
  [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
  [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
  [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
  [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }],
  [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
  [{ row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 }],
  [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
  [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }],
]

function App() {

  let gameBoard = [...initialBoard.map(inner => [...inner])];

  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  })

  const [gameTurns, setGameTurns] = useState([])

  gameTurns.map(turn => {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  })

  let activePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = 'O'
  }

  let winner;

  for (const combo of WINNING_COMBOS) {
    let firstSymbol = gameBoard[combo[0].row][combo[0].col]
    let secondSymbol = gameBoard[combo[1].row][combo[1].col]
    let thirdSymbol = gameBoard[combo[2].row][combo[2].col]

    if (firstSymbol && (firstSymbol === secondSymbol && firstSymbol === thirdSymbol)) {
      winner = players[firstSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const turnHandler = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = 'O'
      }

      let updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns;
    })
  };

  const restartHandler = () => {
    setGameTurns([])
  }

  const playerNameHandler = (symbol, name) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: name
      }
    })
  }

  return (
    <>
      <Logo />

      <div className="game-cont">
        <div className="player-cont">
          <Player
            defaultPlayer={{ name: "Player 1", symbol: "X" }}
            isActive={activePlayer === "X"}
            changeName={playerNameHandler}
          />
          <Player
            defaultPlayer={{ name: "Player 2", symbol: "O" }}
            isActive={activePlayer === "O"}
            changeName={playerNameHandler}
          />
        </div>
        {(winner || hasDraw) && <GameOver winner={winner}
          restartGame={restartHandler} />}
        <Board
          activePlayer={gameTurns.player}
          changeTurn={turnHandler}
          gameBoard={gameBoard}
        />

        {(!winner && !hasDraw) && <Log turns={gameTurns} />}
      </div>
    </>
  );
}

export default App;
