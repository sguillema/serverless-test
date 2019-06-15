const serverless = require('serverless-http')
const express = require('express')
const moment = require('moment')

const app = express()

app.use(express.json())

app.get('/hello', async (req, res) => {
  res.send('Hello World!!')
})

app.get('/date', async (req, res) => {
  res.send(moment().format())
})

module.exports.handler = serverless(app)
