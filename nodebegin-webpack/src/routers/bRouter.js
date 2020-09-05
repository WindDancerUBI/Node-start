import Router from 'koa-router'
import Controller from '../api/demo'

const router = new Router()
const controller = new Controller()

router.get('/b', ctx => controller.demo(ctx,'b'))

export default router