const micro = require('micro')
const pify = require('pify')
const morgan = require('morgan')
const logger = pify(morgan('combined'))

const notfound = async (req, res) => {
  await logger(req, res)
  micro.send(res, 404, 'Not found route')
}

module.exports = notfound
