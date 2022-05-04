import {createAction} from "redux-actions";

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
        data: {
            token: localStorage.getItem('token'),
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
}));

export const hit = createRequestAction('HIT', () => ({
    request: {
        method: 'post',
        url: '/api/hit',
        data: {
            token: localStorage.getItem('token'),
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
}));

export const stand = createRequestAction('STAND', () => ({
    request: {
        method: 'post',
        url: '/api/stand',
        data: {
            token: localStorage.getItem('token'),
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
}));

export const restart = createRequestAction('RESTART', () => ({
    request: {
        method: 'post',
        url: '/api/restart',
        data: {
            token: localStorage.getItem('token'),
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

    }
}));

export const login = createRequestAction('LOGIN', (newPlayers) => ({
    request: {
        method: 'post',
        url: '/api/login',
        data: {
            players: newPlayers,
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
}));