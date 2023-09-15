// Largest Number in an array.
let largestNumber = [];
let arr = [12,14,1,2,23,22,233,1]

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  console.log(largestNumber)
  
//   Reverse of an array
let array = [2,4,6,8,10]
let reversedArr = [];