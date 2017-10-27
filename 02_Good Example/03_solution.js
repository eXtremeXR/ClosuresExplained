/*
  We're building a voting application, where we present multiple options and allow
  users to click on different buttons, in a sense "making a vote". At the end,
  we would like to see how many votes each item received.

  User can only vote on one item.
*/

/*
  1) Block A is ran only once!
  2) Block A sets dogsVotes to 0
  3) Block A sets incrementDogsVotes() ("the inner function") to voteDogs
  *) THIS !!!!! is called a JavaScript closure!
*/

const dogsInterface = (function() {
  let votes = 0

  function increment() {
    votes++
  }

  function showStats() {
    console.log('Dogs votes: ', votes)
  }

  return {
    vote: increment,
    stats: showStats
  }
})()

const catsInterface = (function() {
  let votes = 0

  function increment() {
    votes++
  }

  function showStats() {
    console.log('Cats votes: ', votes)
  }

  return {
    vote: increment,
    stats: showStats
  }
})()

const dolphinsInterface = (function() {
  let votes = 0

  function increment() {
    votes++
  }

  function showStats() {
    console.log('Dolphins votes: ', votes)
  }

  return {
    vote: increment,
    stats: showStats
  }
})()

function generateAVote(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Simulate voting session
const NUM_OF_PEOPLE = 100000
const votingOptions = [dogsInterface.vote, catsInterface.vote, dolphinsInterface.vote]

for (let i = 0; i < NUM_OF_PEOPLE; i++) {
  const getAVote = generateAVote(0, 2)
  votingOptions[getAVote]()
}

// Statics 
dogsInterface.stats()
catsInterface.stats()
dolphinsInterface.stats()

