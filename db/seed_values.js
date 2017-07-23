const messageValues = {
  message1: {subject: 'Once in a lifetime', message_text: 'Test example on how to do this'},
  message2: {subject: 'Demo followup', message_text: 'I hate making seed data'}
}

const ptypeValues = {
  from: {type: 'From'},
  to: {type: 'To'},
  cc: {type: 'CC'},
  bcc: {type: 'BCC'}
}

const participantValues = {
  part1: {ptypeId: 1, emailId: 1, messageId: 1},
  part2: {ptypeId: 2, emailId: 2, messageId: 1},
  part3: {ptypeId: 2, emailId: 3, messageId: 1},
  part4: {ptypeId: 1, emailId: 2, messageId: 2},
  part5: {ptypeId: 2, emailId: 3, messageId: 2},
  part6: {ptypeId: 3, emailId: 4, messageId: 2}
}

const personValues = {
  john: {name: 'John Doe'},
  janet: {name: 'Janet Smith'},
  rob: {name: 'Robert Strong'},
  susan: {name: 'Susan Jones'}
}

const emailValues = {
  email1: {address_text: 'johndoe@gmail.com', domainId: 1, personId: 1},
  email2: {address_text: 'john@VailCorp.com', domainId: 2, personId: 1},
  email3: {address_text: 'jsmith@FWork.com', domainId: 3, personId: 2},
  email4: {address_text: 'rstrong@FWork.com', domainId: 3, personId: 3},
  email5: {address_text: 'daisies@gmail.com', domainId: 1, personId: 3},
  email6: {address_text: 'susan@VailCorp.com', domainId: 2, personId: 4}
}

const domainValues = {
  gmail: {url_text: 'gmail.com'},
  vail: {url_text: 'VailCorp.com'},
  fwork: {url_text: 'FWork.com'},
  me: {url_text: 'SarahHerr.com'}
}

module.exports = { messageValues, ptypeValues, participantValues, personValues, emailValues, domainValues }
