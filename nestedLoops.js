// We are going to complete a function that takes one parameter, an array of arrays,
// and logs all of its elements (log each element in first inner array, start to end,
// then second inner array, and so on...) to the console. Your function should use a
// nested for loop to log each element from all inner arrays, then return nothing.
// Below is an example of the code running, assuming that you will have completed the
// described function: loopAnArrayOfArrays.

function loopAnArrayOfArrays(arrayOfArrays) {
	// create a loop which iterates over the input array
	for (let i = 0; i < arrayOfArrays.length; i++) {
		// create an inner loop which iterates over current inner array
		for (let j = 0; j < arrayOfArrays[i].length; j++) {
			// log current element to the console
			console.log(arrayOfArrays[i][j]);
		}
	}
}
// loopAnArrayOfArrays([ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]);
// // console output:
// // a
// // b
// // c
// // d
// // e
// // f

// loopAnArrayOfArrays([ [ 1, 2 ], [ 3, 4 ], [ 5 ], [ 6, 7, 8 ] ]);
// // console output:
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8

// Nested For-in Loop
// Let us consider the case of wanting to loop over an object (or more than one), inside of our
// looping over another object We can so do using a nested for-in loop

// var nestedObject = {
// 	inner1: { a: 1, b: 2, c: 3 },
// 	inner2: { d: 4, e: 5, f: 6 },
// 	inner3: { g: 7, h: 8, i: 9 }
// };

// for (var key in nestedObject) {
// 	for (var innerKey in nestedObject[key]) {
// 		console.log(nestedObject[key][innerKey]);
// 	}
// 	console.log('end of inner loop');
// }
// console.log('end of outer loop');

// We are going to complete a function that takes one parameter, a object of objects,
// and logs all of its values (log each value in first inner object, one at a time, then
// second inner object, and so on...) to the console. Your function should use a nested for-in
// loop to log each value from all inner objects, then return nothing. Below is an example
// of the code running, assuming that you will have completed the described function: loopAnObjectOfObjects.

function loopAnObjectOfObjects(nestedObject) {
	// create a loop which iterates over the input object
	for (let outerObject in nestedObject) {
		// create an inner loop which iterates over current inner object
		for (let innerObject in nestedObject[outerObject]) {
			// log current value to the console
			console.log(nestedObject[outerObject][innerObject]);
		}
	}
}

// loopAnObjectOfObjects({ a: { a: 1, b: 2 }, b: { a: 5, b: 6 } });
// // console output:
// // 1
// // 2
// // 5
// // 6

// loopAnObjectOfObjects({
// 	structures: { queue: true, stack: false },
// 	plantLife: { tree: 'leaves' },
// 	letters: { apple: 'a', bag: 'b', cats: 'c' }
// });
// // console output:
// // true
// // false
// // leaves
// // a
// // b
// // c

// Nested Mixed Loop (1)
// Let us consider the case of wanting to loop over an object (or more than one),
// inside of our looping over an array
// We can so do using a for-in loop nested inside of a for loop

// var arrayOfObjects = [ { a: 1, b: 2, c: 3 }, { d: 4, e: 5, f: 6 }, { g: 7, h: 8, i: 9 } ];

// for (var i = 0; i < arrayOfObjects.length; i++) {
// 	for (var key in arrayOfObjects[i]) {
// 		console.log(arrayOfObjects[i][key]);
// 	}
// }

// We are going to complete a function that takes one parameter, a array of objects,
// and logs all of its values (log each value in first inner object, one at a time,
// then second inner object, and so on...) to the console. Your function should use a for-in
// loop nested inside of a for loop to log each value from all inner objects, then return nothing.
// Below is an example of the code running, assuming that you will have completed the described function:
// loopAnArrayOfObjects.

function loopAnArrayOfObjects(arrayOfObjects) {
	// create a loop which iterates over the input array
	for (let i = 0; i < arrayOfObjects.length; i++) {
		// create an inner loop which iterates over current inner object
		for (let innerObject in arrayOfObjects[i]) {
			// log current value to the console
			console.log(arrayOfObjects[i][innerObject]);
		}
	}
}

loopAnArrayOfObjects([ { a: 1, b: 2 }, { z: 5, y: 6 }, { q: 14 } ]);
// console output:
// 1
// 2
// 5
// 6
// 14

loopAnArrayOfObjects([ { queue: false, stack: true }, { fish: 'swims' }, { shirt: 's', pop: 'p', eye: 'e' } ]);
// console output:
// false
// true
// swims
// s
// p
// e
