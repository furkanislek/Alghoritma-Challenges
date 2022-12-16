const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War And Peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["LOTR", "The Shining"],
    age: 18,
  },
];


function bookArr(arr){
    var res = arr.reduce((a, b) => {
        return [...a, ...b.books]
    }, [])
    return res
}

console.log(bookArr(friends));