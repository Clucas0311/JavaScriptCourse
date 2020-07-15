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
