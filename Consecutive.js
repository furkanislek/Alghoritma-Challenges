// function Consecutive(arr) { 
//     // var min = Math.min.apply(Math, arr);
//     // var max = Math.max.apply(Math, arr);
//     var min = Math.min(...arr);
//     var max = Math.max(...arr);
//     var result = (max-min)-arr.length+1;
//     return result;
//   }
     
//   keep this function call here 
//   console.log(Consecutive(readline()));



const arr = [1,2,4,5,7,123,3445,3432,-213];
const sortArr = (arr) => {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  return (max-min);
}

console.log(sortArr(arr));