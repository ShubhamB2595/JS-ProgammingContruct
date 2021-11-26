const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number to get harmonic series: ");
console.log("Harmonic series: ");

for (let i=1; i<=num; i++) {
	console.log("1/" + i);
}
