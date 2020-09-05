const KOA = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const koaJson = require('koa-json')
const app = new KOA()
const router = new Router()

// 添加路由前缀，只有带前缀的请求才能访问到路径。与该表达式书写的位置无关
router.prefix('/api')

router.get('/', ctx => {
  ctx.body = 'this is home'
})
// 只有使用中间件koa-body才能解析请求的body
router.post('/post', ctx => {
  let { body } = ctx.request
  console.log(body)
  console.log(ctx.request)
  ctx.body = {
    ...body
  }
})

// 处理get请求的param，若param没有age，则返回对象中没有age
router.get('/get', ctx => {
  let param = ctx.request.query
  let res = {
    name: param.name,
    age: param.age
  }
  ctx.body = res
})

// 中间件的加载是有顺序的
app.use(koaBody())
app.use(cors())
// app.use(koaJson({pretty: false, param: 'pretty', spaces: 4}))
app.use(koaJson({pretty: true, spaces: 4}))
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)