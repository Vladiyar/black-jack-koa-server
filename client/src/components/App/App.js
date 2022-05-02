import React, {useEffect} from 'react';
import GameArea from "../GameArea";
import Sidebar from "../Sidebar";
import ModuleWindow from "../ModuleWindow";

const App = ({fetched, result, token, game}) => {
  useEffect(() => {
    setTimeout(() => {game()}, 1000)
  }, [])

  if (!fetched) {
    return (
        <div className="loading"><p>Loading...</p></div>
    )
  }

  // if (!token) {
  //   //redirect to login
  // }

  return (
    <div className="container">
      {result && <ModuleWindow />}
        <GameArea></GameArea>
        <Sidebar></Sidebar>
    </div>
  );
};

export default App;