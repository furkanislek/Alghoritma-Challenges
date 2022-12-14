// Simple Mode
// Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.
// Examples
// Input: [5,5,2,2,1]
// Output: 5
// Input: [3,4,1,6,10]
// Output: -1

function SimpleMode(arr) { 

    var mode = 0;
    var count = 0;
  
    for(var i = 0;  i<arr.length; i++){
      var count2 = 0;
      for(var j = 0; j<arr.length; j++){
        if(arr[i] == arr[j] && j!==i){
          count2++;
        }
        if(count2>count){
          mode= arr[i];
          count = count2;
          count2 = 0;
        }
      }
    }
    if(count == 0){
      return -1;
    }
    return mode;
  }
     
  // keep this function call here 
  console.log(SimpleMode(readline()));