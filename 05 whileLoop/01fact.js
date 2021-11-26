const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number for calculating factorial: ");
let fact = 1;

while(fact < 256) {
	for (let i=1; i<=(2**num); i++) {
		console.log(i**2);
	}
	fact = fact + i;
}

