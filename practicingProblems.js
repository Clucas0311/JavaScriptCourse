//Create a function addTwo that accepts one input and adds 2 to it.
// addTwo(2) >> output should be 4

// ToDo List
// declare a function name it addTwo
// This function one parameter ==> num
//  return num + 2
// const addTwo = (num) => num + 2;
// console.log(addTwo(2));

// //Create a function addS that accepts one input and adds an "s" to it.
// // ToDO
// // Declare a function name it addS
// // input ==> word
// // return word + "s"
// function addS(word) {
// 	return word + 's';
// }

// console.log(addS('Cat'));

// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback'
//  function on each element of the input array.

//Steps
// create function called map takes in two params ==> array, callback
// create an empty array to push the items
// in order to access the elements of the array ==> for loops, forEach ==> elements
// invoke that callback(array[i])
// thus the newArr will be the callback(array[i]) thus pushing it inside

// function map(array, callback) {
// 	const newArr = [];
// 	for (let i = 0; i < array.length; i++) {
// 		newArr.push(callback(array[i]));
// 	}
// 	return newArr;
// }
// const arr = [ 1, 2, 3, 4, 5 ];
// console.log(map(arr, (num) => num * 2));

// The function forEach takes an array and a callback,
// and runs the callback on each element of the array.
// forEach does not return anything.
// const arr = [ 1, 2, 3, 4, 5 ];
// forEach(array, (num) => num + 2);

//ToDO
// create a function called forEach ==> two parameters ==> array, callback
// How can we get each element? ===> Looping iterate through array
// Runs means callback will take in each individual elements and when invoked it give
// all the elements

// function forEach(array, callback) {
// 	for (let i = 0; i < array.length; i++) {
// 		callback(array[i]);
// 	}
// }

// const arr = [ 1, 2, 3, 4, 5 ];
// console.log(
// 	forEach(arr, function(num) {
// 		return num + 2;
// 	})
// ); // 3, 4, 5, 6, 7

// In the first part of this challenge,
// you're going to rebuild map as mapWith. This time you're going
// to use forEach inside of mapWith instead of using a for loop.
// ToDo
// create a new function that takes in two params ==> array, callback
// create a new array to push new items in
// iterate ==> using forEach function
// callback will be each element as an argument pushed into new array

function mapWith(array, callback) {
	const newArray = [];
	forEach(array, function(element) {
		newArray.push(callback(element));
	});
	return newArray;
}

// const array = [ 4, 5, 6, 7, 8 ];
// console.log(mapWith(array, (num) => num * 3)); // [12, 15, 18, 21, 24]

// The function reduce takes an array and reduces
// the elements to a single value.
// For example it can sum all the numbers,
// multiply them, or any operation that you can put into a function.
// Here's how it works. The function has an "accumulator value"
// which starts as the initialValue and accumulates the output of each loop.
//  The array is iterated over,
//  passing the accumulator and the  next array element as
//  arguments to the callback. The callback's return value becomes the new accumulator value.
//  The next loop executes with this new accumulator value.
//  In the example above, the accumulator
//  begins at 0. add(0,4) is called. The accumulator's value is now 4.
//  Then add(4, 1) to make it 5.
//  Finally add(5, 3) brings it to 8, which is returned.
// create function called reduce(array, callback, initialValue)
// intialValue empty === undefined

// if there is an initial value accumulator === initial
// create a loop to iterate over array
// accumulator = callback(accumulator, array[i])
function reduce(array, callback, initialValue) {
	let accumulator;
	if (initialValue === undefined) {
		accumulator = array[0];
		array = array.slice(1);
	} else {
		accumulator = initialValue;
	}
	for (let i = 0; i < array.length; i++) {
		accumulator = callback(accumulator, array[i], [ i ], array);
	}
	return accumulator;
}

// const arr = [ 4, 5, 6, 7, 8 ];
// const calling = (prev, next) => prev + next;
// const number = 1;
// console.log(reduce(arr, calling, 1)); //===> 31

