// We are going to complete a function that takes no parameters,
// and returns a newly created object. Your function should create a
// variable and assign it to a new object, then return that variable.
//  Below is an example of the code running, assuming that you will have
//  completed the described function: createObject
function createObject() {
	// create a result variable,
	let result;
	// assign it to a new object
	result = {};
	// return the result variable
	return result;
}
// We are going to complete a function that takes two parameters, an object and a
// string key, and returns the value for a property in the object located at the
// string key. Your function should create a variable and assign it to an expression
// which accesses the value of the property located at the string key, then return
// that variable. Below is an example of the code running, assuming that you will
// have completed the described function: accessAProperty.
function accessAProperty(object, key) {
	// create a result variable,
	let result;
	// assign it to an expression that accesses the property in the object located at the key
	result = object[key];
	// return the result variable
	return result;
}

// We are going to complete a function that takes three parameters,
// an object, a string key, and a newValue, and returns the object after
// performing a reassignment. Your function should reassign the property's
// value within the object, located at the string key, to the newValue parameter,
// and should then return the newly changed object. Below is an example of the code
// running, assuming that you will have completed the described function: reassignAProperty.

function reassignAProperty(object, key, newValue) {
	// reassign the property's value in the object, located at the key, to the newValue paramete
	object[key] = newValue;
	// return the input object
	return object;
}

// Removing a Property from an Object
// Let us consider the case of wanting to remove a property from an existing object
// We can do so using the delete operator:

// We are going to complete a function that takes in two parameters,
// an object and an key, removes the property located at the input key from
// the object, and returns the object. Your function should use the delete operator
// to remove the property at the given key from the input object, then return the object.
// Below are examples of the code running, assuming that you will have completed the
// described function: removeAProperty.
function removeAProperty(object, key) {
	// remove the property at the given key from the object
	delete object[key];
	// return the object
	return object;
}
// Checking if a Property is present in an Object
// Let us consider the case of wanting to determine if a property is present
// within an object We can do so by realizing that the value of a property that
// is not present within an object is always undefined Thus, we will access an object
// at the property's key, and check this against undefined
function isPropertyPresent(object, key) {
	// create an isPresent variable
	let isPresent;
	// assign it to a comparison between object's value at key and undefined
	isPresent = object[key] !== undefined;
	// return the isPresent variable
	return isPresent;
}

// Determining if a value is an Object
// Let us consider the case of wanting to determine if a value is an object
// We can do so using the typeof operator, in conjunction with the Array.isArray() method

// We are going to complete a function that takes in one parameter,
// possibly an object, and returns whether the input in an object or not.
// Your function should create several variables (isObject, isNotAnArray,
// and isObjectAndNotAnArray). Assign isObject to an application of the
// typeof operator to the input. Assign isNotAnArray to a call to the Array.isArray()
// method with the ! operator applied as well. Assign isObjectAndNotAnArray to the two
// previous variabes combined with the && operator, and return the isObjectAndNotAnArray
// variable. Below are examples of the code running, assuming that you will have completed the
// described function: isAnObject.

function isAnObject(input) {
	// create an isObject variable
	let isObject;
	// assign it to whether the input is an object type
	isObject = typeof input === 'object';
	// create an isNotAnArray variable
	let isNotAnArray;
	// assign it to whether the input is not an array
	isNotAnArray = !Array.isArray(input);
	// create an isObjectAndNotAnArray variable
	let isObjectAndNotAnArray;
	// assign it to a combination of isObject AND isNotAnArray
	isObjectAndNotAnArray = isObject && isNotAnArray;
	// return the isObjectAndNotAnArray variable
	return isObjectAndNotAnArray;
}

// Generating an array of all keys in an Object Let us consider the case where
// we want to generate an array of all the keys in an object
// We can do so using the Object.keys() method

// We are going to complete a function that takes in one parameter,
// an object. Your function should create a keys variable, and assign
// it to an expression which generates an array of all of the keys in said
// object by calling Object.keys(), then return that keys variable. Below is an
// example of the code running, assuming that you will have completed the described
// function: getAllKeys.

function getAllKeys(obj) {
	// create a keys variable
	let keys;
	// assign it to an expression which will generate an array of all of the keys in obj
	keys = Object.keys(obj);
	// return to the keys variable
	return keys;
}
// Let us consider the case where we want to generate an array of all the values
// in an object We can do so using the Object.values() method

// We are going to complete a function that takes in one parameter, an object.
// Your function should create a values variable, and assign it to an expression
// which generates an array of all of the values in said object by calling
// Object.values(), then return that values variable. Below is an example of the
// code running, assuming that you will have completed the described function:
// getAllValues.

function getAllValues(obj) {
	// create a values variable
	let values;
	// assign it to an expression which will generate an array of all of the values in obj
	values = Object.values(obj);
	// return to the values variable
	return values;
}
