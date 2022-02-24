const fs = require('fs');

// const name = require('./utils');


const notes = require("./notes");
const add = require('./utils');


//fs.writeFileSync('app.txt', 'Write some data into app.txt using writeFileSync');

// try {
//     fs.writeFile('app.txt', 'This is to write some data async', () => {
//         console.log('End of call back execution')
//     });
// } catch (error) {
//     console.log('Error log')
// }


// fs.appendFileSync('app.txt', 'This is appended data')

const sum = add(3, -5);
console.log(notes());
console.log(sum);