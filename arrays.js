// We are going to complete a function that takes three parameters, an array,
// a numerical index, a newValue, and returns the array after performing a reassignment.
// Your function should reassign the element within the array, located at the numerical
// index, to the new input value, and should then return the newly changed array. Below
// is an example of the code running, assuming that you will have completed the described
// function: reassignAnElement.

function reassignAnElement(array, index, newValue) {
	// reassign the value in the array, located at the index, to the newValue parameter
	array[index] = newValue;
	// return the input array
	return array;
}
// We are going to complete a function that takes in one parameter, an array,
// and returns the length of that array. Your function should create a variable
// and assign it to the length of the input array using the .length property,
// and return that variable. Below are examples of the code running, assuming
// that you will have completed the described function: getArrayLength.

function getArrayLength(array) {
	// create a length variable
	let length;
	// assign it to the length of the array
	length = array.length;
	// return the length variable
	return length;
}
// Last Element of an array...
// We are going to complete a function that takes in one parameter,
// an array, and returns the input array's last element.
// Your function should determine the length of the input array minus
// 1, and assign it to a lastIndex variable. Your function should also
// create a lastElement variable and assign it to an expression which uses
// lastIndex to access the last element in the array, and return the lastElement
// variable. Below are examples of the code running, assuming that you will have
// completed the described function: getLastElement.

function getLastElement(array) {
	// create a lastIndex variable
	let lastIndex;
	// assign it to the last index in the array
	lastIndex = array.length - 1;
	// create a lastElement variable
	let lastElement;
	// assign it to the last element in the string (make use of lastIndex)
	lastElement = array[lastIndex];
	// return the lastElement variable
	return lastElement;
}
// We are going to complete a function that takes in two parameters,
// an array and an element, adds the element to the end of the array,
// and returns the array. Your function should use the .push() method
// to add the input element to the end of the input array, then return
// that array. Below are examples of the code running, assuming that you
// will have completed the described function: applyPush.

function applyPush(array, element) {
	// add the element to the back of the array
	array.push(element);
	// return the array
	return array;
}

// Removing an Element from the back of an Array
// Let us consider the case of wanting to remove an element from the back of
// an existing array
// We can do so using the .pop() method:

// We are going to complete a function that takes in one parameter, an array,
// removes the last element from the back of the array, and returns the removed
// element. Your function should create a popped variable, assign it to an expression
// using the .pop() method to remove the last element from the array, then return that
// popped variable. Below are examples of the code running, assuming that you will have
// completed the described function: applyPop.

function applyPop(array) {
	// create a popped variable
	let popped;
	// assign it to an expression removing the last element from the array
	popped = array.pop();
	// return the popped variable
	return popped;
}

// Adding an Element to the front of an Array
// Let us consider the case of wanting to add an element to the front of an
// existing array We can do so using the .unshift() method:

// We are going to complete a function that takes in two parameters,
// an array and an element, adds the element to the front of the array,
// and returns the array. Your function should use the .unshift() method to
// add the input element to the front of the input array, then return that array.
// Below are examples of the code running, assuming that you will have completed
// the described function: applyUnshift

function applyUnshift(array, element) {
	// add the element to the front of the array
	array.unshift(element);
	// return the array
	return array;
}

// Removing an Element from the front of an Array
// Let us consider the case of wanting to remove an
// element from the front of an existing array
// We can do so using the .shift() method:

// We are going to complete a function that takes in one parameter, an array,
// removes the first element from the front of the array, and returns the removed
//  element. Your function should create a shifted variable, assign it to an expression
//  using the .shift() method to remove the first element from the array, then return that
// shifted variable. Below are examples of the code running, assuming that you will have
// completed the described function: applyShift.

function applyShift(array) {
	// create a shifted variable
	let shifted;
	// assign it to an expression removing the first element from the array
	shifted = array.shift();
	// return the shifted variable
	return shifted;
}

// Adding an Element in General (.splice (a))
// Let us consider the case of wanting to add an element, without replacing
// anything, to an existing array Let us further consider that we do not want to
// add the element to the back or the front, as we have done thus far
// We can do so using the .splice() method:

// splice(starting index, delete count, elements to add to array)

