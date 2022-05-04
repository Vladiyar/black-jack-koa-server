import React, {useEffect} from 'react';
import GameArea from "../../GameArea";
import Sidebar from "../../Sidebar";
import ModuleWindow from "../../ModuleWindow";

const Game = ({result, fetched, token, game}) => {
    useEffect(() => {
        if (token) {
            game()
        }
    },[token])

    if (!fetched) {
    return (
        <div className="loading"><p>Loading...</p></div>
        )
    }

    return (
        <div className="container">
            <GameArea></GameArea>
            <Sidebar></Sidebar>
            {result && <ModuleWindow />}
        </div>
    );
};

export default Game;