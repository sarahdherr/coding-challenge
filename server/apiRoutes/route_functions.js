// FUNCTIONS TO FOR DOMAIN MESSAGE COUNT

// Takes an array of email objects and returns an object with structure {domainName: messageCount}
function groupByDomains (emailArr) {
  const domainObj = {}
  emailArr.forEach(email => {
    if (domainObj[email.domain]) {
      domainObj[email.domain] += email.count
    } else {
      domainObj[email.domain] = email.count
    }
  })
  return domainObj
}

// Takes an array of participant objects, counts number of messages with participant types 2, 3, or 4 (To, CC and BCC)
// and returns the count (integer)
function countPType (participantArr) {
  let count = 0
  participantArr.forEach(message => {
    if (message.ptypeId !== 1) count++
  })
  return count
}

// Takes the raw array from the Sequelize query and returns an object with the structure {domainName: messageCount}
function getDomainCount (emailArr) {
  const countedArr = []
  emailArr.forEach(email => {
    countedArr.push({
      count: countPType(email.participants),
      domain: email.domain.url_text
    })
  })
  return groupByDomains(countedArr)
}

module.exports = getDomainCount
