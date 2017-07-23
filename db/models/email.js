'use strict'

var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('emails', {
  address_text: Sequelize.STRING
})
