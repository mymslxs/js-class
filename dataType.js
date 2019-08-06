// declare a variable
// var name  =  'sdklfj';
// const address = 'tinkune';
// name = 'aslkdjf';
// address = 'sdlkjf';

// data types
// primitive data types and non-primitive datatypes

// primitive datatype
// String ==>  single quote or double quote enclosed value are string ,"brodway" 'tinkune' '3333',"true"
// Number ==> every numeric value is  referred as number
// Boolean ==> true or false
// Null ==> non allocated memory
// Undefined ==> variable/constant defined but value not assigned

// Symbols // most of the time javascript itself will use this datatype

// non-primitive datatypes
// 1 Object
// Object is collection of key value pairs
// key value pair is also termed as name value property value
// object declaration syntax
// two way of creating object
// 1.constructor syntax
// 3 bracket notation
// new keyword is used to call constructor
// 1 constructor syntax
// var obj = new Object(); // new keyword is used to call construcotr
// 2 bracket notation
// var obj1 = {} // 
// eg  
// var brodway = {
//         name: 'brodway infosys nepal',
//         address: 'tinkune',
//         phoneNumber: 3333,
//     }
// 2 Array
// array is a data type used to store multiple values
// array in javascript is hetregenous
// declaration type
// constructor syntax
// var intrests = new Array('a',333,true);
// var intrests1 = ['dslfkj',333,true] // bracket notation


// naming convention
// PascalCase  = PhoneNumber
// cameCase = phoneNumber
// skewer-case =  phone-number
// snake_case  = phone_number

var a;
a = 'hello world'
a = 994994999
a = true
var address = {
        temp_address: ['bkt', 'ktm', 'chitwan'],
        permannt_address: 'bkt'
    }
var hobbies = ['coding', 'debugging', 'testing',address];

    // var hobbies = []
    // 
console.log('a is ', a);
var temp_address = 'temp_address';
var ram = 'ram';
// accessing property of object
// 2 methods = dot notation bracket notation
// console.log('hobbies is ', address.abcd);
console.log('hobbies is ', hobbies[3].temp_address[2]);
// JAVASCIRPT IS LOOSELY TYPED PROGRAMMING LANGUAGE