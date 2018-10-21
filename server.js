const { router, get } = require('microrouter')
const hello = require('./app/hello')
const notfound = require('./app/notfound')

module.exports = router(get('/hello/:who', hello), get('/*', notfound))
