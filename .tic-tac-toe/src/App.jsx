import { useState } from 'react'
import logo from './assets/toe-logo.png'
import './App.css'

const boardArr = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logo-cont'>
        <img src={logo} className='logo' alt='tic-tac-toe-logo' />
        <h2 className='logo-text'>Tic-Tac-Toe</h2>
      </div>
      <div className='game-cont'>
        <div className='player-cont'>
          <div className='player'>
            <input className="player-input" type="text" value='Player 1' />
            <div>X</div>
            <button>Edit</button>
          </div>
          <div className='player'>
            <input className="player-input" type="text" value='Player 2' />
            <div>O</div>
            <button className='player-btn'>Edit</button>
          </div>
        </div>
        <div className='board-cont'>
          {boardArr.map(row => <div>{row.map(col => <button className='board-btn'>{col}</button>)}</div>)}
        </div>
      </div>

    </>
  )
}

export default App
