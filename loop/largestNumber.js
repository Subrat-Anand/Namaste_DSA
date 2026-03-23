const largestNumber = (arr) => {
    if(arr.length == 0 || !arr) return;
    let max = -Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let arr = [7, 8, 4, 8, 9, 5, 9];
let result = largestNumber(arr);
console.log(result)