'use strict'

const Message = require('./message')
const PType = require('./ptype')
const Participant = require('./participant')
const Person = require('./person')
const Email = require('./email')
const Domain = require('./domain')

// associations
Participant.belongsTo(Message)
Participant.belongsTo(PType)
Participant.belongsTo(Email)
Email.belongsTo(Domain)
Email.belongsTo(Person)
Message.hasMany(Participant)
PType.hasMany(Participant)
Email.hasMany(Participant)
Domain.hasMany(Email)
Person.hasMany(Email)

module.exports = { Message, PType, Participant, Person, Email, Domain }
