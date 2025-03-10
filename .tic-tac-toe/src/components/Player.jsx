import { useState } from "react";

const Player = ({ defaultPlayer, isActive, changeName }) => {
  const [player, setPlayer] = useState(defaultPlayer.name);
  const [isEditing, setIsEditing] = useState(false);

  const playerInputHandler = (e) => {
    setPlayer(e.target.value);
  };

  const editNameHandler = () => {
    setIsEditing((editing) => !editing);
    changeName(defaultPlayer.symbol, player)
  };

  return (
    <div className={isActive ? "player-active" : "player"}>
      <input
        className={isEditing ? "player-input-edit" : "player-input"}
        type="text"
        value={player}
        onChange={playerInputHandler}
      />
      <div className="player-symbol">{defaultPlayer.symbol}</div>
      <button onClick={editNameHandler}>{!isEditing ? "Edit" : "Save"}</button>
    </div>
  );
};

export default Player;
