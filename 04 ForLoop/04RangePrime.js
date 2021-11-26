const ps = require("prompt-sync");
const prompt = ps();

let startNum = prompt("Enter number to start printing prime num: ");
let endNum = prompt("Enter number to stop printing prime num: ");

console.log("prime numbers between " +startNum + " & " +endNum + " are: ");

for (let i=startNum; i<=endNum; i++) {

	let count = 0;
	for (let j=1; j<=i; j++) {
		if ((i%j) == 0) {
			count = count + 1;		
		}
	}
	if (count == 2) {
		console.log(i);
	}
}

