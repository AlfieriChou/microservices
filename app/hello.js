const micro = require('micro')

const hello = async (req, res) => {
  micro.send(res, 200, await Promise.resolve(`Hello ${req.params.who}`))
}

module.exports = hello
  