import React, {useEffect, useState} from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';


const Login = ({login, token}) => {
    const  [playersList, setPlayersList] = useState(['','']);

    const addPlayer = () => {
        setPlayersList([...playersList, '']);
    };

    const removePlayer = (indexOfArray) => {
        const list = [...playersList]
        list.splice(indexOfArray, 1);
        setPlayersList(list);
    }

    const changePlayer = (e, indexOfArray) => {
        const list = [...playersList];
        list[indexOfArray] = e.target.value;
        setPlayersList(list);
    }

    const playersSubmit = () => {
        login(playersList);
    }

    // useEffect(() => {
    //     if(token) {
    //         return <Navigate to="/game"/>
    //     }
    // }, [token])

    return (
        <div className="container">
            <div className="login-page">
                <form onSubmit={playersSubmit}>
                    <label htmlFor="">Players names</label>
                    {playersList.map((player, indexOfArray) => (
                        <div key={indexOfArray}>
                            <div className="input-field">
                                <input value={player.service} onChange={(e) => changePlayer(e, indexOfArray)} type="text"/>
                                <button type="button" className={playersList.length < 3 ? "remove-btn is-disabled" : "remove-btn"} onClick={() => {removePlayer(indexOfArray)}}>❌</button>
                            </div>
                        </div>
                    ))}
                    <button type="button" className={playersList.length > 4 ? "remove-btn is-disabled" : "add-btn"} onClick={addPlayer}>Add player</button>
                    <button type="button" onClick={() => {playersSubmit(playersList)}}>Start Game</button>
                </form>
            </div>
        </div>
    );
};

export default Login;