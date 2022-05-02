import {createAction} from "redux-actions";


const createRequestAction = (type, payloadCreator) => {
  const action = createAction(type, payloadCreator);
  action.success = type + '_SUCCESS';
  action.fail = type + '_FAIL';

  return action;
}

export const game = createRequestAction('GAME', () => ({
  request: {
    method: 'get',
    url: '/game'
  }
}));

export const hit = createRequestAction('HIT', () => ({
  request: {
    method: 'get',
    url: '/hit'
  }
}));

export const stand = createRequestAction('STAND', () => ({
  request: {
    method: 'get',
    url: '/stand'
  }
}));

export const restart = createRequestAction('RESTART', () => ({
  request: {
    method: 'get',
    url: '/restart'
  }
}));