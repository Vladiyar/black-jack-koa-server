import {createAction} from "redux-actions";
import {token} from "./selectors";

const createRequestAction = (type, payloadCreator) => {
  const action = createAction(type, payloadCreator);
  action.success = type + '_SUCCESS';
  action.fail = type + '_FAIL';

  return action;
}

export const game = createRequestAction('GAME', () => ({
  request: {
    method: 'post',
    url: '/api/game',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    })
  }
}));

export const hit = createRequestAction('HIT', () => ({
  request: {
    method: 'post',
    url: '/api/hit',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    })
  }
}));

export const stand = createRequestAction('STAND', () => ({
  request: {
    method: 'post',
    url: '/api/stand',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    })
  }
}));

export const restart = createRequestAction('RESTART', () => ({
  request: {
    method: 'post',
    url: '/api/restart',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    })

  }
}));

export const login = createRequestAction('LOGIN', () => ({
  request: {
    method: 'post',
    url: '/api/login',
    data: {
      players: ['potato', 'potato1', 'potato2'],
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }
}));