import {handleActions} from "redux-actions"
import {game, hit, stand, restart, login} from "./actions";


export const defaultState = {
  token: localStorage.getItem('token'),
  players: null,
  fetched: false,
  result: null,
  currentPlayer: null,
  loading: false,
}


export const reducers = handleActions({
    [game]: (state) => {
        return {
            ...state,
            loading: true
        }
    },
    [game.success]:(state, {payload}) => {
        const {players} = payload.data[0];
        const {currentPlayer} = payload.data[1];
        return {
            ...state,
            players,
            currentPlayer,
            loading: false,
            fetched: true
        }
    },
    [hit]: (state) => {
        return {
            ...state,
            loading: true
        }
    },
    [hit.success]: (state, {payload}) => {
        const {players} = payload.data[0];
        const {currentPlayer} = payload.data[1];
        const {result} = payload.data[2];
        return {
            ...state,
            loading: false,
            players,
            currentPlayer,
            result
        }
    },
    [stand]: (state) => {
        return {
            ...state,
            loading: true
        }
    },
    [stand.success]: (state, {payload}) => {
        const {players} = payload.data[0];
        const {currentPlayer} = payload.data[1];
        const {result} = payload.data[2];
        return {
            ...state,
            loading: false,
            players,
            currentPlayer,
            result
        }
    },
    [restart]: (state) => {
        return {
            ...state,
            loading: true
        }
    },
    [restart.success]: (state, {payload}) => {
        const {players} = payload.data[0];
        const {currentPlayer} = payload.data[1];
        const {result} = payload.data[2];
        return {
            ...state,
            loading: false,
            players,
            currentPlayer,
            result
        }
    },
        [login]: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        [login.success]: (state, {payload}) => {
            console.log(payload)
            localStorage.setItem('token', payload.data.success)
            // const {players} = payload.data[0];
            // const {currentPlayer} = payload.data[1];
            // const {result} = payload.data[2];
            // return {
            //     ...state,
            //     loading: false,
            //     players,
            //     currentPlayer,
            //     result
            // }
        }
  }
, defaultState)