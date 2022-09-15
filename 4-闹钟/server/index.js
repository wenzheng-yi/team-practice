const Koa = require('koa')
const Router = require('koa-router')
const KoaBody = require('koa-body')
const CORS = require('koa-cors')
const clock = require('./clock')

const app = new Koa()
const router = new Router()

app.use(CORS())
app.use(KoaBody())

router.get('/clock', clock)

app.use(router.routes())
app.listen(777)
