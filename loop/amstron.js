const amstron = (arr) => {
    if(arr.length == 0 && !arr) return;
    let xCopy = arr
    let rev = 0;
    while(arr > 0){
        let rem = arr%10;
        rem = Math.pow(rem, 3);
        rev += rem;
        arr = Math.floor(arr/10)
    }
    return xCopy === rev;
}

let arr = 153;
let result = amstron(arr);
console.log(result)