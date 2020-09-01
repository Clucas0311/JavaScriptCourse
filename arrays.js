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