// Construct a function intersection that compares input arrays
// and returns a new array with elements found in all of the inputs.
//  BONUS: Use reduce!
// create function called intersection
// one parameter array
// nested array ==> compare each array by element
// reduce takes one element and checks it and then pass it
// so I can filter the prev.filter(element) see if that element is included
// in the next element

function intersection(array) {
	return array.reduce((prev, next) => prev.filter((element) => next.includes(element)));
}

// const arr1 = [ 5, 10, 15, 10 ];
// const arr2 = [ 15, 88, 1, 5, 7 ];
// const arr3 = [ 1, 10, 15, 5, 20 ];
// // console.log(intersection([ arr1, arr2, arr3 ]));
// console.log(intersection([ arr1, arr2, arr3 ])); //==>  [5, 15]

// Construct a function union that compares input arrays
// and returns a new array that contains all elements.
// If there are duplicate elements, only add it once to the new array.
// Preserve the order of the elements starting
// from the first element of the first input array. BONUS: Use reduce!
// ToDo List:
// declare a function called union ==> one parameter (array)
// function body:
// use reduce to flatten prev and next
// We want to flatten the nested array:
// concat/ use spread []
// We want to check if the elements have duplicates
// We can filter(element, index) the duplicates by index
// indexOf(element) === index

// function union(array) {
// 	let flat = array.reduce((prev, next) => prev.concat(next), []);
// 	let filtered = flat.filter((element, index) => flat.indexOf(element) === index);
// 	return filtered;
// }

// arr1 = [ 1, 2, 3, 4 ];
// arr2 = [ 4, 5, 6, 7 ];
// arr3 = [ 7, 8, 9, 10 ];
// console.log(union([ arr1, arr2, arr3 ])); // ===> [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12]

// Construct a function objOfMatches that accepts two arrays and a callback.
// objOfMatches will build an object and return it. To build the object,
// objOfMatches will test each element of the first array using the callback
// to see if the output matches the corresponding element (by index) of the
//  second array. If there is a match, the element from the first array becomes
//  a key in an object, and the element from the second array becomes the
//  corresponding value.
// ToDo List:
// create a function objofMatches that has three parameters array1 array2 callback
// Function body
// I need to test each element of the first array ==> reduce
// Create an empty object
// if callback(next) === arr2(index)
// then obj[next] = arr2[index]
// return obj

// function objOfMatches(array1, array2, callback) {
// 	return array1.reduce((obj, next, index) => {
// 		if (array2[index] === callback(next)) {
// 			obj[next] = array2[index];
// 		}
// 		return obj;
// 	}, {});
// }

// const arr1 = [ 'hi', 'hello', 'good', 'lol', 'smart' ];
// const arr2 = [ 'HI', 'BYE', 'GOOD', 'LAUGH', 'SMART' ]; //==> {"hi": "HI", "good": "GOOD", "smart": "SMART"}
// function call(arr) {
// 	return arr.toUpperCase();
// }
// console.log(arr2);

// const arr1 = [ 'hi', 'howdy', 'bye', 'later', 'hello' ];
// const arr2 = [ 'HI', 'Howdy', 'BYE', 'later', 'HELLO' ];
// function uppercaser(str) {
// 	return str.toUpperCase();
// }
// console.log(objOfMatches(arr1, arr2, uppercaser));
// console.log(objOfMatches(arr1, arr2, call));

// Construct a function multiMap that will accept two arrays: an array of values
// and an array of callbacks. multiMap will return an object whose keys
// match the elements in the array of values. The corresponding values that
// are assigned to the keys will be arrays consisting of outputs from the
// array of callbacks, where the input to each callback is the key.

// inputs two arrays - one array values - array of callbacks

// ToDo List
// declare a function named multiMap ==> two params arrayVal, arrCallback
// reduce arrayVal, create an empty {}, obj, next
// empty array  = []
// obj[next] = arrVal.map(callback(next)))
// return that obj

// function multiMap(arrayVal, arrCallback) {
// 	return arrayVal.reduce((obj, next) => {
// 		let newArr = next.map((element) => arrCallback(element));
// 		return (obj[next] = newArr);
// 	}, {});
// }

