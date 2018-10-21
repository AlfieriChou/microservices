const micro = require('micro')
const logger = require('./logger')

const hello = async (req, res) => {
  await logger(req, res)
  micro.send(res, 200, await Promise.resolve(`Hello ${req.params.who}`))
}

module.exports = hello
  