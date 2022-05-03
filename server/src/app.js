const Koa = require('koa');
const router = require('./router');
const koaBody = require('koa-body');
const serve = require('koa-static');
const path = require('path');
const cors  = require('@koa/cors');
const niv = require('node-input-validator');

const app = new Koa();

app.use(cors())
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(niv.koa());

app.use(async (ctx) => {
    ctx.body = 'Hello world';
})

app.listen(3000, () => {
    console.log('listening on port 3000..')
});

