const morgan = require('morgan')
const pify = require('pify')
const logger = pify(morgan('combined'))

module.exports = logger
