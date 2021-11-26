const ps = require("prompt-sync");
const prompt = ps();

let num = parseInt(prompt("Enter number like (1, 10, 100,....) "));

switch (num) {

	case 1:
		console.log("One");
		break;
	case 10:
		console.log("Ten"); 
		break;
	case 100:
		console.log("Hundred");
		break;
	case 1000:
		console.log("Thousand"); 
		break;
	case 10000:
		console.log("Ten Thousand"); 
		break;
	default:
		console.log("Enter only 1, 10, 100... ");
}
