// Message parts: each array holds the options for one piece of the message
const messageParts = {
  sign: ['the Debugger', 'the Night Owl', 'the Semicolon', 'the Git Wizard', 'the Stack Overflow Scholar'],
  forecast: ['your code will run on the first try', 'a bug will teach you something', 'a merge conflict is coming', 'your commit streak will grow', 'a new concept will finally click'],
  advice: ['commit early and often', 'read the error message twice', 'take a break and drink some water', 'console.log everything', 'explain it to a rubber duck']
};

// Pick a random item from any array
const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

// Loop through each category and format its random piece
const buildMessage = () => {
    const lines = [];
    for (const part in messageParts) {
        const choice = getRandom(messageParts[part]);
        switch (part) {
            case 'sign':
                lines.push(`Your coding sign is ${choice}.`);
                break;
            case 'forcacast':
                lines.push(`Today's forecase: ${choice}`);
                break;
            case 'advice':
                lines.push(`You should: "${choice}`);
                break;
            default:
                lines.push('The stars are unclear today.');
        }
    }
    return lines;
}


// Test code 
// console.log(getRandom(messageParts.sign));
console.log(buildMessage());