// const arrayofValues = [ 1, 2, 3 ]; // keys
// function call(num) {
// 	newArr = [];
// 	for (element of num) {
// 		newArr.push(element * 2);
// 	}
// 	return newArr;
// }
// console.log(multiMap(arrayofValues, call));
// // {1 : [1], 2 : [2] , 3: [6]}

// Create a function majority that accepts an array and a callback.
// The callback will return either true or false. majority will iterate
// through the array and perform the callback on each element until it can be
// determined if the majority of the return values from the callback are true.
//  If the number of true returns is equal to the number of false returns,
//  majority should return false.

// create a function called majority ==> two parameters (array, callback function )
// iterate ==> loop through the array parameter and take in the elements as arg
// for the callback ==> callback(array[i])
// callback(array[i]) ==> return true/ false
// i will create an two arrays one for truth and one for false
// if the callback[i] is true return true
// else return false
// // if true === false then return false

// function majority(array, callback) {
// 	const truthyArray = [];
// 	const falseyArray = [];
// 	for (let element of array) {
// 		if (callback(element) === true) {
// 			truthyArray.push(element);
// 		} else {
// 			falseyArray.push(element);
// 		}
// 	}
// 	if (truthyArray.length > falseyArray.length) {
// 		return true;
// 	}
// 	return false;
// }

// const argu = [ 1, 2, 3, 4, 5 ];

// function isOdd(num) {
// 	return num % 2 === 1;
// }

// console.log(majority(argu, isOdd));

// Construct a function objectFilter that accepts an object as the first parameter
// and a callback function as the second parameter. objectFilter will return a
// new object. The new object will contain only the properties from the input object
// such that the property's value is equal to the property's key passed into the
//  callback.

// objectFilter(obj, callback) ==> {obj[keys] = values }

//ToDolist
// Create a function named objectFilter - two parameters obj, callback
// newObject = {}
// for let key in obj
//  ===> declare prop = obj[key]
// newObject[prop] = callback(prop)
// return  newObject

// function objectFilter(obj, callback) {
// 	const newObject = {};
// 	for (let key in obj) {
// 		let prop = obj[key];
// 		if (prop === callback(prop)) {
// 			newObject[key] = callback(prop);
// 		}
// 	}
// 	return newObject;
// }
// const cities = {
// 	London: 'LONDON',
// 	LA: 'Los Angeles',
// 	Paris: 'PARIS'
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase()));

// Create a function prioritize that accepts an array and a callback.
// The callback will return either true or false. prioritize will iterate through
// the array and perform the callback on each element, and return a new array,
//  where all the elements that yielded a return value of true come first in the array,
//   and the rest of the elements come second.

// inputs ==> array and callback
// loop through the array to get its elements => those are then going
// to be arguments in the callback(array[i])
// going to test each callback(array[i]) ==> if its true place that into an empty array
// the true come first and the other elements go last.
// output [callback(arrayitemstrue)][elements that are false] ==> merge array into one

// ToDo List:
// Create a function named prioritize has two parameters(array, callback)
//  create a truthyArray = []
// create a falseyArray  = []
// for loop the array and its elements are going to be callback[element]
// if callback[element] is true ==> push truthArray.push(element)
// Merge with concat or spread
// return truthyarray.concat(callback[i])
// function prioritize(array, callback) {
// 	const truthyArray = [];
// 	const falseyArray = [];
// 	for (let element of array) {
// 		if (callback(element) === true) {
// 			truthyArray.push(element);
// 		} else {
// 			falseyArray.push(element);
// 		}
// 	}
// 	return truthyArray.concat(falseyArray);
// }

// const startsWithS = function(str) {
// 	return str[0] === 's' || str[0] === 'S';
// };
// console.log(prioritize([ 'curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends' ], startsWithS)); // should log:
// // ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Create a function countBy that accepts an array and a callback, and returns an object.
// countBy will iterate through the array and perform the callback on each element.
// Each return value from the callback will be saved as a key on the object.
// The value associated with each key will be the number of times that particular
// return value was returned.

