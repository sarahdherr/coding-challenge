'use strict'
// routes mounted off `/api/domains`
const router = require('express').Router()
const { Domain, Email, Participant } = require('../../db/models')
const getDomainCount = require('./route_functions')

// GET all domains
router.get('/', function (req, res, next) {
  Domain.findAll()
    .then(domains => res.send(domains))
    .catch(err => console.log(err))
})

// GET all domains and total sent to message count
router.get('/messages', function (req, res, next) {
  Email.findAll({
    include: [
      { model: Domain },
      { model: Participant }
    ]
  })
    .then(emails => getDomainCount(emails))
    .then(domains => res.json(domains))
    .catch(err => console.log(err))
})

module.exports = router
