// Reverse the String
let str = "Kanak";
let array = str.split("");
let reversedArray = array.reverse()
let reversedStr = reversedArray.join("")
console.log(reversedStr)

// Check String is Palindrome or not
function isPalindrome(string) {

    string = string.toLowerCase();

    let arr = string.split('');
    let reversedArr = arr.slice().reverse(); 

    if (string === reversedArr.join('')) {
        return `${string} is a Palindrome String`;
    } else {
        return `${string} is not a Palindrome String`;
    }
}

console.log(isPalindrome("Tushar"));
