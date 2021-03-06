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

// Transforming an Array into a String
// Let us consider the case of wanting to transform an array into a string
// We can do so using the .join() method

// We are going to complete a function that takes in one array parameter
// (elements will be strings), and one string parameter, and returns a string
// that is the result of joining the elements of the string together, separated
// by the string parameter. Your function should create a joinedString variable
// and assign it to a call to the .join() method, and return the joinedString variable.
//  Below are examples of the code running, assuming that you will have completed the
//  described function: applyJoin.

function applyJoin(arrayOfStrings, string) {
	// create a joinedString variable
	let joinedString;
	// assign it to a string which is all of the strings in the input array separated by the input string
	joinedString = arrayOfStrings.join(string);
	// return the joinedString variable
	return joinedString;
}

// Using the indexOf Method on an Array
// Let us consider the case of wanting to determine where in an array we can find a
// particular element
// We can do so using the .indexOf() method for string

// We are going to complete a function that takes in two parameters (array, element),
// and returns the index of the array where the element can be found. Your function
// should create an index variable and assign it to a call of the indexOf() method on
// the array, and passing element as an argument, and return the index variable.
// Below are examples of the code running, assuming that you will have completed the
// described function: applyIndexOfToArray.

// Transforming a String into an Array
// Let us consider the case of wanting to transform a string into an array
// We can do so using the .split() method

function applySplit(stringToBeSplit, splitter) {
	// create a splitString variable
	let splitString;
	// assign it to an array which contains the elements in the stringToBeSplit separated by the splitter
	splitString = stringToBeSplit.split(splitter);
	// return the splitString variable
	return splitString;
}

// Let us consider the case of wanting to determine where in an array
// we can find a particular elementWe can do so using the .indexOf() method for string

// We are going to complete a function that takes in two parameters
// (array, element), and returns the index of the array where the element
// can be found. Your function should create an index variable and assign
// it to a call of the indexOf() method on the array, and passing element
// as an argument, and return the index variable. Below are examples of the
// code running, assuming that you will have completed the described function:
// applyIndexOfToArray.

function applyIndexOfToArray(array, element) {
	// create an index variable
	let index;
	// assign it to the index inside of array where element can be found
	index = array.indexOf(element);
	// return the index variable
	return index;
}

// Write a function called "getNthElement".
// Given an array and an integer, "getNthElement" returns the element at the given integer,
// within the given array.
// Notes:
// If the array has a length of 0, it should return 'undefined'.

function getNthElement(array, n) {
	// EDGE CASE
	// if the array length equals zero
	if (array.length === 0) {
		// the return undefined
		return undefined;
	}
	// return the array at the index of n
	return array[n];
}
// var output = getNthElement([ 1, 3, 5 ], 1);
// console.log(output); // --> 3

// Write a function called "getFirstElement".
// Given an array, "getFirstElement" returns the first element of the given array.
// Notes:
// If the given array has a length of 0, it should return undefined.

function getFirstElement(array) {
	// EDGE CASE
	// if the array's length is equal to zero
	if (array.length === 0) {
		// then return undefined
		return undefined;
	}
	// iterate through the array
	for (let i = 0; i < array.length; i++) {
		// return array at index of 0
		return array[0];
	}
}
// var output = getFirstElement([ 1, 2, 3, 4, 5 ]);
// console.log(output); // --> 1

// Write a function called "addToFront".
// Given an array and an element, "addToFront" adds the given element to
// the front of the given array, and returns the given array.
// Notes:
// It should be the SAME array, not a new array.
// In order to do this you should be familiar with the 'unshift' method.

function addToFront(arr, element) {
	// your code here
	// return arr unshift the element
	arr.unshift(element);
	return arr;
}

// var output = addToFront([ 1, 2 ], 3);
// console.log(output); // -> [3, 1, 2]

// Write a function called "addToFrontOfNew".
// Given an array and an element, "addToFrontOfNew" returns a new array containing
// all the elements of the given array, with the given element added to the front.
// Important: It should be a NEW array instance, not the original array instance.

