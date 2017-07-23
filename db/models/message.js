'use strict'

var { STRING, TEXT } = require('sequelize')
var db = require('../index.js')

module.exports = db.define('messages', {
  subject: STRING,
  message_text: TEXT
})
