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

// const resultBoolean1 = isAnArrayAgain({ key1: [ 1, 2, 3 ], key2: 'gg' }, 'key1');
// console.log('should log true:', resultBoolean1);

// const resultBoolean2 = isAnArrayAgain({ name: 'Tom', friend: 'Jerry' }, 'friend');
// console.log('should log false:', resultBoolean2);

// Method applied to a Nested Object Let us consider the case where we want to generate an
// array of all the keys in an object, nested within another object
// We can do so using the Object.keys() method

// We are going to complete a function that takes in two parameters, an object and a key.
// Your function should create a keys variable, and assign it to an expression which generates
//  an array of all of the keys in the nested object located within the input object, by calling
//   Object.keys(), then return that keys variable. Below is an example of the code running,
//   assuming that you will have completed the described function: getAllKeysAgain.

function getAllKeysAgain(obj, key) {
	// create a keys variable
	let keys;
	// assign it to an expression which will generate an array of all of the keys located within obj at key
	keys = Object.keys(obj[key]);
	// return to the keys variable
	return keys;
}
// var resultKeys = getAllKeysAgain(
// 	{ firstScore: { part1: 12, part2: 14, part3: 10 }, secondScore: 34, thirdScore: 28 },
// 	'firstScore'
// );
// console.log('should log ["par1", "part2", "part3"]:', resultKeys);

// Operator applied to an Object within an Array
// Let us consider the case of wanting to remove a property from an existing object, located within an array
// We can do so using the delete operator:

// We are going to complete a function that takes in three parameters, an array, an index, and an key,
// removes the property specified by the input key, located within an object, located at the given index
// within the input array, and returns the input array. Your function should use the delete operator to
// remove the property specified by the input key, located within an object, located at the given index
// within the input array, and returns the input array. Below are examples of the code running, assuming
// that you will have completed the described function: removeAPropertyAgain.

function removeAPropertyAgain(arrayOfObjects, index, key) {
	// remove the property at the given key from the object at the given index
	delete arrayOfObjects[index][key];
	// return the input array of objects
	return arrayOfObjects;
}

// var resultObject1 = removeAPropertyAgain([ { q: 9, r: 10, text: 'bad entry' }, { a: 1, b: 2 } ], 0, 'text');
// console.log('should log [{q: 9, r: 10}, {a: 1, b: 2}]:', resultObject1);

// var resultObject2 = removeAPropertyAgain(
// 	[ { key: 'value' }, { first: 'one', second: 'two', why: 452, third: 'three' } ],
// 	1,
// 	'why'
// );
// console.log('should log [{key: "value"}, {first: "one", second: "two", third: "three"}]:', resultObject2);
