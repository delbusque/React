import "./App.css";
import { useState } from "react";

import Logo from "./components/Logo";
import Player from "./components/Player";
import Board from "./components/Board";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBOS, PLAYERS, INITIAL_BOARD } from './constants.js'

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_BOARD.map(inner => [...inner])];

  gameTurns.map(turn => {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  })
  return gameBoard
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combo of WINNING_COMBOS) {
    let firstSymbol = gameBoard[combo[0].row][combo[0].col]
    let secondSymbol = gameBoard[combo[1].row][combo[1].col]
    let thirdSymbol = gameBoard[combo[2].row][combo[2].col]

    if (firstSymbol && (firstSymbol === secondSymbol && firstSymbol === thirdSymbol)) {
      winner = players[firstSymbol];
    }
  }
  return winner;
}

function deriveActivePlayer(gameTurns) {
  let activePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = 'O'
  }
  return activePlayer;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  const gameBoard = deriveGameBoard(gameTurns);
  const activePlayer = deriveActivePlayer(gameTurns)
  const winner = deriveWinner(gameBoard, players)

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
            defaultPlayer={{ name: PLAYERS.X, symbol: 'X' }}
            isActive={activePlayer === "X"}
            changeName={playerNameHandler}
          />
          <Player
            defaultPlayer={{ name: PLAYERS.O, symbol: 'O' }}
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
