// Javascript loosely typed programming language
// data types
// classifcation of data is data types

var a;
a = 333;
a = 'sting';
a = true;

a = [];
a = {};

console.log('before', a);

// function


// a reusuable block of code that perfoms specific task pero
// syntax function keyword 
// function (){

// }
// syntax there are two ways of writing function
// expression syntax
// declaration syntax

// 1 expression syntax
// sayHello();
// var sayHello;
// welcome
sayHello();
var sayHello = function() {
    console.log('i am expression syntax function')
}
// sayHello();// funtion execution start after function call
console.log('after', a);

welcome();

function welcome() {
    console.log('i am declaration syntax function')
}

// Hoisting // Hoisting is a mechanism which moves all the declaration at top before execution


// welcome();