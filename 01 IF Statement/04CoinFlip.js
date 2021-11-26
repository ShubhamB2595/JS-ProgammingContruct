const HEADS = 1;
let flip = Math.floor(Math.random()*10 % 2);

if (HEADS == flip) {
	console.log("HEAD win");
} else {
	console.log("TAIL win");
}

