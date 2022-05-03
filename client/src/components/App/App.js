import React, {useEffect} from 'react';
import ModuleWindow from "../ModuleWindow";
import { Outlet, Link } from 'react-router-dom';
import Login from "../routes/Login/Login";
import Game from "../routes/Game";

const App = ({fetched, result, token, login, game}) => {
  useEffect(() => {
    setTimeout(() => {game()}, 1000)
  }, [])

  if (!fetched) {
    return (
        <div className="loading"><p>Loading...</p></div>
    )
  }

  if (!token) {
    //redirect to login
    // return <Link to="/login">Login</Link>
    return <Login></Login>
  }

  return (
    <div className="container">
      <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
      >
        <Link to="/login">Login</Link>{' '}
        <Link className={!token ? 'is-disabled' : null} to="/game">Game</Link>
      </nav>
      <Outlet />
        {/*<button onClick={login}>123</button>*/}
      {result && <ModuleWindow />}

    </div>
  );
};

export default App;