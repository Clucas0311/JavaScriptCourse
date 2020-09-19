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

// console.log(firstNonConsecutive([ 1, 2, 3, 4, 6, 7, 8 ])); // 6

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
	return arr.reduce((sum, element) => {
		if (element > 0) {
			sum += element;
		}
		return sum;
	}, 0);
	// // create a sum variable set 0
	// let sum = 0;
	// // iterate through arr
	// for (let i = 0; i < arr.length; i++) {
	//   // if element is greater than 0
	//   if (arr[i] > 0) {
	// 	// sum plus element
	// 	sum += arr[i]
	//   }
	// }
	// // return sum
	// return sum;
}

// console.log(positiveSum([ 1, 2, 3, 4, 5 ])); //15

// I'm new to coding and now I want to get the sum of two arrays...actually
// the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
	//return arr1 + arr2; //something went wrong
	// check to see if arrays length are the same
	if (arr1.length != arr2.length) {
		return 0;
	}
	// create a variable sum = 0
	let sum = 0;
	// iterate through arr1
	for (let i = 0; i < arr1.length; i++) {
		// sum plus equal arr1 element + arr2 element
		sum += arr1[i] + arr2[i];
	}
	// return sum
	return sum;
	// return arr1.concat(arr2).reduce((sum, next) => sum + next);
}
// console.log(arrayPlusArray([ 1, 2, 3 ], [ 4, 5, 6 ])); // 21

// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
	// // filter the array for even index
	// return arr.filter((element, index) => {
	// 	if (index % 2 === 0) {
	// 		return element;
	// 	}
	// });
	for (var i = 1; i < arr.length; i++) {
		arr.splice(i, 1);
	}
	return arr;
}

// console.log(removeEveryOther([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])); //[1, 3, 5, 7, 9]

// You will be given an array (a) and a value (x).
// All you need to do is check whether the provided array contains the value,
// without using a loop. Array can contain numbers or strings.
// X can be either. Return true if the array contains the value,
// false if not. With strings you will need to account for case.
// Looking for more, loop-restrained fun? Check out the other kata in the series:

function check(a, x) {
	// use the includes method
	return a.includes(x);
}
// console.log(check([ 66, 101 ], 66)); // true;

// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
var summation = function(num) {
	let sum = 0;

	for (let i = 1; i <= num; i++) {
		sum += i;
	}

	return sum;
};

// console.log(summation(3)); // 6

// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
	const initials = name.split(' ').map((element) => element[0]).join('.').toUpperCase();
	return initials;
	//   // create a an array to push elements into
	//   const container = [];
	//   // iterate through the name but convert into array but split by space
	//   for (let element of name.split(' ')) {
	//     // concat empty string to first element of string array
	//     container.push(element[0]);
	//   }
	//   // return string but join('.')
	//   return container.join('.').toUpperCase()
}

// console.log(abbrevName('Sam Harris')); //"S.H"

// Given a random non-negative number, you have to return the digits
// of this number within an array in reverse order.

function digitize(n) {
	// convert the n to a string then an array
	let numToArr = n.toString().split('').reverse();
	// create an empty array to push elements into
	let container = [];
	// iterate through string reverse but convert element into an integer
	for (let element of numToArr) {
		container.push(Number.parseInt(element));
	}
	// return container
	return container;
}

function digitize(n) {
	// // convert the n to a string then an array
	// let numToArr = n.toString().split('').reverse();
	// // create an empty array to push elements into
	// let container = [];
	// // iterate through string reverse but convert element into an integer
	// for (let element of numToArr) {
	// 	container.push(Number.parseInt(element));
	// }
	// // return container
	// return container;

	return n.toString().split('').reverse().map((element) => Number.parseInt(element));
}

// console.log(digitize(35231)); //[1,3,2,5,3]

// Create a function called that accepts 2 string arguments and returns an
// integer of the count of
// occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter) {
	//code here
	// convert str into an array
	// filter through string array elements that equal the letter
	// then get the length of that array
	return str.split('').filter((element) => element === letter).length;
}
// console.log(strCount('Hello', 'o')); // 1
// console.log(strCount('', 'z')); // 0

// It's pretty straightforward. Your goal is to create a function that removes
// the first and last characters of a string. You're given one parameter,
// the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
	//You got this!
	// convert the str into an array

	// slice out first element
	// slice out second element
	// return the array and change it back to string
	return str.split('').slice(1, -1).join('');
}

// console.log(removeChar('eloquent')); //'loquen'

// Complete the square sum function so that it squares each number passed into it and
//  then sums the results together

function squareSum(numbers) {
	// return iterate through numbers and get its elements with map then reduce to get sum
	return numbers.map((element) => element ** 2).reduce((prev, next) => prev + next, 0);
}
console.log(squareSum([ 1, 2 ])); // 5
console.log(squareSum([ 0, 3, 4, 5 ])); // 50
