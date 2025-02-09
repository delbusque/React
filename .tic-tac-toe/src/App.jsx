import './App.css'
import { useState } from 'react'

import Logo from './components/Logo'
import Player from './components/Player'
import Board from './components/Board'

function App() {

  return (
    <>
      <Logo />
      <div className='game-cont'>
        <div className='player-cont'>
          <Player defaultPlayer={{ name: 'Player 1', symbol: 'X' }} />
          <Player defaultPlayer={{ name: 'Player 2', symbol: 'O' }} />
        </div>
        <Board />
      </div>
    </>
  )
}

export default App
