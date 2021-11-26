const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number for power table of 2: ");

for (let i=1; i<=(2**num); i++) {
	console.log("Power of " + i + " is " + i**2);
}
