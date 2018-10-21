const { router, get } = require('microrouter')
const app = require('./app')

module.exports = router(get('/hello/:who', app.hello), get('/*', app.notfound))
