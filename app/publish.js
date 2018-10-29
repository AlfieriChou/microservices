const logger = require('./logger')
const micro = require('micro')
const config = require('../config/config')
const jackrabbit = require('jackrabbit')
const rabbit = jackrabbit(config.url)
const exchange = rabbit.default()
exchange.queue({ name: 'task_queue', durable: true })

const publish = async (req, res) => {
  await logger(req, res)
  const name = `${req.params.who}`
  await exchange.publish({ name: name }, { key: 'task_queue' })
  micro.send(res, 200, name)
}

module.exports = publish
