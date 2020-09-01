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