function addToFrontOfNew(arr, element) {
	// make a copy using slice assign to a newArr
	const copyArr = arr.slice();
	//   newArr assigned to arr unshift(element)
	copyArr.unshift(element);
	// return newArr
	return copyArr;
}
// var input = [ 1, 2 ];
// var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); // --> [1, 2]

// Write a function called "computeProductOfAllElements".
// Given an array of numbers, "computeProductOfAllElements" returns the
// products of all the elements in the given array.
// Notes:
// If given array is empty, it should return 0.

function computeProductOfAllElements(arr) {
	//if arr length is zero
	if (arr.length === 0) {
		// then return 0
		return 0;
	}
	// use reduce with the starting point = 0
	return arr.reduce((prev, next) => {
		return prev * next;
	});
	// add the acc + currentVal and return it
}

// var output = computeProductOfAllElements([ 2, 5, 6 ]);
// console.log(output); // --> 60

// Write a function called "getLengthOfShortestElement".
// Given an array, "getLengthOfShortestElement" returns the length of the shortest
// string in the given array.

function getLengthOfShortestElement(arr) {
	// EDGE CASE:
	// if the arr length is 0
	if (arr.length === 0) {
		// return 0
		return 0;
	}
	// create a variable min assign it to a value of 0
	let min = arr[0];
	// iterate through the arr to get the element
	for (let i = 1; i < arr.length; i++) {
		// if the element length is less than min
		if (arr[i].length < min.length) {
			// reassign min to to element.length
			min = arr[i];
		}
	}
	// return min
	return min.length;
}

// var output = getLengthOfShortestElement([ 'one', 'two', 'three' ]);
// console.log(output); // --> 3

// Write a function called "getLongestElement".
// Given an array, "getLongestElement" returns the longest string in the given array.
// Notes:
// If there are ties, it returns the first element to appear.
// If the array is empty, it should return an empty string.

function getLongestElement(arr) {
	// if the arr length is 0
	if (arr.length === 0) {
		// return ''
		return '';
	}
	// create a variable max assign it to the first element of arr
	let max = arr[0];
	// iterate through the arr
	for (let i = 1; i < arr.length; i++) {
		// if the element length is > than max length
		if (arr[i].length > max.length) {
			// reassign max to element
			max = arr[i];
		}
	}
	// return max
	return max;
}
// var output = getLongestElement([ 'one', 'two', 'three' ]);
// console.log(output); // --> 'three'

// Write a function called "findSmallestElement".
// Given an array of numbers, "findSmallestElement" returns the smallest number
// within the given array.
// Notes:
// If the given array is empty, it should return 0.

function findSmallestElement(arr) {
	// EDGE CASE:
	// if the arr length is zero
	if (arr.length === 0) {
		// return 0
		return 0;
	}
	// return Math.min(...arr)
	let min = arr[0];
	//iterate through the arr for the element
	for (let element of arr) {
		if (element < min) {
			// reassign min
			min = element;
		}
	}
	// return min
	return min;
}

// var output = findSmallestElement([ 4, 1, 9, 10 ]);
// console.log(output); // --> 1

// Write a function called "removeElement".
// Given an array of elements, and a "discarder" parameter, "removeElement"
// returns an array containing the items in the given array that do not match the
// "discarder" parameter.
// Notes:
// If all the elements match, it should return an empty array.
// If an empty array is passed in, it should return an empty array.

function removeElement(array, discarder) {
	// if the array is empty
	if (array.length === 0) {
		// then return []
		return [];
	}
	// create an empty array assign to result variable
	const result = [];
	// iterate through the array
	for (let element of array) {
		// if element doesn't equal discarder
		if (element !== discarder) {
			// push elements into result array
			result.push(element);
		}
	}
	// return result array
	return result;
}

// var output = removeElement([ 1, 2, 3, 2, 1 ], 2);
// console.log(output); // --> [1, 3, 1]

// Write a function called "joinArrayOfArrays".
// Given an array of arrays, "joinArrayOfArrays" returns a single array containing
// the elements of the nested arrays.

function joinArrayOfArrays(arr) {
	// create a result array
	let result = [];
	// iterate through the first array to get array element
	for (let i = 0; i < arr.length; i++) {
		// reassign the result to the concat
		result = result.concat(arr[i]);
	}
	// return result;
	return result;
}

