// Define a method hello that returns "Hello, Name!" to a given name, or says Hello,
// World! if name is not given  (or passed as an empty String). Assuming that name is a
// String and it checks for user typos to return a name
// with a first capital letter (Xxxx).

function hello(name) {
	// if name === undefined or an empty string
	if (name === undefined || name === '') {
		// then return 'Hello, World!'
		return 'Hello, World!';
	} // otherwise..
	// return Hello, + name[0].toUpperCase() + slice(1).toLowerCase()!
	return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}
// console.log(hello('jOhn'));

// Your task is to create functionisDivideBy (or is_divide_by) to check if an
// integer number is divisible by each out of two arguments.

function isDivideBy(number, a, b) {
	//if number is divisible by a and b
	if (number % a === 0 && number % b === 0) {
		// return true
		return true;
	}
	// otherwise
	// return false;
	return false;
}
// console.log(isDivideBy(-12, 2, -6)); // true
// console.log(isDivideBy(-12, 2, -5)); // false;

// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:

function arr(N) {
	// create an empty array to push elements into
	const container = [];
	// iterate through the array starting at 0 ending at n
	for (let i = 0; i < N; i++) {
		// push index into container
		container.push(i);
	}
	// return empty array
	return container;
}

// console.log(arr(5));

// You are given an array with positive numbers and a number N.
// You should find the N-th power of the element in the array with the index N.
// If N is outside of the array, then return -1. Don't forget that the first
// element has the index 0.

function index(array, n) {
	// if n is greater than or equal to array length
	if (n >= array.length) {
		// then return -1
		return -1;
	} // otherwise
	// return Math.pow(array[n], n)
	return Math.pow(array[n], n);
}
// console.log(index([ 0, 1 ], 0));

// Hey awesome programmer!
// You've got much data to manage and of course you use zero-based and non-negative ID's
// to make each data item unique! Therefore you need a method, which returns the
// smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be
// duplicate IDs, but you don't have to find or remove them!
// Go on and code some pure awesomeness!

function nextId(ids) {
	// sort the ids array
	//create a variable and assign it to 0
	let x = 0;
	// while ids sort the array has x as an element run
	while (ids.sort((a, b) => a - b).includes(x)) {
		// increment x until it has a unknown
		x++;
	}
	// return x
	return x;
	// iterate through the array
	// for (let i = 0; i < ids.length; i++) {
	// 	// if the array at particular index doesn't exist
	// 	if (ids.indexOf(i) === -1) {
	// 		// then return i
	// 		return i;
	// 	}
	// }
	// // otherwise return the array length
	// return ids.length;
}
// console.log(nextId([ 0, 1, 2, 3, 5 ])); // 4

// The cockroach is one of the fastest insects. Write a function which takes its
// speed in km per hour and returns it in cm per second, rounded down to the integer
// (= floored).

function cockroachSpeed(s) {
	//Good Luck!
	// cm/s = km/h ÷ 0.036
	// cm/s = s / 0.036 - Math.floor
	let centimeters = s / 0.036;
	return Math.floor(centimeters);
}

// console.log(cockroachSpeed(1.08)); // --> 30

// Write a function called repeat_str which repeats the given string src
// exactly count times.
function repeatStr(n, s) {
	// create a variable assign to an empty string
	let repeatedString = '';
	// iterate starting at 0 anding at n
	for (let i = 0; i < n; i++) {
		// concatanate the repeated string with s during each iteration
		repeatedString += s;
	}
	// return repeated string
	return repeatedString;
}
// console.log(repeatStr(3, '*')); // "***"
// Given a string of digits, you should replace any digit below 5 with '0' and any digit
// 5 and above with '1'.
// Return the resulting string.

function fakeBin(x) {
	// convert the string into an array
	let strToArr = x.split('');
	// iterate through string array
	for (let i = 0; i < strToArr.length; i++) {
		// if element < 5
		if (strToArr[i] < 5) {
			// reassign the value of the string array to 0
			strToArr[i] = '0';
		}
		// if the element > and equal to 5
		if (strToArr[i] >= 5) {
			// reassign element to 1
			strToArr[i] = 1;
		}
	}
	// convert back into a string
	// return it
	return strToArr.join('');
}
// console.log(fakeBin('45385593107843568')); //'01011110001100111'

// Given a month as an integer from 1 to 12,
// return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June),
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
	// Your code here
	// if month is less than or equal to 3
	// if (month <= 3) {
	// 	// return 1
	// 	return 1;
	// } else if (month <= 6) {
	// 	// if month is less than or equal to 6
	// 	// return 2
	// 	return 2;
	// } else if (month <= 9) {
	// 	// if month is less than or equal to 9
	// 	// return 3
	// 	return 3;
	// } else {
	// 	// if month is less than or equal to 12
	// 	// return 4
	// 	return 4;
	// }
	return Math.ceil(month / 3);
};

// console.log(quarterOf(3)); //  --> 1;

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive
// but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers.
// The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first
// non-consecutive could be either too! If you like this Kata, maybe try this one
// next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 1 Can you write a solution that will return null2 for both [] and [ x ] though?
// (This is an empty array and one with a single number and is not tested for, but
// you can write your own example test. )

function firstNonConsecutive(arr) {
	// iterate through the arr starting at the first index
	for (let i = 1; i < arr.length; i++) {
		// if arr at 0 index plus 1 doesn't equal the current index
		if (arr[i - 1] + 1 !== arr[i]) {
			// return current element
			return arr[i];
		}
	}
	// otherwise - return null
	return null;
}

console.log(firstNonConsecutive([ 1, 2, 3, 4, 6, 7, 8 ])); // 6
