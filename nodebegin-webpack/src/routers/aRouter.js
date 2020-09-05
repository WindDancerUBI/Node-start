import Router from 'koa-router'
import Controller from '../api/demo'

const router = new Router()
const controller = new Controller()

router.get('/a', ctx => controller.demo(ctx,'a'))

export default router
