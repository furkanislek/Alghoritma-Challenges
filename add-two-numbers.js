/* 

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

var addTwoNumbers = function(l1, l2) {
    var rev1 = l1.reverse();
    var rev2 = l2.reverse();

    console.log(rev1);
    console.log(rev2);

    var str1 = "";
    var str2 = "";
    rev1.forEach((e) => {
       str1 += e.toString()
    })
    rev2.forEach((e) => {
       str2 += e.toString()
    })

    console.log(str1);
    console.log(str2);

    
    console.log(typeof Number(str1))

    var num1 = Number(str1);
    var num2 = Number(str2);

    var sum = num1 + num2;

    console.log(typeof sum);
    var sumRev = sum.toString()
    console.log(typeof sumRev);

    var res = sumRev.split("").map((num)=>{
        return Number(num)
      });

    var result = res.reverse();
    
    return result;

 };

 console.log(addTwoNumbers([2,4,3], [5,6,4]));
 console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
 console.log(addTwoNumbers([0], [0]));