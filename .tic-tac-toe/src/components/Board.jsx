const boardArr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const Board = () => {
    return (
        <div className='board-cont'>
            {boardArr.map(row => <div>{row.map(col => <button className='board-btn'>{col}</button>)}</div>)}
        </div>
    )
}

export default Board