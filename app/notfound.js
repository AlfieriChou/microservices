const micro = require('micro')
const logger = require('./logger')

const notfound = async (req, res) => {
  await logger(req, res)
  micro.send(res, 404, 'Not found route')
}

module.exports = notfound
