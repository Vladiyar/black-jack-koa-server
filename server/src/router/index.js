const Router = require('koa-router');
const router = new Router();
const login = require('../api/login')
const {restart, addCard, nextPlayer, state} = require('../logic');
const Game = require("../logic/Game");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const {Validator} = require("node-input-validator");
const {createReadStream} = require('fs')


const jwtKey = 'potato';

const sessionId = uuidv4();
const token = jwt.sign({ sessionId }, jwtKey);

const games = {}

const authMiddleware = (ctx, next) => {
    const token = ctx.header['authorization'];

    try {
        const session = jwt.verify(token, jwtKey);
        const sessions = Object.keys(games)
        if (!sessions.includes(session.sessionId)) {
            ctx.status = 501;
            return;
        }
        ctx.state.session = session;
        return next();
    }
    catch (e) {
        ctx.status = 501;
    }
}

checkingGame = async (ctx, next) => {
    const session = ctx.state.session.sessionId;
    if (!games[session]) {
        ctx.status = 501;
        return;
    }

    return next();
}


router.post('/api/game', authMiddleware, checkingGame, (ctx) => {
    const session = ctx.state.session.sessionId;
    ctx.body = state(games[session]);
})

router.post('/api/hit', authMiddleware, checkingGame, (ctx) => {
    const session = ctx.state.session.sessionId;
    ctx.body = addCard(games[session]);
})

router.post('/api/stand', authMiddleware, checkingGame, (ctx) => {
    const session = ctx.state.session.sessionId;
    ctx.body = nextPlayer(games[session]);
})

router.post('/api/restart', authMiddleware, checkingGame, (ctx) => {
    const session = ctx.state.session.sessionId;
    const players = games[session].players.map((player) => player.playerRealName);
    games[session] = new Game(players);
    ctx.body = restart(games[session], players);
})

router.post('/api/login', async (ctx) => {
    const data = ctx.request.body;
    let v = new Validator(
        data,
        {
            'players': 'required|array',
            'players.*': 'required|string'
        },
    );

    let matched = await v.check();

    if (matched) {

        games[sessionId] = new Game(data.players);

        try {
        ctx.body = await login.loginApi(token);
    }
    catch(err) {
        ctx.status = 501;
        ctx.body = 'Internal error';
    }}
})

router.get('/(.*)', (ctx) => {
    ctx.type = 'html';
    ctx.body = createReadStream(__dirname + '/../static/index.html');
})



module.exports = router;
