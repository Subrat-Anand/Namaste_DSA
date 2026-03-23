const countNegativeNumber = (arr) => {
    if(arr.length == 0 || !arr) return -1;
    count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

let arr = [4, 7, 9, 5, -7, -6, 4, -2];
let result = countNegativeNumber(arr);
console.log(result)