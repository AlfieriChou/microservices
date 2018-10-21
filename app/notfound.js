const micro = require('micro')

const notfound = (req, res) => {
  micro.send(res, 404, 'Not found route')
}

module.exports = notfound
