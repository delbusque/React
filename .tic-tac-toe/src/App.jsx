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
          <Player />
          <Player />
        </div>
        <Board />
      </div>
    </>
  )
}

export default App
