const Router = require('koa-router');
const router = new Router();
const login = require('../api/login')
const {restart, addCard, nextPlayer, state} = require('../logic');
const Game = require("../logic/Game");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const {Validator} = require("node-input-validator");


let token = jwt.sign({ foo: uuidv4() },'potato');

const games = {}

const newLogin = (token, data) => {
    games[token] = new Game(data.players);
}


const newGame = (token) => {
    games[token] = new Game(['one', 'two']);
}


router.post('/api/game', async (ctx) => {
    const token = ctx.request.body['token']
    ctx.body = state(games[token]);
})

router.post('/api/hit', async (ctx) => {
    const token = ctx.request.body['token']
    ctx.body = addCard(games[token]);
})

router.post('/api/stand', async (ctx) => {
    const token = ctx.request.body['token']
    ctx.body = nextPlayer(games[token]);
})

router.post('/api/restart', async (ctx) => {
    const token = ctx.request.body['token']
    newGame(token);
    ctx.body =restart(games[token])
})

router.post('/api/login', async (ctx) => {
    const players = ctx.request.body;
    let v = new Validator(
        players,
        {
            'players': 'required|array',
            'players.*': 'required|string'
        },
    );

    let matched = await v.check();

    if (matched) {
        newLogin(token, players);

        try {
        const result = await login.login(token);
        ctx.body = result;
    }
    catch(err) {
        console.error('err', err);
        ctx.status = 500;
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

//
// router.use('*' , async (ctx) => {
//     ctx.body = 'hello';
// })
//


module.exports = router;