// inputs (array, callback)
// array iteration ==> use for loops, forEach, ==> get the elements
// elements are going to be arguments to the callback(element)
// callback(element) ==> when invoked the return value is the objects key
// the value = how many times the callback(element) is returned
// outputs =  {}

// ToDo List
// Declare a function named countBy => it has two parameters (array and callback)
// const newObjecto = {}
// for (let element of array)
// newObjecto[callback(array[i])]  ===>   newObjecto[callback(array[i])]++
// if it doesn't were going to set that value === 1
// function countBy(array, callback) {
// 	const newObjecto = {};
// 	for (let element of array) {
// 		if (newObjecto[callback(element)]) {
// 			newObjecto[callback(element)]++;
// 		} else {
// 			newObjecto[callback(element)] = 1;
// 		}
// 	}
// 	return newObjecto;
// }
// console.log(
// 	countBy([ 1, 2, 3, 4, 5 ], function(num) {
// 		if (num % 2 === 0) return 'even';
// 		else return 'odd';
// 	})
// );
//{key: 1, key2: 3

// Create a function groupBy that accepts an array and a callback,
//  and returns an object. groupBy will iterate through the array
//  and perform the callback on each element. Each return value from
//   the callback will be saved as a key on the object. The value associated
//   with each key will be an array consisting of all the elements that resulted
//   in that return value when passed into the callback.

// inputs ==> array and callback as params
// create an object
// iterate through array ==> loop through to get its elements
// callback(array[i]) ==> elements will be arguments for the callback so inside loop
// key = (callback(element))
// the value = [all the elements of the array]

//create a function called groupBy(array, callback) takes in two params
// create an empty object
// loop through the array for (let element of array)
// obj[callback(element)] = element
// return obj

// function groupBy(array, callback) {
// 	const obj = {};
// 	for (let element of array) {
// 		let key = callback(element);
// 		if (key in obj) {
// 			console.log(key, obj, element);
// 			obj[key].push(element);
// 		} else {
// 			obj[key] = [ element ];
// 		}
// 	}
// 	return obj;
// }
// const decimals = [ 1.3, 2.1, 2.4 ];
// const floored = function(num) {
// 	return Math.floor(num);
// };
// console.log(groupBy(decimals, floored));

//  callback(num => num * 2)
//  array = [1, 2, 3, 4, 5]
//  {2: 1, 4: 2, 6: 3, 8: 4, 10: 5}

// Create a function goodKeys that accepts an object and a callback.
// The callback will return either true or false.
// goodKeys will iterate through the object and perform the callback on each value.
// goodKeys will then return an array consisting only the keys whose
// associated values yielded a true return value from the callback.

// create a function that will have two parameters those parameter will be one and object
// the other will be a callback function
// the goodKeys function will loop through the object and the callback will take
// in the objects values as arguments
// the function will create an array based on it arguments where inside the array
// the keys from the object that were true values when callback function was called inside

// ToDo create a function goodKeys(obj, callback)
// create an empty array or use map or filter
// use for in to iterate through the object to get the keys
// callback(keys) and filter through that to get the true values
// use filter ==> create a new array to filter out the keys from object that are true

// function goodKeys(obj, callback) {
// 	let newArr = [];
// 	for (let key in obj) {
// 		if (callback(obj[key]) === true) {
// 			newArr.push(key);
// 		}
// 	}
// 	return newArr;
// }

// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) {
// 	return str.slice(0, 4).toLowerCase() === 'bird';
// };
// console.log(goodKeys(sunny, startsWithBird));

// console.log(callback(callback));

// Create a function commutative that accepts two callbacks and a value.
// commutative will return a boolean indicating if the passing the value
//  into the first function, and then passing the resulting output into
//   the second function, yields the same output as the same operation with
//   the order of the functions reversed (passing the value into the second
// 	function, and then passing the output into the first function).

// inputs Create a function named commutative in has three parameters (callback1, callback2, value)
// output should be either true or false
//  your going to take the value  argument pass it into the first function
// then that number should then be the argument for the second  and you will get a number
// if you do it backwards placing the value into the second argument then taking that value
// and placing it into the first function as an argument then the result should be the same
// both forwards and backwards

