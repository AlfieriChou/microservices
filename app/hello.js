const micro = require('micro')
const logger = require('./logger')

const hello = async (req, res) => {
  await logger(req, res)
  micro.send(res, 200, 'hello world!!!')
}

module.exports = hello
  