function addAnElementInGeneral(array, index, element) {
	// add the element to the array at the index given
	array.splice(index, 0, element);
	// (be sure not to replace any existing elements)
	// return the array
	return array;
}

// Let us consider the case of wanting to remove an element from an existing array
// Let us further consider that we do not want to remove the element from the back
// or the front, as we have done thus far We can do so using the .splice() method:

// We are going to complete a function that takes in two parameters,
// an array and an index, removes the element from the index of the array,
// and returns the array. Your function should use the .splice() method to
// remove the element from the input array, at the given index, then return the
// array. Below are examples of the code running, assuming that you will have completed
// the described function: removeAnElementInGeneral.

function removeAnElementInGeneral(array, index) {
	// remove the element from the array at the index given
	array.splice(index, 1);
	// return the array
	return array;
}

// Let us consider the case of wanting to remove a certain number of elements from an
// index in an existing array, and add another certain number of elements, in the
// same place, to the same array We can do so using the .splice() method:

// We are going to complete a function that takes in four parameters, an array,
// an index, and two new elements, removes 2 elements, beginning at the index,
// adds the two new elements, and returns the array. Your function should use the
// .splice() method to remove two elements from the input array, at the given index,
// adds the two new elements in their place, then return the array. Below are examples
// of the code running, assuming that you will have completed the described function:
// applySplice.

function applySplice(array, index, item1, item2) {
	// remove two elements from the array at the index given, and adds item1 and item2 in their place
	array.splice(index, 2, item1, item2);
	// return the array
	return array;
}

// Determining if a value is an Array
// Let us consider the case of wanting to determine if a value is an array
// We can do so using the Array.isArray() method:

// We are going to complete a function that takes in one parameter,
// possibly an array, and returns whether the input in an array or not.
// Your function should create a variable, assign it to an expression that
// tells whether the input parameter is an array or not, using the Array.isArray()
// method, then return that variable. Below are examples of the code running, assuming
// that you will have completed the described function: isAnArray.

function isAnArray(input) {
	// create a result variable
	let result;
	// assign it to a call to the applicable method
	result = Array.isArray(input);
	// return the result variable
	return result;
}

// Slicing a portion of an Array (and making a copy)
// Let us consider the case of wanting a specific section of an existing array, or:
// The case of wanting to make a copy of an existing array
// In both cases, let us further consider that we do not wish to alter the original array
// We can do so using the .slice() method:

// We are going to complete a function that takes in three parameters, an array and two
// integer indexes (start, end), and returns a portion of the array from before the
// start index up to, but not including, the end index. Your function should create a
// sliceOfArray variable and assign it to a call to the slice method on the array,
// starting from before start, up to, but not including, end, and return the sliceOfArray
// variable. Below are examples of the code running, assuming that you will have completed
// the described function: applySlice.

function applySlice(array, start, end) {
	// create a sliceOfArray variable
	let sliceOfArray;
	// assign it to a portion of the array from before start, up to, but not including end
	sliceOfArray = array.slice(start, end);
	// return the sliceOfArray variable
	return sliceOfArray;
}

// We are going to complete a function that takes in one array parameter,
//  and returns a copy of the array. Your function should create a copyOfArray
//  variable and assign it to a call to the slice method on the array which will
//  make a copy, and return the copyOfArray variable. Below are examples of the
//  code running, assuming that you will have completed the described function:
//  makeACopy.

function makeACopy(array) {
	// create a copyOfArray variable
	let copyOfArray;
	// assign it to a copy of the array
	copyOfArray = array.slice();
	// return the copyOfArray variable
	return copyOfArray;
}

// Adding the contents of an Array to another Array
// Let us consider the case of wanting to add the contents of one array to another array
// Let us further consider that we do not wish to affect either original array
// We can do so using the .concat() method

// We are going to complete a function that takes in two array parameters, and returns
//  an array containing all of the elements of the two input arrays. Your function
//  should create a concattedArray variable and assign it to a call to the concat
//  method on the input array, applied to the other input array, and return the
//  concattedArray variable. Below are examples of the code running, assuming that you
//  will have completed the described function: applyConcat.
function applyConcat(array1, array2) {
	// create a concattedArray variable
	let concattedArray;
	// assign it to the contents of both array1 and array2
	concattedArray = array1.concat(array2);
	// return the concattedArray variable
	return concattedArray;
}
