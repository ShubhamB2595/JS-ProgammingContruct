const ps = require("prompt-sync");
const prompt = ps();

let num = parseInt(prompt("Enter number between 1 and 7: "));

switch (num) {
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday"); 
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday"); 
		break;
	case 7:
		console.log("Sunday");
		break;
	default:
		console.log("Enter number 1 & 7 to get the day from week"); 		
}
