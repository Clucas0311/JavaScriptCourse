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
// loopAnArrayAgain([ 'a', 'b', 'c', 'd' ]);
// // console output:
// // a
// // b
// // c
// // d

// loopAnArrayAgain([ 1, 2, 3, 4, 5 ]);
// // console output:
// // 1
// // 2
// // 3
// // 4
// // 5

// Loop over a String Again
// Let us consider the case of wanting to look at, or do something, to the characters in a string
// We can do so with a specific for loop
// var string = 'I am a String!';

// for (var i = 0; i < string.length; i++) {
// 	console.log(string[i]);
// }

// We are going to complete a function that takes one parameter, a string of characters,
// and logs all of its characters (one at a time) to the console. Your function should use a
// for loop to log each character from the beginning to the end of the string, then return nothing.
// Below is an example of the code running, assuming that you will have completed the described function:
// loopAStringAgain.

function loopAStringAgain(string) {
	// create a loop which iterates over the input string
	for (let i = 0; i < string.length; i++) {
		// log current string character to the console
		console.log(string[i]);
	}
}
// loopAStringAgain('nodeJS');
// // console output:
// // n
// // o
// // d
// // e
// // J
// // S

// loopAStringAgain('abcd');
// // console output:
// // a
// // b
// // c
// // d

// We are going to complete a function that takes one parameter, an array of elements,
// and logs every other one of its elements, beginning at index 0, to the console.
// Your function should use a loop to log every other element from the beginning,
// skipping every other element, until either end of the array, or one shy of the end
// (depending on odd or even length of the array passed), then return nothing.
// Below is an example of the code running, assuming that you will have completed the described function:
// loopEveryOther.

function loopEveryOther(array) {
	// create a loop which iterates over every other element of the input array
	for (let i = 0; i < array.length; i += 2) {
		// log every other array element to the console
		console.log(array[i]);
	}
}
// loopEveryOther([ 'a', 'b', 'c', 'd' ]);
// // console output:
// // a
// // c

// loopEveryOther([ 1, 2, 3, 4, 5 ]);
// // console output:
// // 1
// // 3
// // 5

// We are going to complete a function that takes two parameters, an array of elements,
// and an index, and logs every element, beginning at the inputted index (one at a time)
// to the console. Your function should use a loop to log every element from the inputted index,
// until the end of the array, then return nothing. Below is an example of the code running,
// assuming that you will have completed the described function: loopStartingAtIndex.
function loopStartingAtIndex(array, index) {
	// create a loop which iterates from index to the end of the input array
	for (let i = index; i < array.length; i++) {
		// log current array element to the console
		console.log(array[i]);
	}
}
loopStartingAtIndex([ 'a', 'b', 'c', 'd', 'e' ], 2);
// console output:
// c
// d
// e

loopStartingAtIndex([ 1, 2, 3, 4, 5 ], 3);
// console output:
// 4
// 5
