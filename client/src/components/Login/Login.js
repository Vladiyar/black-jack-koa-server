import React from 'react';
import AdditionalPlayer from "./additionalPlayer";

const Login = () => {
    const additionalPlayers = [];
    const addPlayer = () => {
        additionalPlayers.push(<AdditionalPlayer/>);
    };
    const startGame = () => {};
    return (
        <div>
            <form action="">
                <label htmlFor="">Players names</label>
                <input type="text"/>
                <input type="text"/>
                {additionalPlayers}
                <button onClick={addPlayer}>Add more players</button>
                <button onClick={startGame}>Start Game</button>
            </form>
            
            
        </div>
    );
};

export default Login;