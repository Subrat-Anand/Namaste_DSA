const reverseNumber = (x) => {
    let xCopy = x;
    x = Math.abs(x);
    let rev = 0;
    
    while(x > 0) {
        let rem = x%10;
        rev = (rev*10) + rem;
        x = Math.floor(x/10);
    }
    
    let limit = Math.pow(2, 31);
    if(rev > limit || rev < -limit) return 0;
    
    return (xCopy < 0) ? -rev : rev;
}

let num = -12345;
const result = reverseNumber(num);
console.log(result);