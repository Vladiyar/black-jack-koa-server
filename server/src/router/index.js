const Router = require('koa-router');
const router = new Router();

// const Task = require('../api/task.js');
const {restart, addCard, nextPlayer, state} = require('../logic');



router.get('/game', async (ctx) => {
    ctx.body = state();
})

router.get('/hit', async (ctx) => {
    ctx.body = addCard();
})

router.get('/stand', async (ctx) => {
    ctx.body = nextPlayer();
})

router.get('/restart', async (ctx) => {
    ctx.body = restart();
})

router.post('/login', async (ctx) => {
    const players = ctx.request.body.players;
})


// router.get('/addTask', async (ctx) => {
//     try {
//         const result = await Task.addTask();
//         ctx.body = result;
//     }
//     catch(err) {
//         console.error('err', err);
//         ctx.status = 500;
//         ctx.body = 'Internal error';
//     }
// })



module.exports = router;
