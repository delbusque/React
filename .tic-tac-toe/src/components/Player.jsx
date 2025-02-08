const Player = () => {
    return (
        <div className='player'>
            <input className="player-input" type="text" value='Player 1' />
            <div className='player-symbol'>X</div>
            <button>Edit</button>
        </div>
    )
}

export default Player;