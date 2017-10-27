/*
  We're building a voting application, where we present multiple options and allow
  users to click on different buttons, in a sense "making a vote". At the end,
  we would like to see how many votes each item received.

  User can only vote on one item.
*/

let dogsVotes = 0
let catsVotes = 0
let dolphinsVotes = 0

// "Button for voting for dogs"
function voteDogs() {
  dogsVotes++
}

// "Button for voting for cats"
function voteCats() {
  catsVotes++
}

// "Button for voting for dolphins"
function voteDolphins() {
  dolphinsVotes++
}

function generateAVote(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Simulate voting session
const NUM_OF_PEOPLE = 100000
const votingOptions = [voteDogs, voteCats, voteDolphins]

for (let i = 0; i < NUM_OF_PEOPLE; i++) {
  const getAVote = generateAVote(0, 2)
  votingOptions[getAVote]()
}

catsVotes -= 20000
dolphinsVotes += 20000

// Statics 
console.log('Dogs Lovers: ', dogsVotes)
console.log('Cats Lovers: ', catsVotes)
console.log('Dolphins Lovers: ', dolphinsVotes)