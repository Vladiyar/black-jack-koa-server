import './scss/main.scss';
import React from 'react';
import {createRoot} from "react-dom/client";
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./store/store"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./components/routes/Login/Login";
import Game from "./components/routes/Game";
import NotFound from "./components/NotFound";

const app = document.getElementById('root');
const root = createRoot(app);

root.render(
  <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<App />}>
                  <Route path="login" element={<Login />}></Route>
                  <Route path="game" element={<Game />}></Route>
                  <Route path="*" element={<NotFound />}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  </Provider>
)