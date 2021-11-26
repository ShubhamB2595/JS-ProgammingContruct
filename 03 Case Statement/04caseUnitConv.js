const ps = require("prompt-sync");
const prompt = ps();


console.log("1. Feet to Inch");
console.log("2. Inch to Feet");
console.log("3. Feet to Meter");
console.log("4. Meter to Feet");

let option = parseInt(prompt("Select number to use Unit Converter: "));

switch(option) {
	case 1 :
		let feet = prompt("Enter feet value to convert into inch ");
		let inch = feet * 12 ;
		console.log(feet + " ft = " + inch + " inch");
		break;
 	case 2 :
                let inchV = prompt("Enter inch value to convert into feet ");
                let feetV = inchV / 12 ;
                console.log(inchV + " inch = " + feetV + " ft");
                break;
	case 3 :
                let feetVa = prompt("Enter feet value to convert into meter ");
                let meter = feetVa * 0.3048 ;
                console.log(feetVa + " ft = " + meter + " mtr");
                break;
 	case 4 :
                let meterV = prompt("Enter meter value to convert into feet ");
                let feetVal = meterV * 3.281 ;
                console.log(meterV + " mtr = " + feetVal + " ft");
                break;
	default :
		console.log("Select correct option");
}
