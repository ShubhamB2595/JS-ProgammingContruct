const ps = require("prompt-sync");
const prompt = ps();

function checkPalindrome(num) {
    let temp = num;
    let rev = 0;

    while(num > 0) {
        let rem = num % 10;
        rev = (rev * 10) + rem;
        num = num/10;
    }

    if(rev == temp) {
        console.log("Its Palindrome Number");
    }
    else {
        console.log("Its not a Palindrome Number");
    }
}

const num = parseInt(prompt('Enter a number to check whether it is palindrome or not'));

checkPalindrome(num);