import React, {useState} from 'react';
import AdditionalPlayer from "./additionalPlayer";

const Login = ({login}) => {
    const  [additionalPlayers, setAdditionalPlayers] = useState([]);
    const addPlayer = () => {
        setAdditionalPlayers(<AdditionalPlayer/>);
    };
    return (
        <div className="login-page">
            <form action=login>
                <label htmlFor="">Players names</label>
                <input type="text"/>
                <input type="text"/>
                {additionalPlayers}
                <button onClick={() => {addPlayer()}}>Add more players</button>
                <button type="submit" onSubmit={} onClick={login}>Start Game</button>
            </form>
            
            
        </div>
    );
};

export default Login;