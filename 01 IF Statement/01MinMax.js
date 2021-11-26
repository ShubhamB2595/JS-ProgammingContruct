let num1 = Math.floor(Math.random() * (999-100+1) + 100);
let num2 = Math.floor(Math.random() * (999-100+1) + 100);
let num3 = Math.floor(Math.random() * (999-100+1) + 100);
let num4 = Math.floor(Math.random() * (999-100+1) + 100);
let num5 = Math.floor(Math.random() * (999-100+1) + 100);
console.log(num1+" , "+num2+" , "+num3+" , "+num4+" , "+num5);

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
else if(max <= num5) {
	max = num5;
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
else if(min >= num5) {
        min = num5;
}
console.log(min);

