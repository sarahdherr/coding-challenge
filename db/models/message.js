'use strict'

var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('messages', {
  subject: Sequelize.STRING,
  message_text: Sequelize.TEXT
})
