const arr = [1,2,3,4,5];

const understandFilters= (arr)=>{
    // read more about filter --> https://www.w3schools.com/jsref/jsref_filter.asp
    
    const arr2 = arr.filter(item => item>=3);

    return arr2
}

console.log(understandFilters(arr))
