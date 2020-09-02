// Method applied to a Nested Array Let us consider the case of wanting to add an element to the front
//  of an existing array, which is located inside of another array We can do so using the .unshift() method:

// We are going to complete a function that takes in three parameters, a nested array of arrays,
// an index, and an element, then adds the element to the front of the inner array located at the
// index within the input array of arrays, and returns the array of arrays. Your function should
// use the .unshift() method to add the input element to the front of the inner array located at
// the given index of the array of arrays, then return that array of arrays. Below are examples of
//  the code running, assuming that you will have completed the described function: applyUnshiftAgain.
function applyUnshiftAgain(arrayOfArrays, index, element) {
	// add the element to the front of the inner array within the array of arrays located at the index
	arrayOfArrays[index].unshift(element);
	// return the array of arrays
	return arrayOfArrays;
}
// const resultArray1 = applyUnshiftAgain([ [ 1, 3 ], [ 10, 11 ], [ 9, 4 ] ], 1, 5);
// console.log('should log [ [1, 3], [5, 10, 11], [9, 4] ]:', resultArray1);

// const resultArray2 = applyUnshiftAgain([ [ 'ag', 'bc' ], [ 'ef', 'hi' ] ], 0, 'iq');
// console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);

// Method applied to an Array within an Object Once we get the idea of nesting down, the number of
// combinations are endless For this example, we will consider an array nested within an object
// Let us consider the case of wanting to determine if a value inside of an object is an array
// We can do so using the Array.isArray() method:

// We are going to complete a function that takes in two parameters, one value is an object,
// possibly containing an array, as well as a key in that object, and returns whether the value located
//  at the key is an array or not. Your function should create a variable, assign it to an expression that
//   tells whether the input object's value located at the input key is an array or not, using the
//   Array.isArray() method, then return that created variable. Below are examples of the code running,
//   assuming that you will have completed the described function: isAnArrayAgain.
function isAnArrayAgain(inputObj, key) {
	// create a result variable
	let result;
	// assign it to a call to the applicable method
	result = Array.isArray(inputObj[key]);
	// return the result variable
	return result;
}

const resultBoolean1 = isAnArrayAgain({ key1: [ 1, 2, 3 ], key2: 'gg' }, 'key1');
console.log('should log true:', resultBoolean1);

const resultBoolean2 = isAnArrayAgain({ name: 'Tom', friend: 'Jerry' }, 'friend');
console.log('should log false:', resultBoolean2);