//ToDO List
// create a function named commutative(call1, call2, value)
// let first = call1(value)
// let second = call2(first)
// let third = call2(value)
// let fourth = call1(third)
// if fourth === second
// the return true
// else return false

// function commutative(func1, func2, value) {
// 	let first = func1(value);
// 	let second = func2(first);
// 	let third = func2(value);
// 	let fourth = func1(third);
// 	if (fourth === second) {
// 		return true;
// 	}
// 	return false;
// }

// const multBy3 = (n) => n * 3;
// const divBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Create a function objFilter that accepts an object and a callback.
//  objFilter should make a new object, and then iterate through the passed-in object,
//  using each key as input for the callback. If the output from the callback is equal
//  to the corresponding value, then that key-value pair is copied into the new object.
//  objFilter will return this new object.

//create a function named objFilter its going to have two parameters object and callback
// this functions output should be an object
// the object parameter needs to looped - for in and its keys should be the arguments
// for the callback(key)
// if statement - if the callback(key) === object[key]
// then the obj[key] = object[key]
// return object

// function objFilter(object, callback) {
// 	const obj = {};
// 	for (let key in object) {
// 		if (callback(key) === object[key]) {
// 			obj[key] = object[key];
// 		}
// 	}
// 	return obj;
// }
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // // should log: { 2: 1, 6: 3 }

// Create a function rating that accepts an array (of functions) and a value.
// All the functions in the array will return true or false. rating should return
// the percentage of functions from the array that return true when the value is used
// as input.

// create a function named rating
// in this function it needs to take in two parameters
// one parameter is going to be an array [func1, func2, func3, func4]
// and the second parameter will just be a value ==> num
//  the output of the functions array will be true or false [true, false, false, true]
// rating should output the percentag of elements that are true
// the value will the argument in each of the array of functions

//ToDo List
// Create a function named rating ==> two parameters (arrCallbacks, value)
// iterate over array of arrCallbacks
// each element of the array will have the value has the value as an argument
// ===> element(value)
// if element(value) === true
//  then sum++
// sum divide by the total elements ==> so arrCallbacks.length
// and then multiply that by 10

// function rating(arrOfFuncs, value) {
// 	let sum = 0;
// 	let avg;
// 	let arrayLength = arrOfFuncs.length;
// 	for (let element of arrOfFuncs) {
// 		let callbacks = element(value);
// 		if (callbacks === true) {
// 			sum++;
// 		}
// 	}

// 	avg = sum / arrayLength;
// 	return avg * 100;
// }
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes('6');
// const checks = [ isEven, greaterThanFour, isSquare, hasSix ];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Create a function pipe that accepts an array (of functions) and a value.
//  pipe should input the value into the first function in the array, and then
//  use the output from that function as input for the second function, and then
//  use the output from that function as input for the third function, and so forth,
//  until we have an output from the last function in the array. pipe should return the
//   final output.

// create a function named pipe and it will have two parameters
// 1st parameter will be an array of functions [func1, func2, func3]
// 2nd will be a value
// the value will be the argument for the array
// its going to pass that return value down the array line
// func1(value) ==> new argument ===> function2(argument)...
// you can pass the argument using reduce
// arrFunc(prev(element(value) ==> curr(prev)))
// iterate through it
// for let element of arrFuncs
// // then callback = element(value)

// function pipe(arrOfFuncs, value) {
// 	let output = value; // declare a variable value
// 	for (let i = 0; i < arrOfFuncs.length; i++) {
// 		// iterate through array
// 		output = arrOfFuncs[i](output); // reassign value to the array at the index and the value
// 		console.log(`OUTPUT: ${output}`);
// 	}
// 	return output;

// 	// return arrOfFuncs.reduce((acc, curr) => curr(acc), value);

// 	if (arrOfFuncs.length === 0) return value;
// 	let output = arrOfFuncs[0](value);
// 	return pipe(arrOfFuncs.slice(1), output);

