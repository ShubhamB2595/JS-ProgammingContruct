const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number like (1, 10, 100,....) ");

if (num == 1) { 
	console.log("One"); 
} 
else if (num == 10) { 
	console.log("Ten"); 
} 
else if (num == 100) { 
	console.log("Hundred");
} 
else if (num == 1000) { 
	console.log("Thousand"); 
} 
else if (num == 10000) { 
	console.log("Ten Thousand"); 
} 
else { 
	console.log("Enter only 1, 10, 100... "); 
}

