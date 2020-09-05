import combine from 'koa-combine-routers'
import aRouter from './aRouter'
import bRouter from './bRouter'

export default combine(aRouter,bRouter)