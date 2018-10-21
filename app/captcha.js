const micro = require('micro')
const svgCaptcha = require('svg-captcha')
const logger = require('./logger')

const captcha = async (req, res) => {
  await logger(req, res)
  const captchaData = await svgCaptcha.createMathExpr()
  micro.send(res, 200, captchaData)
}

module.exports = captcha
