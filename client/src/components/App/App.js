import React, {useEffect} from 'react';
import {Navigate, Routes, Route, Link} from 'react-router-dom';
import Game from "../routes/Game/";
import Login from "../routes/Login";
import Container from "../Container";



const App = ({fetched, result, token, login, game}) => {
    useEffect(() => {
        if (token) {
            return <Navigate to="/game"/>
        }
        return <Navigate to="/login"/>

    }, [token])

    return(
        <>
            <header>
                <Link className={!token ? "is-disabled" : null} to="/game">Game</Link>
                <Link to="/login">Login</Link>
            </header>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="game" element={<Game/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
        </>
    );
}
export default App;