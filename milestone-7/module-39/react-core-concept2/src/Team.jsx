import React, { useState } from 'react';

const teamStyle = {
    border: "3px solid purple",
    borderRadius: "13px",
    margin: "7px",
    padding: "12px"

}


const Team = () => {
    const [player, setPlayer] = useState(11);

    const addPlayer = () => {
        setPlayer( player + 1);
    }

    const removePlayer = () => {
        setPlayer( player - 1);
    }

    return (
        <div style={teamStyle}>
            <h3>Teams Player: {player}</h3>
            <button onClick={addPlayer}>Player Add</button>
            <button onClick={removePlayer}>Player Remove</button>
        </div>
    );
};

export default Team;