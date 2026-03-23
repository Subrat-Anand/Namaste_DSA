const secondLargestNumber = (arr) => {
    let firstLargestNumber = -Infinity;
    let secondLargestNumber = -Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > firstLargestNumber){
            secondLargestNumber = firstLargestNumber;
            firstLargestNumber = arr[i];
        }
        else if(arr[i] > secondLargestNumber && !firstLargestNumber){
            secondLargestNumber = arr[i]
        }
    }
    return secondLargestNumber;
}

let arr = [2, 5, 7, 6, 5, 8, 7, 8];
let result = secondLargestNumber(arr);
console.log(result)