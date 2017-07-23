'use strict'

var { STRING } = require('sequelize')
var db = require('../index.js')

module.exports = db.define('people', {
  name: STRING
})
