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
// Write a function called "countWords".
// Given a string (words separated by spaces), "countWords" returns an object where
// each key is a word in the given string, with its value being how many times that
// word appeared in the given string. If given an empty string, your function should
// return an empty object.

function countWords(stringOfWords) {
	// EDGE CASE:
	// if the string of words is empty
	if (stringOfWords === '') {
		// then return empty object
		return {};
	}
	// create a wordMap --> just an empty object
	const wordMap = {};
	// iterate through the string of words convert to array by spaces
	for (let word of stringOfWords.split(' ')) {
		// wordMap with the element as a key has a value
		// then add one to that value or assign 1 to the value
		wordMap[word] = wordMap[word] + 1 || 1;
	}
	// return object
	return wordMap;
}

// var result1 = countWords('ask a bunch get a bunch');
// console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

// var result2 = countWords('');
// console.log('should log "{}":', result2);

function countAllCharacters(string) {
	// EDGE CASE:
	// if the string is empty
	if (string === '') {
		// return an empty object {}
		return {};
	}
	// create an empty object this will be the charMap
	const charMap = {};
	// iterate through the string,
	// but convert string into and array using split and split by no space
	for (let char of string.split('')) {
		// assign the value of the charMap - if it exist then add one to the value
		// or if value doesn't exist set value to one
		charMap[char] = charMap[char] + 1 || 1;
	}
	// return object
	return charMap;
}

// Write a function called "countAllCharacters".
// Given a string of characters, "countAllCharacters" returns an object where each key
// is a character in the given string, with its value being how many times that character
// appeared in the given string. If given an empty string, your function should return
// an empty object.
function countAllCharacters(string) {
	// EDGE CASE:
	// if the string is empty
	if (string === '') {
		// return an empty object {}
		return {};
	}
	// create an empty object this will be the charMap
	const charMap = {};
	// iterate through the string,
	// but convert string into and array using split and split by no space
	for (let char of string.split('')) {
		// assign the value of the charMap - if it exist then add one to the value
		// or if value doesn't exist set value to one
		charMap[char] = charMap[char] + 1 || 1;
	}
	// return object
	return charMap;
}

// var result1 = countAllCharacters('banana');
// console.log('should log "{b: 1, a: 3, n: 2}":', result1);

// var result2 = countAllCharacters('');
// console.log('should log "{}":', result2);

function addFullNameProperty(obj) {
	// your code here
	let firstName = obj.firstName;
	let lastName = obj.lastName;
	obj['fullName'] = firstName + ' ' + lastName;
}
// Write a function called "isPersonOldEnoughToDrive".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive"
// returns whether the given person is old enough to drive.
// Notes:
// The legal driving age in the United States is 16.

function isPersonOldEnoughToDrive(person) {
	// access the property of the object person.age
	let age = person['age'];
	// if age is greater than or equal to 16
	if (age >= 16) {
		// then return true;
		return true;
		// otherwise..
	} else {
		// return false;
		return false;
	}
}
// var obj = {
// 	age: 16
// };
// var output = isPersonOldEnoughToDrive(obj);
// console.log(output); // --> true

// Write a function called "isPersonOldEnoughToVote".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote"
// returns whether the given person is old enough to vote.
// Notes:
// The legal voting age in the United States is 18.

function isPersonOldEnoughToVote(person) {
	// create a variable age to access the object age property
	let age = person.age;
	// if age is greater than or equal to 18
	if (age >= 18) {
		// then return true
		return true;
	} else {
		// otherwise..
		// return false
		return false;
	}
}
var obj = {
	age: 19
};
// var output = isPersonOldEnoughToVote(obj);
// console.log(output); // --> true

// Write a function called "addArrayProperty".
// Given an object, a key, and an array, "addArrayProperty" sets a new property on the
//  object at the given key, with its value set to the given array.

function addArrayProperty(obj, key, arr) {
	// object at the key reassign value to arr
	obj[key] = arr;
	// return arr
	return obj;
}
// var myObj = {};
// var myArray = [ 1, 3 ];
// addArrayProperty(myObj, 'myProperty', myArray);
// console.log(myObj.myProperty); // --> [1, 3]

