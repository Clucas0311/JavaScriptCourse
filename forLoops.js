// What is a For Loop? (From MDN)
// The for statement creates a loop that consists of three optional expressions
// initialization - An expression or variable declaration that evaluated once before the loop begins
// condition - An expression to be evaluated before each loop iteration. If it evaluates to true,
// statement is executed
// final-expression - An expression to be evaluated at the end of each loop iteration
// These expressions are enclosed in parentheses and separated by semicolons
// They are followed by a statement to be executed in the loop
// Will often be referred to as a "for loop"

// Loop over sequence of numbers again
// Let us consider the case of wanting to look at, or do something, to a range of numbers
// We can do so with a specific for loop
// for (var x = 1; x <= 10; x++) {
//   console.log(x);
// }
// We can also do this with variables:

// var endOfRange = 10;

// for (var startOfRange = 1; startOfRange <= endOfRange; startOfRange++) {
//   console.log(startOfRange);
// }

// We are going to complete a function that takes two parameters, both will be integers (start, end),
// and logs to the console, all of the integers starting with start, and ending with end. Your function
// should use a for loop to log each integer from start, up to and including end, then return nothing.
// Below is an example of the code running, assuming that you will have completed the described function:
// loopASequenceAgain.

function loopASequenceAgain(start, end) {
	// create a loop which loops from start to end
	for (start; start <= end; start++) {
		// log current value to console
		console.log(start);
	}
}
// loopASequenceAgain(2, 5);
// // console output:
// // 2
// // 3
// // 4
// // 5

// loopASequenceAgain(3, 7);
// // console output:
// // 3
// // 4
// // 5
// // 6
// // 7

// Loop over an Array Again
// Let us consider the case of wanting to look at, or do something, do the elements of an array
// We can do so with a specific for loop
// This example has more details, for a more robust demonstration
// You will often hear this described as "iterating over the array"

// var numsArray = [ 1, 2, 3, 4, 5 ];

// for (var i = 0; i < numsArray.length; i++) {
// 	console.log('current index:', i);
// 	console.log('current element:', numsArray[i]);
// 	//gives context for when each iteration of loop ends
// 	console.log('==============');
// }

// We are going to complete a function that takes one parameter, an array of elements,
// and logs all of its elements (one at a time) to the console. Your function should use a
// for loop to log each element from the beginning to the end of the array, then return nothing.
// Below is an example of the code running, assuming that you will have completed the described function:
// loopAnArrayAgain.
function loopAnArrayAgain(array) {
	// create a loop which iterates over the input array
	for (let i = 0; i < array.length; i++) {
		// log current array element to the console
		console.log(array[i]);
	}
}
loopAnArrayAgain([ 'a', 'b', 'c', 'd' ]);
// console output:
// a
// b
// c
// d

loopAnArrayAgain([ 1, 2, 3, 4, 5 ]);
// console output:
// 1
// 2
// 3
// 4
// 5
