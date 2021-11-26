const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number for calculating factorial: ");
let fact = 1;

for (let i=1; i<=num; i++) {
	fact = fact * i;
}

console.log("Factorial of " + num + "! is: ");
console.log(fact);
