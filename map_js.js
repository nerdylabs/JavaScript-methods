const arr = [1,2,3,4,5];

const understandFor= (arr)=>{
    for(let i = 0; i<arr.lenght; i++){
        arr[i] = arr[i] + 1
    }
}

const understandMaps=(arr)=>{
    const arr2 = arr.map(item=>item+1)
    return arr2
}

console.log(understandMaps(arr));
console.log(arr);

understandFor(arr);
console.log(arr)