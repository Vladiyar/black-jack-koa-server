const Router = require('koa-router');
const router = new Router();
const Task = require('../api/task');
const login = require('../api/login')
const {restart, addCard, nextPlayer, state} = require('../api/index');



router.post('/api/game', async (ctx) => {
    ctx.body = state();
})

router.post('/api/hit', async (ctx) => {
    ctx.body = addCard();
})

router.post('/api/stand', async (ctx) => {
    ctx.body = nextPlayer();
})

router.post('/api/restart', async (ctx) => {
    ctx.body = restart();
})

router.post('/api/login', async (ctx) => {
    try {
        const result = await login.login({...ctx.request.body});
        ctx.body = result;
    }
    catch(err) {
        console.error('err', err);
        ctx.status = 500;
        ctx.body = 'Internal error';
        // ctx.body = login();
    }
})



router.post('/api/addTask', async (ctx) => {
    try {
        const result = await Task.addTask(...ctx.request.body);
        ctx.body = result;
    }
    catch(err) {
        console.error('err', err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})

//
// router.use('*' , async (ctx) => {
//     ctx.body = 'hello';
// })
//


module.exports = router;
