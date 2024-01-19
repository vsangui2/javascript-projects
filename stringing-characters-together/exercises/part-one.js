let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

// console.log(String(num));
// num = String(num);
// console.log(num.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

num /= 100;
console.log(num)
num = String(num)
console.log(typeof num);
console.log(num.replace('.', ''));


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
