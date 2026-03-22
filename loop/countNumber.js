const countNumber = (num) => {
    if(num < 0) return -1;
    let count = 0;
    while(num > 0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

let n = 123456; 
let result = countNumber(n);
console.log(result);