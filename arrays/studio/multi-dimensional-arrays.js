let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
cabinet1 = food.split(",").sort();
cabinet2 = equipment.split(",").sort();
cabinet3 = pets.split(",").sort();
cabinet4 = sleepAids.split(",").sort();


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];

console.log(cargoHold);


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let numCabinet = input.question(`Please select a cabinet number between 0 and ${cargoHold.length -1}: `);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (numCabinet > cargoHold.length -1 || numCabinet < 0){
    console.log(`Error, enter valid number between 0 and ${cargoHold.length -1}.`);
} else {
    console.log(`The selected cabinet contains: ${cargoHold[numCabinet]}.`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let item = input.question(`Select an item from ${cargoHold[numCabinet]}: `);
if (numCabinet > cargoHold.length -1 || numCabinet < 0){
    console.log(`Error, enter valid number between 0 and ${cargoHold.length -1}.`);
}else {
if (numCabinet > (cargoHold[numCabinet].includes(item))){
    console.log(`Cabinet ${numCabinet} DOES contain ${item}.`)
} else {
console.log(`Cabinet ${numCabinet} DOES NOT contain ${item}.`)
}
}