const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0,3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`Original string: ${str} and modified string: ${newStr}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let relocateNum = input.question("How many letters do you want to relocate? ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.


if (relocateNum > str.length || relocateNum < 1) {
    console.log(`Please enter number between 0 and ${str.length}`);
    relocateNum = 3;
    console.log(str.slice(relocateNum) + str.slice(0,relocateNum));
} else {
    newStr = str.slice(relocateNum) + str.slice(0,relocateNum);
    console.log(newStr);
}


