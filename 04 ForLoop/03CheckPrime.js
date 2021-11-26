const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number to check is prime or not: ");

for (let i=2; i<=num/2; i++) {
	if((num%i) == 0) {
		console.log(num + " is not prime number");
		break;
	}
}
console.log(num + " is prime number");
