const isPalindrome = (x) => {
    if(x < 0) return ;
    let xCopy = x;
    let reverse = 0;
    while(x > 0){
        let rem = x % 10;
        reverse = (10*reverse)+rem;
        x = Math.floor(x/10);
    }
    return xCopy === reverse;
}

let n = 424;
let result = isPalindrome(n);
console.log(result);