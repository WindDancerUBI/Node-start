const KOA = require('koa')
const Router = require('koa-router')
const app = new KOA()
const router = new Router()

const middleware1 = function (ctx, next){
  console.log('this is 1')
  console.log(ctx.request.path);
  next()
}

const middleware2 = function (ctx, next){
  console.log('this is 2')
  console.log(ctx.request.path);
  next()
  console.log('this is 2-2');
}

const middleware3 = function (ctx, next){
  console.log('this is 3')
  console.log(ctx.request.path);
  next()
  console.log('this is 3-2');
}

// 中间件的执行顺序只与use的先后顺序有关,next后面的会遵循先进后出的回调
app.use(middleware2)
app.use(middleware1)
app.use(middleware3)

app.listen(3000)
