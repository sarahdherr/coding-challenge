'use strict'
// routes mounted off `/api/emails`
const router = require('express').Router()
const { Email, Person } = require('../../db/models')

// GET all emails and the owners information
router.get('/', function (req, res, next) {
  Email.findAll({
    include: [ { model: Person } ]
  })
    .then(emails => res.send(emails))
    .catch(err => console.log(err))
})

module.exports = router
