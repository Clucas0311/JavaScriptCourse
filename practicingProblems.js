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

// function intersection(array) {
// 	return array.reduce((prev, next) => prev.filter((element) => next.includes(element)));
// }

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

function objectFilter(obj, callback) {
	const newObject = {};
	for (let key in obj) {
		let prop = obj[key];
		if (prop === callback(prop)) {
			newObject[key] = callback(prop);
		}
	}
	return newObject;
}
const cities = {
	London: 'LONDON',
	LA: 'Los Angeles',
	Paris: 'PARIS'
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));
