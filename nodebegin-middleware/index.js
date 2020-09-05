const KOA = require('koa')
const app = new KOA()

app.use(async ctx => {
  console.log(ctx);
  ctx.body = 'hello world!'
})

app.listen(3000)