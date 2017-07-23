'use strict'
const { yellow } = require('chalk')
const db = require('./db')

// syncs the database, then starts the server
db.sync()
  .then(() => console.log(yellow('Sequelize models synced to PostgresSQL')))
  .then(() => require('./server'))
  .catch(err => console.log(err))
