const micro = require('micro')
const { router, get } = require('microrouter')

const hello = async (req, res) => {
  micro.send(res, 200, await Promise.resolve(`Hello ${req.params.who}`))
}

module.exports = router(get('/hello/:who', hello))