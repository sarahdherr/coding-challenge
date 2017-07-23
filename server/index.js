'use strict'

const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { cyan } = require('chalk')
const express = require('express')
const app = express()

app.use(morgan('dev'))
   .use(express.static(path.join(__dirname, '../public')))

   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true }))

   .use('/api', require('./apiRoutes'))

   .get('*', function (req, res) {
     res.sendFile(path.join(__dirname, '../public/index.html'))
   })

   .use(function (err, req, res, next) {
     console.error(err)
     console.error(err.stack)
     res.status(err.status || 500).send(err.message || 'Internal server error.')
   })

   .listen('8080', function () {
     console.log(cyan('Server listening at port 8080'))
   })
