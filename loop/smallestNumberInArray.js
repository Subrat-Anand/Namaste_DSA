const smallestNumberInArray = (arr) => {
    if(!arr || arr.length == 0) return;
    let small = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < small){
            small = arr[i]
        }
    }
    return small
}

let arr = [2, 1, 5, 7, 9, 5];
let result = smallestNumberInArray(arr);
console.log(result)