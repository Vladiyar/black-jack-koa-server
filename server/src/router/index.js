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

const token = jwt.sign({ foo: uuidv4() }, jwtKey);
// const token = uuidv4()
const games = {}
//
// const authMiddleware = (ctx, next) => {
//     const token = ctx.request.body['token'];
//
//     try {
//         const session = jwt.verify(token, jwtKey);
//         const sessions = Object.keys(games)
//         console.log(session)
//         if (!sessions.includes(session.foo)) {
//             ctx.status = 501;
//             return;
//         }
//         ctx.state.session = session;
//         return next();
//     }
//     catch (e) {
//         ctx.status = 501;
//     }
// }

checkingGame = (ctx, next) => {
    const token = ctx.request.body['token'];

    if (!games[token]) {
        ctx.status = 501;
        return;
    }

    return next();
}


router.post('/api/game', checkingGame, (ctx) => {
    const token = ctx.request.body['token'];
    ctx.body = state(games[token]);
})

router.post('/api/hit', async (ctx) => {
    const token = ctx.request.body['token'];
    ctx.body = addCard(games[token]);
})

router.post('/api/stand', async (ctx) => {
    const token = ctx.request.body['token'];
    ctx.body = nextPlayer(games[token]);
})

router.post('/api/restart', async (ctx) => {
    const token = ctx.request.body['token'];
    const players = games[token].players.map((player) => player.playerRealName);
    games[token] = new Game(players);
    ctx.body = restart(games[token], players);
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
        games[token] = new Game(data.players);

        try {
        const result = await login.login(token);
        ctx.body = result;
    }
    catch(err) {
        console.error('err', err);
        ctx.status = 501;
        ctx.body = 'Internal error';
    }}
})



// router.post('/api/addTask', async (ctx) => {
//     try {
//         const result = await Task.addTask(...ctx.request.body);
//         ctx.body = result;
//     }
//     catch(err) {
//         console.error('err', err);
//         ctx.status = 500;
//         ctx.body = 'Internal error';
//     }
// })

router.get('/(.*)', (ctx) => {
    ctx.type = 'html';
    ctx.body = createReadStream(__dirname + '/../static/index.html');
})



module.exports = router;