// 	console.log('OUTPUT*', output3);
// }
// // 	arrOfFuncs.reduce((prev, next, index) => {
// // 		console.log(prev, r);
// // 	});
// // }

// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [ capitalize, addLowerCase, repeat ];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Create a function highestFunc that accepts an object (which will contain functions)
//  and a subject (which is any value). highestFunc should return the key of the object
//  whose associated value (which will be a function) returns the largest number, when the
//   subject is given as input.

// First create a function that you will create two parameters.
// The first parameter is going to accept an object as an argument
// this object is an object of all functions
// the second is going to accept any number/value ==> subject
// Questions
// // How can we get these objects values?
// - Put the values in a variable and invoke the subject on each element
// How will can you find the max value

// output should be the largest number ==> return the key of the max value of the object

// function highestFunc(object, subject) {
// 	let obj = {};
// 	let max;
// 	let newVar;

// 	for (let key in object) {
// 		let values = object[key](subject);

// 		obj[key] = values;
// 		max = Math.max(...Object.values(obj));

// 		if (max === values) {
// 			newVar = key;
// 		}
// 	}
// 	return newVar;
// }

// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Define a function myFunc that takes an array and a callback. myFunc should pass each element
// from the array (in order) into the callback. If the callback returns true, myFunc should
// return the index of the current element. If the callback never returns true, myFunc
// should return -1;

// create a function named myFunc and it will have two parameres array and callback
// loop through array and each element should be placed into the callback
// if callback([i]) === true
// return the index
// if false  return -1

// function myFunc(array, callback) {
// 	let num = -1;
// 	array.forEach((element) => {
// 		if (callback(element) === true) {
// 			num = array.indexOf(element);
// 		} else {
// 			num;
// 		}
// 	});
// 	return num;
// }

// const numbers = [ 2, 3, 6, 64, 10, 8, 12 ];
// const evens = [ 2, 4, 6, 8, 10, 12, 64 ];

// function isOdd(num) {
// 	return num % 2 !== 0;
// }

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Write a function myForEach that accepts an array and a callback function.
// Your function should pass each element of the array (in order) into the callback function.
// The behavior of this function should mirror the functionality of the native .forEach()
// JavaScript array method as closely as possible.

// Create a function named myForEach
// is going to have two parameters who's going to take in
// arguments are going to be an array and a callback
// pass each element in order === iterating through the array(looping)
// then we are going to take the element from the array and place them in the callback
// as arguments. So every time the callback is invoked the element from the array inside will
// will undergo that whats in that functions body ==> argument is then returned as a number
// each iteration will result in a new number
// forEach does:
//  loops
//  the callback will perform task on each element
// it gives you the index of the current value of the array
// the array in which the function was called on
// the return value is undefined

// function myForEach(array, callback) {
// 	for (let i = 0; i < array.length; i++) {
// 		callback(array[i], [ i ], array);
// 	}
// }

// let sum = 0;

// function addToSum(num) {
// 	sum += num;
// }

// const nums = [ 1, 2, 3 ];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6

// Define a function myFunc that takes an array and a callback. myFunc should pass each element
// from the array (in order) into the callback. If the callback returns true, myFunc should
// return the index of the current element. If the callback never returns true, myFunc
// should return -1;

// Create a function and name it myFunc
// its going to have two parameters ==> these parameters will take in an array and callback as arguments
// if callbacks with the element inside invoked returns true
// How can we get the elements and invoke them as arguments in the callback
// loop through array and place the elements inside the callback
// we need the index or we can use forEach(accessing the index) / indexOf
// create a variable num and store -1 ==> have it be reassigned  based on each condition
// then return the index of the current element
// if it returns false ==> then return -1

function myFunc(array, callback) {
	let num = -1;
	array.forEach((element, index) => {
		callback(element) === true ? (num = index) : num;
	});
	return num;
}
const numbers = [ 2, 3, 6, 64, 10, 8, 12 ];
const evens = [ 2, 4, 6, 8, 10, 12, 64 ];

function isOdd(num) {
	return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1
