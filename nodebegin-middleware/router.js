const KOA = require('koa')
const Router = require('koa-router')
const app = new KOA()
const router = new Router()

router.get('/', ctx => {
  ctx.body = 'this is home'
})

router.get('/about', ctx => {
  ctx.body = 'this is about'
})

router.get('/async', async(ctx) => {
  let res = await new Promise(resolve => {
    setTimeout(() => {
      resolve('2s later')
    }, 2000);
  })
  ctx.body = res
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
