const db = require('./index.js')
const { Message, PType, Participant, Person, Email, Domain } = require('./models')
const Promise = require('bluebird')
const { mapValues } = require('lodash')
const { messageValues, ptypeValues, participantValues, personValues, emailValues, domainValues } = require('./seed_values')

function seedEverything () {
  const seeded = {
    messages: messages(),
    ptypes: ptypes(),
    people: people(),
    domains: domains()
  }
  seeded.emails = emails()
  seeded.participants = participants()

  return Promise.props(seeded)
}

const messages = seed(Message, messageValues)
const ptypes = seed(PType, ptypeValues)
const people = seed(Person, personValues)
const domains = seed(Domain, domainValues)

const emails = seed(Email, emailValues)
const participants = seed(Participant, participantValues)

class BadRow extends Error {
  constructor (key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString () {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

function seed (Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

db.sync({force: true})
  .then(seedEverything)
  .finally(() => process.exit(0))
