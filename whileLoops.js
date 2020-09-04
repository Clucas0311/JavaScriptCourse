// What is a While Loop? (From MDN)
// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true
// The condition is evaluated before executing the statement
// Will often be referred to as a "while loop"

function loopASequence(start, end) {
	// create a loop which runs if start is less than or equal to end
	while (start <= end) {
		// log current value of start to console
		console.log(start);
		// increment value of start
		start++;
	}
}

loopASequence(2, 5);
// console output:
// 2
// 3
// 4
// 5

loopASequence(3, 7);
// console output:
// 3
// 4
// 5
// 6
// 7

// Loop over an Array
// Let us consider the case of wanting to look at, or do something, to the elements of an array
// We can do so with a specific while loop
// You will often hear this described as "iterating over the array"

// We are going to complete a function that takes one parameter, an array of elements, and logs all of
// its elements (one at a time) to the console. Your function should use a while loop to log each element
//  from the beginning to the end of the array, then return nothing. Below is an example of the code running,
//  assuming that you will have completed the described function: loopAnArray.

function loopAnArray(array) {
	// create an index variable
	let index = 0;
	// create a loop which iterates over the input array
	while (index < array.length) {
		// log current array element to the console
		console.log(array[index]);
		// increment value of index variable
		index++;
	}
}
// loopAnArray([ 'a', 'b', 'c', 'd' ]);
// // console output:
// // a
// // b
// // c
// // d

// loopAnArray([ 1, 2, 3, 4, 5 ]);
// // console output:
// // 1
// // 2
// // 3
// // 4
// // 5

// Loop over a String
// Let us consider the case of wanting to look at, or do something, to the characters in a string
// We can do so with a specific while loop

// var string = 'I am a String!';
// var index = 0;

// while (index < string.length) {
//   console.log(string[index]);
//   index++;
// }

// We are going to complete a function that takes one parameter, a string of characters,
// and logs all of its characters (one at a time) to the console. Your function should
// use a while loop to log each character from the beginning to the end of the string,
// then return nothing. Below is an example of the code running, assuming that you will have
// completed the described function: loopAString.
function loopAString(string) {
	// create an index variable
	let index = 0;
	// create a loop which iterates over the input string
	while (index < string.length) {
		// log current string character to the console
		console.log(string[index]);
		// increment value of index variable
		index++;
	}
}
loopAString('nodeJS');
// console output:
// n
// o
// d
// e
// J
// S

loopAString('abcd');
// console output:
// a
// b
// c
// d
