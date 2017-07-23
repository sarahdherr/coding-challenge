'use strict'

const Message = require('./message')
const PType = require('./ptype')
const Participant = require('./participant')
const Person = require('./person')
const Email = require('./email')
const Domain = require('./domain')

// associations
Participant.belongsTo(Message)
Message.hasMany(Participant)
Participant.belongsTo(PType)
PType.hasMany(Participant)
Participant.belongsTo(Email)
Email.hasMany(Participant)
Email.belongsTo(Domain)
Domain.hasMany(Email)
Email.belongsTo(Person)
Person.hasMany(Email)

module.exports = { Message, PType, Participant, Person, Email, Domain }