// var output = joinArrayOfArrays([ [ 1, 4 ], [ true, false ], [ 'x', 'y' ] ]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']

// Write a function called "findSmallestNumberAmongMixedElements".
// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns
// the smallest number within the given array.
// Notes:
// If the given array is empty, it should return 0.
// If the array contains no numbers, it should return 0.

function findSmallestNumberAmongMixedElements(arr) {
	// if the array is empty
	if (arr.length === 0) {
		// then return 0
		return 0;
	}
	// filter through array to get the number elements
	let num = arr.filter((number) => {
		// if the element is a number
		if (typeof number === 'number') {
			// then return number
			return number;
		}
	});
	// if num array is empty
	if (num.length === 0) {
		// return 0
		return 0;
	}
	// create a variable shortest assign to the value of 0
	let shortest = num[0];
	// iterate through the array of numbers
	for (let i = 0; i < num.length; i++) {
		// if the element is less than shortest
		if (num[i] < shortest) {
			// then reassign shortest to element
			shortest = num[i];
		}
	}
	// return shortest
	return shortest;
}
// var output = findSmallestNumberAmongMixedElements([ 4, 'lincoln', 9, 'octopus' ]);
// console.log(output); // --> 4

// Write a function called "getLongestWordOfMixedElements".
// Given an array of mixed types, "getLongestWordOfMixedElements" returns the
// longest string in the given array.
// Notes:
// If the array is empty, it should return an empty string ("").
// If the array contains no strings; it should return an empty string.

function getLongestWordOfMixedElements(arr) {
	// if the arr is empty
	if (arr.length === 0) {
		// return ''
		return '';
	}
	// filter out the array for all string elements
	let string = arr.filter((word) => {
		// if word is a string
		if (typeof word === 'string') {
			// then return word
			return word;
		}
	});
	// if string is empty
	if (string.length === 0) {
		// return ''
		return '';
	}
	// create longest variable set to 0
	let longest = 0;
	// iterate through the string array
	for (let i = 0; i < string.length; i++) {
		// if element length is greater than max
		if (string[i].length > longest) {
			// reassign max to to element
			longest = string[i];
		}
	}
	// return longest
	return longest;
}
// var output = getLongestWordOfMixedElements([ 3, 'word', 5, 'up', 3, 1 ]);
// console.log(output); // --> 'word'

function flipPairs(string) {
	var newString = [];
	for (var i = 0; i < string.length; i += 2) {
		//console.log(string[i]);
		newString.push(string[i + 1], string[i]);
		console.log(newString);
	}
	return newString.join('');
}

// console.log(flipPairs('check out how interesting this problem is'));

var findMaxConsecutiveOnes = function(nums) {
	// create a variable named count set it equal to zero
	let largestCount = 0;
	let currentCount = 0;
	// iterate through the array
	for (let element of nums) {
		// if the element equals 1
		if (element === 0) {
			// then assign currentCount to zero;
			currentCount = 0;
		} else {
			currentCount++;
			console.log(currentCount);
		}
		// if the currentCount is larger than largestCount
		if (currentCount > largestCount) {
			// then reassign the value of largestCount to currentCount
			largestCount = currentCount;
		}
	}
	// return largestCount
	return largestCount;
};

// console.log(findMaxConsecutiveOnes([ 1, 1, 0, 1, 1, 1 ]));

var findNumbers = function(nums) {
	// create a evenDigits array to push elements into
	const evenDigits = [];
	// iterate through nums
	for (let element of nums) {
		// if the element.toString().length is even
		if (element.toString().length % 2 === 0) {
			// then push into evenDigits array
			evenDigits.push(element);
		}
	}
	// return evenDigits array and get the length of it
	return evenDigits.length;
};
// console.log(findNumbers((nums = [ 12, 345, 2, 6, 7896 ]))); // 2;

var sortedSquares = function(A) {
	// create an empty array variable
	const squaredArray = [];
	// iterate through the array
	for (let element of A) {
		// push into the array each element squared
		squaredArray.push(element ** 2);
	}
	// return the squared array sorted
	console.log(squaredArray);
	return squaredArray.sort((a, b) => a - b);
};