// Write a function called "removeArrayValues".
// Given an object, "removeArrayValues" removes any properties whose values are arrays.

function removeArrayValues(obj) {
	// iterate over the obj to get its keys
	for (let key in obj) {
		// if the value is an array - Array.isArray(obj[key)) === true
		if (Array.isArray(obj[key]) === true) {
			// then delete obj[key]
			delete obj[key];
		}
	}
	// return obj;
	return obj;
}

var obj = {
	a: [ 1, 3, 4 ],
	b: 2,
	c: [ 'hi', 'there' ]
};
// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }

// Write a function called "removeNumberValues".
// Given an object, "removeNumberValues" removes any properties whose values are numbers.

function removeNumberValues(obj) {
	// iterate through the obj to get the key
	for (let key in obj) {
		// if typeof obj[key] equals 'number'
		if (typeof obj[key] === 'number') {
			// then delete obj[key]
			delete obj[key];
		}
	}
	// return obj;
	return obj;
}
// var obj = {
// 	a: 2,
// 	b: 'remaining',
// 	c: 4
// };
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }

// Write a function called "removeStringValues".
// Given an object, "removeStringValues" removes any properties on the given object
//  whose values are strings.

function removeStringValues(obj) {
	// your code here
	// iterate though obj to get the key
	for (let key in obj) {
		// if typeof obj[key] equals 'string'
		if (typeof obj[key] === 'string') {
			// then delete obj[key]
			delete obj[key];
		}
	}
	// return obj;
	return obj;
}

// var obj = {
// 	name: 'Sam',
// 	age: 20
// };
// removeStringValues(obj);
// console.log(obj); // { age: 20 }

// Write a function called "removeNumbersLessThan".
// Given a number and an object, "removeNumbersLessThan" removes any properties whose
// values are numbers less than the given number.

function removeNumbersLessThan(num, obj) {
	// iterate through the obj to get the keys
	for (let key in obj) {
		// if  typeof obj[key] equals 'number' and obj[key] < num
		if (typeof obj[key] === 'number' && obj[key] < num) {
			// delete obj[key]
			delete obj[key];
		}
	}
	// return obj
	return obj;
}

// var obj = {
// 	a: 8,
// 	b: 2,
// 	c: 'montana'
// };
// removeNumbersLessThan(5, obj);
// console.log(obj); // --> { a: 8, c: 'montana' }

// Write a function called "removeStringValuesLongerThan".
// Given an number and an object, "removeStringValuesLongerThan" removes any properties
// on the given object whose values are strings longer than the given number.

function removeStringValuesLongerThan(num, obj) {
	// iterate through the obj to get key
	for (let key in obj) {
		// if typeof obj[key] = 'string' and obj[key].length > num
		if (typeof obj[key] === 'string' && obj[key].length > num) {
			// delete obj[key]
			delete obj[key];
		}
	}
	// return obj
	return obj;
}
// var obj = {
// 	name: 'Montana',
// 	age: 20,
// 	location: 'Texas'
// };
// removeStringValuesLongerThan(6, obj);
// console.log(obj); // { age: 20, location: 'Texas' }

// Write a function called "getElementsThatEqual10AtProperty".
// Given an object and a key, "getElementsThatEqual10AtProperty" returns an array
// containing all the elements of the array located at the given key that are equal to ten.
// Notes:
// If the array is empty, it should return an empty array.
// If the array contains no elements that are equal to 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.

function getElementsThatEqual10AtProperty(obj, key) {
	// if obj[key] === undefined
	if (obj[key] === undefined) {
		// return []
		return [];
	}
	// if Array.isArray(obj[key])
	if (Array.isArray(obj[key]) === false) {
		// then return []
		return [];
	}
	// if the obj[key] is empty
	if (obj[key].length === 0) {
		// then return []
		return [];
	}
	// create newArr and assign it to []
	const result = [];
	// iterate through obj[key]
	for (let i = 0; i < obj[key].length; i++) {
		// if the element === 10
		if (obj[key][i] === 10) {
			// push element into newArr

			result.push(obj[key][i]);
		}
	}
	// return newArr;
	return result;
}
var obj = {
	key: [ 1000, 10, 50, 10 ]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
