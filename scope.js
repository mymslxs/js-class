// scope is accessibility or visibility of application data
// type of scope
// global scope
// local scope
// ===> block scope

var test = 'i am test'; // global
var ram = 'i am global ram';
function welcome(name) { // welcome is global
	ram = 'test';
    console.log('i am test in welcome >>>', ram);
}

// welcome();

function sayHello() {// global
	console.log('acces value line in 18 of ram >',ram);
    console.log('i am in sayHello test >>',test);
}
console.log('ram outside >>>',ram);
sayHello();