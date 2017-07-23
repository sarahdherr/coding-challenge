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

function countPType (participantArr) {
  let count = 0
  participantArr.forEach(message => {
    if (message.ptypeId !== 1) count++
  })
  return count
}

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
