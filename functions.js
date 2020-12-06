// Write a function called "filterOddElements".
// Given an array of numbers, "filterOddElements" returns an array containing only the odd
// numbers of the given array. If the input array contains no odd numbered elements, your function
// should return an empty array.

// create a function named filterOddElements
function filterOddElements(arr) {
	// input/parameter --> array
	// EDGE CASE:
	//if the array has no odd elements
	if (arr.length === 0) {
		// return []
		return [];
	}
	// create a result variable --> empty array
	const oddArr = [];
	// iterate through the array
	for (let i = 0; i < arr.length; i++) {
		// if element of array are not divisble by two --> odd
		if (arr[i] % 2 !== 0) {
			// push elements inside array
			oddArr.push(arr[i]);
		}
	}
	//return the odd array
	return oddArr;
}

// var output = filterOddElements([ 1, 2, 3, 4, 5 ]);
// console.log(output); // --> [1, 3, 5]

// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements
// in the given array. If input array is empty, your function should return 0.

// create a function named computeSumOfAllElements
// input one parameter that will be an array
function computeSumOfAllElements(array) {
	// EDGE CASE:
	// IF the array has no elements
	if (array.length === 0) {
		// then return 0
		return 0;
	}
	// create a result variable set it to zero
	let result = 0;
	// iterate through the array to get its elements
	for (let i = 0; i < array.length; i++) {
		// take results variable add it to each element
		result += array[i];
	}
	// return results variable
	return result;
}

// var result1 = computeSumOfAllElements([ 1, 2, 3 ]);
// console.log('should log 6:', result1);

// var result2 = computeSumOfAllElements([]);
// console.log('should log 0:', result2);

// Write a function called "computeAverageOfNumbers".
// Given an array of numbers, "computeAverageOfNumbers" returns their average.
// If input array is empty, your function should return 0.

// create a function name computeAverageOfNumbers
// input parameter = array
function computeAverageOfNumbers(array) {
	//EDGE CASE:
	// if the array has no elements
	if (array.length === 0) {
		// return 0
		return 0;
	}
	// create an accumulator variable set it to zero
	let accumulator = 0;
	// create a length variable to divide the total
	const len = array.length;
	// iterate through the array to get its elements
	for (let i = 0; i < array.length; i++) {
		// add the accumulator to each element --> the total
		accumulator += array[i];
	}
	// return the divided  accumulator by the length array
	return accumulator / len;
}

var input1 = [ 1, 2, 3, 4, 5 ];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);
