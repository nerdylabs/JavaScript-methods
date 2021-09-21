const arr = [1,2,3,4,5];

const understandReduce= (arr)=>{
    // read more about filter --> https://www.w3schools.com/jsref/jsref_reduce.asp
    const arr2 = arr.reduce((total, item)=>total-item)
    return arr2

}

console.log(understandReduce(arr))
