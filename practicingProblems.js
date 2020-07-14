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

function map(array, callback) {
	const newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(callback(array[i]));
	}
	return newArr;
}
const arr = [ 1, 2, 3, 4, 5 ];
console.log(map(arr, (num) => num * 2));
