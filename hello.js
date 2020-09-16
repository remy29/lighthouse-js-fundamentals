//Example 1
/*
const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();
*/

//Example 2
/*
const sayHello  = function (name) {
  console.log("Hello, " + name);
}

console.log(sayHello('Arthur'));
*/

//Example 3

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);