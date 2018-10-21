const micro = require('micro')
const logger = require('./logger')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secureConnection: true,
  port: 587,
  auth: {
    user: 'xxx@gmail.com',
    pass: '***'
  }
})

const mailOptions = (email, emailCode) => {
  return {
    from: '"AlfieriChou"',
    to: email,
    subject: 'Hello ' + email,
    text: 'I just want to send captcha email, captcha is ' + emailCode
  }
}

const randomCode = () => {
  let arr = []
  for (let i = 0; i < 6; ++i) {
    let number = Math.floor(Math.random() * 9)
    arr.push(number)
  }
  return arr.join('')
}

const email = async (req, res) => {
  await logger(req, res)
  const params = await micro.json(req)
  params.randomCode = await randomCode()
  const mail = await mailOptions(params.email, params.randomCode)
  const result = await transporter.sendMail(mail)
  micro.send(res, 200, result)
}

module.exports = email