//simple script
console.log("Hello, Javascript!")
alert("Welcome to JavaScript!");
document.write("This is JavaScript output!");

//declare and use the variables
var name = "Alice";
let age = 25;
const country = "USA";

console.log(name);
console.log(age);
console.log(country);

//String and number manipulation
let greeting = "Hello, " + name + "!";
console.log(greeting);
console.log(greeting.length);
console.log(greeting.toUppercase());

let num = 10;
console.log(num + 5);
console.log(num * 2);
console.log(num / 2);

//work with dates and math
let currentDate = new Date();
console.log(currentDate);

console.log(Math.round(4.7));
console.log(Math.sqrt(64));
console.log(Math.random());

//create and call functions
function square(num) {
  return num * num;
}
console.log(square(4));

function greetUser(username) {
  return "Hello, " + userName + "!";
}
console.log(greetUser("Alice"));
