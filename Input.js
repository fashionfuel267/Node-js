const app=require("http");
app
let sum = 0;
const readline = require('readline');
const fs= require('fs')
const path = require('path');
// const newDirectoryPath = path.join(__dirname, '/data');
// fs.mkdirSync(newDirectoryPath);
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
// rl.question(">>What's your name? ", answer => {
// console.log(`Hello ${answer}`);
// rl.close();
// });
console.log(__dirname)
console.log(__filename)
console.log("Enter numbers, one to a line. Enter 'exit' to quit.");
rl.setPrompt('>> ');
rl.prompt();
rl.on('line', input => {
const userInput = input.trim();
if (userInput === 'exit') {
rl.close();
return;
}
 
sum += Number(userInput);
rl.prompt();
});
// user typed in 'exit'
rl.on('close', () => {
console.log(`Total is ${sum}`);
fs.writeFile(path.join(__dirname,'Data','test.txt'),
                sum,err=> {
                        if(err){console.log(err)}
                        else
                        {
                            console.log("success")
                        }
                });
                data=[]
process.exit(0);
});