const ps = require("prompt-sync");
const prompt = ps();

let year = prompt("Enter the Year YYYY : ");

if ((year % 4) == 0) {
	console.log(year + " is the Leap year");
} else {
	 console.log(year + " is the Not leap year");
}

