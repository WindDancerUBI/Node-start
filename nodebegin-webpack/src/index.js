import koa from "koa"
import helmet from "koa-helmet"
import path from "path"
import statics from "koa-static"
import router from './routers/routers'
import koaBody from 'koa-body'
import koaJson from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'

const app = new koa()

const middleware = compose(
  [
    koaBody(),
    koaJson({pretty: false, param: 'pretty'}),
    cors(),
    helmet(),
    statics(path.join(__dirname, '../public')),
  ]
)

app.use(middleware)
app.use(router())

app.listen(3000)
