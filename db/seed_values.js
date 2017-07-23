const messageValues = {
  message1: {subject: 'Giraffe Speed', message_text: 'Over short distances, giraffes can run up to 35 mph.'},
  message2: {subject: 'Giraffe Thirsty', message_text: 'Giraffes only need to drink water once every couple of days. They get most of their water from their plant-based diet -- which is good considering their height makes the process of drinking difficult.'},
  message3: {subject: 'Baby Giraffe', message_text: 'Baby giraffes can stand up and even run within an hour of being born.'},
  message4: {subject: 'Giraffe Tongue', message_text: 'Giraffe tongues can be up to 20 inches long and are darkly colored, which is thought to help protect them during frequent sun-exposure.'},
  message5: {subject: 'Giraffe Sleep', message_text: 'Giraffes usualy stay upright while sleeping and if they do settle into a vulnerable position on the ground, its just for a quick six-minute nap.'},
  message6: {subject: 'Food Time', message_text: 'Giraffes require over 75 pounds of food a day -- and with a diet of leaves, this means they spend most of their time eating.'},
  message7: {subject: 'Giraffe Myth', message_text: 'The giraffes scientific name, Giraffa camelopardalis, comes from the ancient Greeks belief that it looked like a camel wearing a leopards coat.'},
  message8: {subject: 'Giraffe Vertebrae', message_text: 'Despite their characteristic long necks, giraffes actually have the same number of neck vertebrae as humans -- just seven. Each individual vertebrae is super-sized, measuring up to ten inches long.'},
  message9: {subject: 'Giraffe Heart', message_text: 'Because of their unusual shape, giraffes have a highly-specialized cardiovascular system that starts with an enormous heart. It is two feet long and weighs up to 25 pounds.'}
}

const ptypeValues = {
  from: {type: 'From'},
  to: {type: 'To'},
  cc: {type: 'CC'},
  bcc: {type: 'BCC'}
}

const participantValues = {
  part1: {ptypeId: 1, emailId: 1, messageId: 8},
  part2: {ptypeId: 2, emailId: 2, messageId: 4},
  part3: {ptypeId: 2, emailId: 3, messageId: 1},
  part4: {ptypeId: 4, emailId: 7, messageId: 3},
  part5: {ptypeId: 2, emailId: 5, messageId: 2},
  part6: {ptypeId: 3, emailId: 6, messageId: 2},
  part7: {ptypeId: 1, emailId: 7, messageId: 6},
  part8: {ptypeId: 4, emailId: 1, messageId: 7},
  part9: {ptypeId: 2, emailId: 5, messageId: 9},
  part10: {ptypeId: 1, emailId: 3, messageId: 3},
  part11: {ptypeId: 2, emailId: 4, messageId: 2},
  part12: {ptypeId: 3, emailId: 3, messageId: 5}
}

const personValues = {
  steve: {name: 'Steve Irwin'},
  dian: {name: 'Dian Fossey'},
  jane: {name: 'Jane Goodall'},
  jack: {name: 'Jack Hanna'},
  gregor: {name: 'Gregor Mendel'},
  rachel: {name: 'Rachel Carson'},
  james: {name: 'James Watson'}
}

const emailValues = {
  email1: {address_text: 'steve@gmail.com', domainId: 1, personId: 1},
  email2: {address_text: 'fossey@giraffefacts.com', domainId: 2, personId: 2},
  email3: {address_text: 'goodall@biology.edu', domainId: 3, personId: 3},
  email4: {address_text: 'jack@gmail.com', domainId: 1, personId: 4},
  email5: {address_text: 'haha@giraffefacts.com', domainId: 2, personId: 5},
  email6: {address_text: 'ilikewhales@biology.edu', domainId: 3, personId: 6},
  email7: {address_text: 'evolution@gmail.com', domainId: 1, personId: 7}
}

const domainValues = {
  gmail: {url_text: 'gmail.com'},
  vail: {url_text: 'giraffefacts.com'},
  fwork: {url_text: 'biology.edu'}
}

module.exports = { messageValues, ptypeValues, participantValues, personValues, emailValues, domainValues }
