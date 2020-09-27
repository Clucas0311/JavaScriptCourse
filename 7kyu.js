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
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //ehT kciuq nworb xof spmuj revo eht yzal .god

// Given a list of numbers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
	// if the array length is zero
	if (array.length === 0) {
		// then the array[0] = 0
		array[0] = 0;
	}
	// create a variable sum to add up elements
	let sum = 0;
	//iterate through the array
	array.forEach((element) => (sum += element));
	// if sum is divisible by 2 - even if not false
	return sum % 2 === 0 ? 'even' : 'odd';
}
// console.log(oddOrEven([ 0 ])); //'even'
// console.log(oddOrEven([ 1 ])); //'odd'
// console.log(oddOrEven([])); //'even'

// You are given an odd-length array of integers, in which all of them are the same,
// except for one single number. Complete the method which accepts such an array,
// and returns that single different number.
function stray(numbers) {
	// sort the array for easy access
	numbers = numbers.sort((a, b) => a - b);
	// iterate through the array
	for (let i = 0; i < numbers.length; i++) {
		// if the element doesn't equals the second element
		if (numbers[i] !== numbers[i + 1]) {
			// return the element
			return numbers[i];
			// otherwise
		} else {
			// return the last element
			return numbers[numbers.length - 1];
		}
	}
}
// console.log(stray([ 1, 1, 2 ])); //2

// Given a number, write a function to output its reverse digits.
// (e.g. given 123 the answer is 321)
// Numbers should preserve their sign; i.e. a negative number should still
// be negative when reversed.

function reverseNumber(n) {
	// make sure there is no negative number on n
	let num = Math.abs(n);
	// convert the num to a string then an array then reverse then back to a string
	num = num.toString().split('').reverse().join('');
	// then to a number again
	num = Number.parseInt(num);
	// if the original number is negative
	if (n < 0) {
		// return -with reversenum
		return -num;
		// otherwise
	} else {
		// return the reverse num
		return num;
	}
}
console.log(reverseNumber(-123)); // -321

// In this Kata, you will remove the left-most duplicates from a
//  list of integers and return the result.

function solve(arr) {
	// return
	return (
		arr
			//reverse the array
			.reverse()
			// filter the array for duplicates
			.filter((element, i) => arr.indexOf(element) === i)
			// reverse array back
			.reverse()
	);
}
