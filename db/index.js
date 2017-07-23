const Sequelize = require('sequelize')

const db = module.exports = new Sequelize('postgres://localhost:5432/sarah_herr_coding_challenge', { logging: false })

require('./models')
