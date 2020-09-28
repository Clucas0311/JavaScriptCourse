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
// console.log(reverseNumber(-123)); // -321

// In this Kata, you will remove the left-most duplicates from a
//  list of integers and return the result.

function solve(arr) {
	// return
	// return (
	// 	arr
	// 		//reverse the array
	// 		.reverse()
	// 		// filter the array for duplicates
	// 		.filter((element, i) => arr.indexOf(element) === i)
	// 		// reverse array back
	// 		.reverse()
	// );
	return arr.filter((element, index, arr) => arr.lastIndexOf(element) === index);
}

// console.log(solve([ 3, 4, 4, 3, 6, 3 ])); //[4,6,3]

// Given a string str, reverse it omitting all non-alphabetic characters.
function reverseLetter(str) {
	// first remove special characters  and numbers replace with a string
	str = str.replace(/[^A-Za-z]+/gi, '');
	// return convert into an array the reverse it then turn back into a string
	return str.split('').reverse().join('');
}
// console.log(reverseLetter('ultr53o?n')); //"nortlu"

// Have the function ExOh(str) take the str parameter being passed and return the
// string true if there is an equal number of x's and o's, otherwise return the string
// false. Only these two letters will be entered in the string, no punctuation or numbers.
// For example: if str is "xooxxxxooxo" then the output should return false because there
// are 6 x's and 5 o's.

function ExOh(str) {
	// convert the str in an array
	let strArr = str.split('');
	// filter the str arr for x's and o's
	let x = strArr.filter((element) => element === 'x');
	let o = strArr.filter((element) => element === 'o');
	// compare their lengths
	if (x.length === o.length) {
		return true;
	}
	return false;
}

// console.log(ExOh('xoxo')); //true

function twoSum(arr, target) {
	let hashMap = {};
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		let elementNeeded = target - arr[i];
		if (hashMap[elementNeeded] !== undefined) {
			newArr.push(`${elementNeeded}, ${arr[i]}`);
		} else {
			hashMap[element] = i;
		}
	}
	return newArr.join(' ');
}

// console.log(twoSum([ 3, 5, 2, -4, 8, 11 ], 7));

// You are given an array of values.
// Sum every number value in the array, and any nested arrays (to any depth).
// Ignore all other types of values.

function arraySum(arr) {
	// create a sum variable to add up elements
	let sum = 0;
	// iterate through array
	for (let i = 0; i < arr.length; i++) {
		// grab the element
		let element = arr[i];
		// check to see if the element is an array
		if (Array.isArray(element)) {
			// if true then add sum to the arraySum function invoked with the element
			sum += arraySum(element);
			// otherwise
		} else if (typeof element === 'number') {
			// add sum to the element
			sum += element;
		}
	}
	// return sum
	return sum;
}

console.log(arraySum([ 1, 2, [ 1, 2 ] ])); //6
console.log(arraySum([ 1, 2, 3 ])); //6
console.log(arraySum([ 1, 2 ])); // 3

const numArr = '1234'.split('');
console.log(numArr);
