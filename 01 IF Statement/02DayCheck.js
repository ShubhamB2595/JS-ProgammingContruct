const ps = require("prompt-sync");
const prompt = ps();

let startDay = 2003; //DDMM
let endDay = 2006; //DDMM

let userDay = prompt("Enter day in format DDMM : ");
console.log(userDay);

if ((userDay >= startDay) && (userDay <= endDay)) {
	console.log("True");
} else {
	console.log("False");
}
