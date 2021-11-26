let amount = 100;
const WIN = 1;
let betCount = 0;

while(amount < 200 && amount > 0) {
	let random = Math.floor(Math.random()*2);
	betCount++;
	
	if(random == WIN) {
		amount+=1;
	}
	else {
		amount-=1;
	}
}

console.log("Final amount " + amount + "\nNo of Bets: " + betCount);