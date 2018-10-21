const micro = require('micro')
const pify = require('pify')
const morgan = require('morgan')
const logger = pify(morgan('combined'))

const hello = async (req, res) => {
  await logger(req, res)
  micro.send(res, 200, await Promise.resolve(`Hello ${req.params.who}`))
}

module.exports = hello
  