// Message parts: each array holds the options for one piece of the message
const messageParts = {
  sign: ['the Debugger', 'the Night Owl', 'the Semicolon', 'the Git Wizard', 'the Stack Overflow Scholar'],
  forecast: ['your code will run on the first try', 'a bug will teach you something', 'a merge conflict is coming', 'your commit streak will grow', 'a new concept will finally click'],
  advice: ['commit early and often', 'read the error message twice', 'take a break and drink some water', 'console.log everything', 'explain it to a rubber duck']
};

// Pick a random item from any array
const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];


// Test code 
console.log(getRandom(messageParts.sign));