// types of function
// named function
// unnamed function (anynamous function)
// IIFE immediately invoked functional expression
// function with argument(multiple)
// funtion with return type
// function with argument and return type

// named function
// function welcome() {
//     console.log('i am welcome');
// }
// welcome();
// unnamed function
// function (){
// 	console.log('i am anynamous function');
// }

// IIFE 
// (function(){
// 	console.log('i am immediately invoked function')
// })(
// );
// function with argument
// function welcome(name) {
// 	console.log('type of >>',typeof(name));
//     console.log('what comes in >>', name);
// }
// welcome('brodway');
// function welcome(name, address,email,test) {
//     // console.log('type of >>',typeof(name));
//     // console.log('what comes in >>', name);
//     console.log('welcome ' + name + ' to  ' + address);
// }
// welcome('brodway','tinkune');
// welcome(null,'tinkune','test@gmail.com');
// welcome(null,'tinkune',null,'i am test');
// JAVASCRIPT is loosley typed programming language

// function sendMail(details){
// 	console.log('what comes is >>>',details);
// 	var mailBody = 'welcome '+ details.name +'to '+details.from ;

// }
// var mailData = {
// 	sender:'ram',
// 	reciever:'shyam',
// 	from:'brodway',
// 	to:'abcd',
// 	subject:'Welcome',
// 	msg:'welcome to brodway infosys nepal',
// 	coffee:'444',
// 	tea:'333'
// }
// sendMail(mailData)

function goToKitchen(name) {
    console.log('what comes in >>', name);
    var fruits = ['apple', 'orange'];
    var vegitables = ['potato'];
    return {
        fruits,
        vegitables,
        a: 'lsdkf',
        c: 'dsfkjdf',
        d: 'sdfsdf'
    };
}

var {fruits,c} = goToKitchen('ram');
console.log('result >>', fruits);
console.log('result >>', c);

// es6 feature
// object short hand
// var ram = 'abcd';
// var obj = {
//     ram
// } || {
//     ram: 'abcd'
// }

// object destruct