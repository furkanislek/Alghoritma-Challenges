var isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("")
};

console.log(isPalindrome(12321));  // Output : true;
console.log(isPalindrome(122321));  // Output : false;
