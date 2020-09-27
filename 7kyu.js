// Given an array of integers, remove the smallest value.
// Do not mutate the original array/list. If there are multiple elements
// with the same value, remove the one with a lower index. If you get an empty
// array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
	// edge case if numbers.length is empty return []
	if (numbers.length === 0) return [];
	// find the min
	let min = Math.min(...numbers);
	// create a copy of the numbers array
	let copyArr = numbers.slice();
	// iterate through copy array
	for (let i = 0; i < copyArr.length; i++) {
		// if element equals min
		if (copyArr[i] === min) {
			// then splice out the copyArr at index and the element
			copyArr.splice(i, 1);
			// end the loop once its splice
			return copyArr;
		}
	}
}
// Complete the function that accepts a string parameter, and reverses
// each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
	return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //ehT kciuq nworb xof spmuj revo eht yzal .god