// console.log(sortedSquares([ -4, -1, 0, 3, 10 ]));

var duplicateZeros = function(arr) {
	// iterate through the array
	for (let i = 0; i < arr.length; i++) {
		// if the element equals zero
		if (arr[i] === 0) {
			// then arr.splice(index, 0, 0)
			arr.splice(i, 0, 0);
			i++;
			arr.pop();
		}
	}
};

function countUniqueValues(arr) {
	// EDGE CASE:
	// if the arr is empty
	if (arr.length === 0) {
		// then return 0
		return 0;
	}
	// create a variable for the index of first pt
	let i = 0;
	// iterate through arr starting at index 1
	for (let j = 1; j < arr.length; j++)
		// if arr[i]  doesn't equal arr[j]
		if (arr[i] !== arr[j]) {
			// then increment i
			i++;
			// reassign value of arr[i] to arr[j]
			arr[i] = arr[j];
		}
	// return i + 1
	return i + 1;
}

var twoSum = function(nums, target) {
	// create a variable left assign to the front of array
	let left = 0;
	// create a variable right assign to last element of the array
	let right = nums.length - 1;
	// while the left is less than right
	while (left < right) {
		// create a variable named sum assign it to nums[left] + nums[right]
		let sum = nums[left] + nums[right];
		// if sum equals target
		if (sum === target) {
			// return [left, right]
			console.log([ left, right ]);
			return [ left, right ];
		} else if (sum > target) {
			// otherwise if sum > target
			//  then right decreases
			right--;
		} else {
			// if sum is less than nums
			// left increases
			left++;
		}
	}
};
// console.log(twoSum([ 3, 2, 4 ]));

// Write a function mergingTripletsAndQuints which adds the corresponding
// element from array2 if the element from array1 is divisible by 3 or 5 and
// returns the new array.

function mergingTripletsAndQuints(array1, array2) {
	// ADD CODE HERE
	// EDGE CASE:
	// if the lengths of both arrays doesn't equal each other
	if (array1.length !== array2.length) {
		// return []
		return [];
	}
	// create a result array copy of array1
	let result = array1.slice();
	// iterate through the array1
	for (let i = 0; i < array1.length; i++) {
		// if the element is divisble by 3 or 5
		if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
			// then at the index of result add the two elements
			result[i] = array1[i] + array2[i];
		}
	}
	// return result array
	return result;
}

// Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([ 1, 2, 3, 4, 5, 15 ], [ 1, 3, 6, 7, 8, 9 ])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([ 1, 1, 3, 9, 5, 15 ], [ 1, 2, 3, 4, 5, 6 ])); // expected log [1, 1, 6, 13, 10, 21]

// Write a function, arraySum, that accepts an array of numbers
// and returns the sum of all the numbers in the array (no matter how nested!).

// create a function arraySum that takes in one argument a nested array
function arraySum(array) {
	// create a sum variable to add up elements
	let sum = 0;
	// iterate through the array
	for (let i = 0; i < array.length; i++) {
		// grab the element
		let element = array[i];
		// if the array is an array
		if (Array.isArray(element)) {
			// then add sum to the arraySum(element)
			sum += arraySum(element);
			// otherwise
		} else {
			// add sum to the element
			sum += element;
		}
	}
	// return the sum
	return sum;
}
console.log(arraySum([ 1, [ 2, 3, [ 4 ] ] ])); // => 10

// Write a function, theTruthCounts, that accepts a multi-dimensional array of values.
// theTruthCounts should return the count of all truthy values inside the multidimesional
// array.

function theTruthCounts(array) {
	// create a counter variable to accumulate the elements
	let count = 0;
	// iterate through the array
	for (let i = 0; i < array.length; i++) {
		// grab the element
		let element = array[i];
		// if the element is an array
		if (Array.isArray(element)) {
			// then get the count of truthy elements in the array
			count += theTruthCounts(element);
		} else {
			// if it is just a value and is true
			if (element) {
				// increment count
				count++;
			}
		}
	} // return count
	return count;
}

console.log(theTruthCounts([ 0, [ true, [ 'yes' ] ] ])); // => 2
