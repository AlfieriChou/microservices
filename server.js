const { router, get, post } = require('microrouter')
const app = require('./app')

module.exports = router(
  get('/hello', app.hello),
  post('/email', app.email),
  get('/captcha', app.captcha),
  get('/hello/:who', app.publish),
  get('/*', app.notfound)
)
