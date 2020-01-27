import Koa from 'koa'

import external from 'common/external'

const app = new Koa()

app.use(ctx => (ctx.body = `It works! Value of 'x' is ${external.x}`))

app.listen(3001, () => console.log('[INFO] Listening on 3001...'))
