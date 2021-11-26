const ps = require("prompt-sync");
const prompt = ps();

let a = prompt("Enter number: ");
let b = prompt("Enter number: ");
let c = prompt("Enter number: ");

let num1 = a + b * c;
let num2 = a % b + c;
let num3 = c + a / b;
let num4 = a * b + c;

console.log(num1+" , "+num2+" , "+num3+" , "+num4);
let min=num1;
let max=num1;

if (max <= num2) {
	max = num2;
}
else if(max <= num3) {
	max = num3;
}
else if(max <= num4) {
	max = num4;
}

console.log(max);

if (min >= num2) {
        min = num2;
}
else if(min >= num3) {
        min = num3;
}
else if(min >= num4) {
        min = num4;
}

console.log(min);















