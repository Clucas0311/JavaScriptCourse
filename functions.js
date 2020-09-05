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

var output = filterOddElements([ 1, 2, 3, 4, 5 ]);
console.log(output); // --> [1, 3, 5]
