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

function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

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

const array = [ 4, 5, 6, 7, 8 ];
console.log(mapWith(array, (num) => num * 3)); // [12, 15, 18, 21, 24]
