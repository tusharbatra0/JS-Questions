// Sum of Array
let array = [12,2,34,5,6,78,9]
let newarray = array.reduce((acc,curr)=>{
 return acc + curr
},0)
console.log(newarray);

function RemoveDuplicates(arr) {
    const uniqueArray = [];
    for (const item of arr) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}
let areay = [12,12,34,5,5,665,56,775,3,2]
console.log(RemoveDuplicates(areay))