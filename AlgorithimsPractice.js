// Mutiple Pointers: Count Unique Values Challenge
function countUniqueValues(arr) {
	// check to see if the array has any elements in it, if not return 0
	if (arr.length === 0) return 0;
	// declare a index = 0 to compare elements
	let i = 0;
	// sort the array from least to greatest
	let newArr = arr.sort();
	// iterate through array but start at the first index
	for (let j = 1; j < newArr.length; j++) {
		// if the index at 0 does not equal the next index increment until the equal each
		// other
		if (newArr[i] != newArr[j]) {
			i++;
			newArr[i] = newArr[j];
		}
	}
	// return the length of all like terms plus i
	return i + 1;
}

// console.log(countUniqueValues([ 1, 2, 3, 4, 5, 6, 7, 6, 6, 7 ]));

const favNumber = { number: 11 };
