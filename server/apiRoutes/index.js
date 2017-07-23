'use strict'

const router = require('express').Router()

router.use('/domains', require('./domains'))
      .use('/emails', require('./emails'))
      // error handling
      .use(function (req, res, next) {
        const err = new Error('Not found.')
        err.status = 404
        next(err)
      })

module.exports = router
