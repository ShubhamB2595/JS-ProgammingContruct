const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number to print prime factors: ");
console.log("Prime factors for " + num + " is: " );

for (let i=2; i<=num; i++) {
	if((num%i) == 0) {
		let ISprime = 1;
		for(let j=0; j<=i/2; j++) {
			if( (i%j) == 0) {
				ISprime = 0;
				break;
			}
		}
		if(ISprime == 1) {
			console.log(i);
		}
	}
}

