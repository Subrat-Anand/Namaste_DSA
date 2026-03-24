const findSecondSmallestNumber = (arr) => {
    if(arr.length == 0 && !arr) return;
    
    let firstSmallest = Infinity;
    let smallestNumber = Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < firstSmallest){
            secondSmallest = firstSmallest
            firstSmallest = arr[i]
        }
        else if(arr[i] < secondSmallest && !firstSmallest){
            secondSmallest = arr[i]
        }
    }
    
    return secondSmallest;
}

let num = [4, 5, 3, 7, 8, 9 ,3];
let result = findSecondSmallestNumber(num);
console.log(result)