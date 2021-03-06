// Define a method hello that returns "Hello, Name!" to a given name, or says Hello,
// World! if name is not given  (or passed as an empty String). Assuming that name is a
// String and it checks for user typos to return a name
// with a first capital letter (Xxxx).

function hello(name) {
	// if name === undefined or an empty string
	// if (name === undefined || name === '') {
	// 	// then return 'Hello, World!'
	// 	return 'Hello, World!';
	// } // otherwise..
	// // return Hello, + name[0].toUpperCase() + slice(1).toLowerCase()!
	// return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
	// if (name) {
	// 	return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
	// }
	// return `Hello, World!`;
	return name ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}! ` : `Hello, World!`;
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
	// // if n is greater than or equal to array length
	// if (n >= array.length) {
	// 	// then return -1
	// 	return -1;
	// } // otherwise
	// // return Math.pow(array[n], n)
	// return Math.pow(array[n], n);
	return n >= array.length ? -1 : Math.pow(array[n], n);
}
// console.log(index([ 0, 1 ], 0)); // 1

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
// [1, 2, 3, 4, 5, 6, 7]

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
// console.log(squareSum([ 1, 2 ])); // 5
// console.log(squareSum([ 0, 3, 4, 5 ])); // 50

// Given an array of integers as strings and numbers, return the
// sum of the array values as if all were numbers.

function sumMix(x) {
	// iterate through array and use the Number method to convert number into element
	return x.reduce((prev, next) => Number(prev) + Number(next), 0);
}

// console.log(sumMix([ 9, 3, '7', '3' ])); // 22

// Create a function that takes 2 positive integers in form of a string as
// an input, and outputs the sum (also as a string):

function sumStr(a, b) {
	return (Number(a) + Number(b)).toString();
}
// console.log(sumStr('4', '5')); // 9

// Get the number n (n>0) to return the reversed sequence from n to 1.
const reverseSeq = (n) => {
	// create an array container to push elements into
	const container = [];
	// iterate starting at n and decrease
	for (let i = n; i >= 1; i--) {
		// push elements into the container
		container.push(i);
	}
	// return container
	return container;
};
// console.log(reverseSeq(5)); //[5, 4, 3, 2, 1])

// Create a method take that accepts a list/array and a number n, and
// returns a list/array array of the first n elements from the list/array.
function take(arr, n) {
	// slice out the elements from 0 n plus 1
	return arr.slice(0, n);
}

// console.log(take([ 0, 1, 2, 3, 5, 8, 13 ], 3));

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
	// convert the string to an array then join without spaces
	return x.split(' ').join('');
}
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // '8j8mBliB8gimjB8B8jlB'

// Write function isPalindrome that checks if a given string (case insensitive)
// is a palindrome.

function isPalindrome(x) {
	// your code here
	// convert to an array then reverse the string using reduce compare reverse string
	//   let reversed = x.toLowerCase().split('').reduce((reverse, character) => character + reverse, '')
	let reversed = x.toLowerCase().split('').reverse().join('');
	return x.toLowerCase() === reversed;
}
// console.log(isPalindrome('aba')); //true

// Create a function that returns the sum of the two lowest positive
// numbers given an array of minimum 4 positive integers. No floats or
// non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
	//Code here
	// sort the array
	let sorted = numbers.sort((a, b) => a - b);
	// add the first and second indices and return it
	return sorted[0] + sorted[1];
}
// console.log(sumTwoSmallestNumbers([ 5, 8, 12, 19, 22 ])); // 13

// Write function alternateCase which switch every letter in string
// from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
	// create an empty string to concantenate characters
	let newStr = '';
	// iterate through string
	for (let i = 0; i < s.length; i++) {
		// if s at index is equal to s Upper case
		if (s[i] === s[i].toUpperCase()) {
			// then empty string plus s[i].lowerCase
			newStr += s[i].toLowerCase();
		} else {
			// else
			// empty string plus s[i] upper case
			newStr += s[i].toUpperCase();
		}
	}
	// return new string
	return newStr;
}

function crazyCaps(str) {
	let crazyString = '';
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 1) {
			crazyString += str[i].toUpperCase();
		} else {
			crazyString += str[i];
		}
	}
	return crazyString;
}
// console.log(alternateCase('abc')); //"ABC"
// console.log(alternateCase('Hello World')); // hELLO wORLD

// It's the academic year's end, fateful moment of your school report.
// The averages must be calculated. All the students come to you and entreat
// you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks) {
	//   //TODO : calculate the downwar rounded average of the marks array
	//   // create a sum variable
	//   let sum = 0
	//   // iterate through the array
	//   for (let i = 0; i < marks.length; i++) {
	//     // add each element up
	//     sum += marks[i];
	//   }
	//   // return the average / length of array
	//   return Math.floor(sum / marks.length);

	const sum = marks.reduce((prev, next) => prev + next, 0);
	return Math.floor(sum / marks.length);
}
// console.log(getAverage([ 2, 2, 2, 2 ])); // 2
// console.log(getAverage([ 1, 2, 3, 4, 5 ])); //3

// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower cas

function getCount(str) {
	// create counter variable
	var vowelsCount = 0;
	// create an array of vowels
	const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
	// convert the string into an array
	// iterate though str array
	for (let i = 0; i < str.split('').length; i++) {
		// if vowels array includes the array element
		if (vowels.includes(str[i])) {
			// count++
			vowelsCount++;
		}
	}
	// return counter

	return vowelsCount;
}

// console.log(getCount('abracadabra')); // 5

// Very simple, given a number, find its opposite.
function opposite(number) {
	//your code here
	// return -number
	return -number;
}

// console.log(opposite(1)); // -1;

// In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

function makeNegative(num) {
	if (num > 0) {
		return -num;
	}
	return num;
}
// console.log(makeNegative(42)); //-42

// You are going to be given a word. Your job is to return the middle character
// of the word. If the word's length is odd, return the middle character. If the word's
// length is even, return the middle 2 characters.
function getMiddle(string) {
	// create a variable and assign it to the middle character of the string -> round down
	let middle = Math.floor(string.length / 2);
	// if string length is even
	if (string.length % 2 === 0) {
		// the return the middle two characters
		return string[middle - 1] + string[middle];
	}
	// otherwise
	// return the middle character
	return string[middle];
}

// console.log(getMiddle('test')); //"es"

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels
// from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string
//  with all vowels removed.

function disemvowel(str) {
	// create an array of vowels
	// const vowel = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
	// // create a string to concatanate the elements
	// let newStr = '';
	// // convert the str into an array by space
	// // iterate through str array
	// for (let element of str.split('')) {
	// 	// if the vowel array doesnt contain the element
	// 	if (vowel.indexOf(element) === -1) {
	// 		// add the element to the string that isn't a vowel
	// 		newStr += element;
	// 	}
	// }
	// // return newStr
	// return newStr;

	return str.replace(/[aeiou]/gi, '');
}
// console.log(disemvowel('This website is for losers LOL!')); //"Ths wbst s fr lsrs LL!"

// Consider an array/list of sheep where some sheep may be missing from their
// place. We need a function that counts the number of sheep present in the array
// (true means present).

function countSheeps(arrayOfSheep) {
	// TODO May the force be with you
	// filter through arrayOfSheep and if element === true get length
	return arrayOfSheep.filter((element) => element === true).length;
}

var array1 = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true
];

// console.log(countSheeps(array1)); //== 17, //"There are 17 sheeps in total"

// Welcome. In this kata, you are asked to square every digit of a number and concatenate
// them.For example, if we run 9119 through the function, 811181
// will come out, because 92 is 81 and 12 is 1.

function squareDigits(num) {
	//may the code be with you
	// convert the number into a string then to an array
	// iterate through array and sqaure each element
	// then convert back to string
	let strNum = num.toString().split('').map((element) => element ** 2).join('');
	return Number(strNum);
}

// console.log(squareDigits(9119)); //811181

// Create a function (or write a script in Shell) that takes an integer as an
// argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
	return number % 2 === 0 ? 'Even' : 'Odd';
}

// console.log(even_or_odd(2)); //"Even"

// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.
function highAndLow(numbers) {
	// ...
	// convert the numbers in to an array push them into a new array converting
	// elements into numbers
	const numArr = numbers.split(' ').map((element) => Number(element));
	// then get the max and min converting them back to strings and return it
	let max = Math.max(...numArr).toString();
	let min = Math.min(...numArr).toString();
	return `${max} ${min}`;
}
// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')); // "542 -214"

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
	// // convert the string into an array by space
	// const strArr = s.split(' ');
	// // create a variable min and assign it to the first element
	// let min = strArr[0];
	// // iterate through the string array
	// for (let i = 1; i < strArr.length; i++) {
	// 	// if the element length is less than min length
	// 	if (strArr[i].length < min.length) {
	// 		// reassign the value of min to element
	// 		min = strArr[i];
	// 	}
	// }
	// // return min length;
	// return min.length;
	return Math.min(...s.split(' ').map((element) => element.length));
}

// console.log(findShort('bitcoin take over the world maybe who knows perhaps')); // 3

// Your task is to make a function that can take any non-negative integer as
// an argument and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

function descendingOrder(n) {
	// convert the int into a string then into an array then sort in decescendig order
	return Number.parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}

// console.log(descendingOrder(123456789)); // 987654321

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

function XO(str) {
	//code here
	let x = str.match(/x/gi);
	let o = str.match(/o/gi);
	return (x && x.length) === (o && o.length);
}

// console.log(XO('xxOo')); //true

// In this kata you will create a function that takes a list of non-negative
// integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
	// Return a new array with the strings filtered out
	// use the filter method and filter strings with the typeof method
	return l.filter((element) => typeof element === 'number');
}
// console.log(filter_list([ 1, 'a', 'b', 0, 15 ])); //[1,0,15]

// An isogram is a word that has no repeating letters,
// consecutive or non-consecutive. Implement a function
// that determines whether a string that contains only letters
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
	// convert the string to lower case letters and  into an array
	const strToArr = str.toLowerCase().split('');
	// create an obj for a hashmap table for the characters
	const charMap = {};
	// iterate through the string array to bulid character map
	for (let char of strToArr) {
		// if value exist add one if not assign to 1
		charMap[char] = charMap[char] + 1 || 1;
	}
	// iterate through charMap
	for (let key in charMap) {
		// if the value is greater than 1
		if (charMap[key] > 1) {
			// return false;
			return false;
		}
	}
	// otherwise return true;
	return true;
}

// console.log(isIsogram('Dermatoglyphics')); // true;
// console.log(isIsogram('isIsogram')); // false;

// Make a program that filters a list of strings and returns a
// list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that
// it has to be a friend of yours! Otherwise, you can be sure he's not...
function friend(friends) {
	//your code here
	return friends.filter((element) => element.length === 4);
}

// console.log(friend([ 'Ryan', 'Kieran', 'Mark' ]));

// Complete the solution so that it returns true if the first argument(string)
//  passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
	// TODO: complete
	return str.slice(-ending.length) === ending ? true : false;
}

// console.log(solution('abcde', 'cde')); // true
// console.log(solution('abcde', 'abc')); //false

// You are given an odd-length array of integers,
// in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that
// single different number.

function stray(numbers) {
	// sort through numbers array
	numbers.sort((a, b) => a - b);
	// if the first element doesn't equal the second element
	if (numbers[0] !== numbers[1]) {
		// then return the first element
		return numbers[0];
	}
	// return the last element
	return numbers[numbers.length - 1];
}
// }
// console.log(stray([ 1, 1, 2 ])); // 2

// In this kata you get the start number and the end number of a region and
// should return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
	// create an empty array container to get the elements
	const container = [];
	// iterate starting at start, ending and equal to end
	for (let i = start; i <= end; i++) {
		// if converted string element does not include 5
		if (!i.toString().includes('5')) {
			// push into container
			container.push(i);
		}
	}
	// return container length
	return container.length;
}

// console.log(dontGiveMeFive(4, 17)); // 12

// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.

function findSum(n) {
	// create an empty array container to hold elements inside
	let sum = 0;
	// iterate starting at 0 and ending and including n
	for (let i = 0; i <= n; i++) {
		// if the element are divisible 3 or divisble by 5
		if (i % 3 === 0 || i % 5 === 0) {
			// then push elements into container
			sum += i;
		}
	}
	// use reduce to sum up the elemens of the container and return it
	return sum;
}

// console.log(findSum(5)); // 8

// In this Kata, your function receives an array of integers as input.
// Your task is to determine whether the numbers are in ascending order.
// An array is said to be in ascending order if there are no two adjacent
// integers where the left integer exceeds the right integer in value.

function inAscOrder(arr) {
	// iterate through the array
	for (let i = 0; i < arr.length; i++) {
		// if arr[i] > arr[i + 1]
		if (arr[i] > arr[i + 1]) {
			// return false
			return false;
		}
	}
	// return true
	return true;
}

// console.log(!inAscOrder([ 1, 6, 10, 18, 2, 4, 20 ]));

// Write a function named sumDigits which takes a number as input and
// returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
	// convert the number into a positive integer
	number = Math.abs(number);
	// convert number into a string
	// convert string into an array
	// use reduce to calculate the sum but convert each element back into int
	return number.toString().split('').reduce((prev, next) => Number(prev) + Number(next), 0);
}
// console.log(sumDigits(10)); // 1

// Count the number of divisors of a positive integer n.

function getDivisorsCnt(n) {
	// todo
	// create a count variable assign to 0
	let count = 0;
	// iterate starting at 1 ending at and equal to n
	for (let i = 1; i <= n; i++) {
		// if n is divisble by i
		if (n % i === 0) {
			// increment count
			count++;
		}
	}
	// return count;
	return count;
}
// console.log(getDivisorsCnt(54)); // 8

// Your task is to remove all duplicate words from a string,
// leaving only single (first) words entries.

function removeDuplicateWords(s) {
	return (
		s // convert the string into an array
			.split(' ')
			// iterate through array and remove duplicates
			.filter((element, i, array) => array.indexOf(element) === i)
			// revert the array back into a string
			.join(' ')
	);
}

// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); // 'alpha beta gamma delta';

// Write a function that takes an array of strings as an argument and returns a
// sorted array containing the same strings, ordered from shortest to longest.

function sortByLength(array) {
	// Return an array containing the same strings, ordered from shortest to longest
	return array.sort((a, b) => a.length - b.length);
}
// console.log(sortByLength([ 'Beg', 'Life', 'I', 'To' ])); //["I", "To", "Beg", "Life"]

// Given an array of integers, find the one that appears an odd number of times.
function findOdd(A) {
	// create a numMap
	const numMap = {};
	// iterate through array
	for (let num of A) {
		// if there is a value then add one or assign 1 (no value)
		numMap[num] = numMap[num] + 1 || 1;
	}
	// iterate through the keys
	for (let key in numMap) {
		// if the value of the object is odd
		if (numMap[key] % 2 !== 0) {
			// return key but convert back into a number
			return parseInt(key);
		}
	}
}

// console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ])); // 5

// Define a function, bacteriaTime, that accepts two arguments:

// currentNum (num) - number of starting bacteria
// targetNum (num) - desired number of bacteria
// Assuming that the number of bacteria double every 20 minutes,
// bacteriaTime should return the number of minutes required for the number of
// bacteria to grow from the currentNum to a number equal to or larger than the targetNum.

// You can assume the currentNum will be a positive integer. If the targetNum is
// smaller than the currentNum, return the string 'targetNum must be larger than
// currentNum'.

// create a function named bacteria time currentNum and targetNum
function bacteriaTime(currNum, targetNum) {
	// if the targetNum is less than the currNum
	if (targetNum < currNum) return 'targetNum must be larger than currentNum';
	// return 'targetNum must be larger than currentNum'
	// create a variabe for the minutes
	let minutes = 0;
	// while currNum is less than targetNum
	while (currNum < targetNum) {
		// currentNum * 2
		currNum *= 2;
		// minutes += 20
		minutes += 20;
	}
	// return minutes when loop finishes
	return minutes;
}

// Define a function, oddCouple, that accepts an array of numbers as an argument.
// oddCouple should return a new array with the first two odd numbers from the original
// array:

// create a function named oddCouple
function oddCouple(arr) {
	// create an empty array
	const oddArr = [];
	// iterate thorugh the array
	for (let i = 0; i < arr.length; i++) {
		// if element is odd
		if (arr[i] % 2 === 1) {
			// then push odd elements into array
			oddArr.push(arr[i]);
		}
		// check to see if the length of the odd array is 2
		if (oddArr.length === 2)
			// return odd array
			return oddArr;
	}
	// return odd array
	return oddArr;
}

// console.log(oddCouple([ 1, 2, 3, 4, 5 ]));
// console.log(oddCouple([ 10, 15, 20 ]));
// console.log(oddCouple(2, 4, 6, 8));

// 'Write a function, 'veryOddMutant'. The function accepts an array of numbers.
// The function should mutate the given array by replacing every even number in the
// array with the string 'normie'.
// 'veryOddMutant' should return a count of the number of even numbers it replaced.
function veryOddMutant(arrNum) {
	// create a counter variable to accumulate the even elements
	let count = 0;
	// iterate through the array
	for (let i = 0; i < arrNum.length; i++) {
		// grab the elements and
		let element = arrNum[i];
		// if the element is even
		if (element % 2 === 0) {
			// reassign the element to normie
			arrNum[i] = 'normie';
			// increment count
			count++;
		}
	}
	//return count;
	return count;
}

let allTheNums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
let countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
// // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log('countRemoved:', countRemoved);
// 4

// Complete the method which returns the number which is most frequent
// in the given input array. If there is a tie for most frequent number,
// return the largest number among them.
function highestRank(arr) {
	//Your Code logic should written here
	// create a hashMap
	const numMap = {};
	for (let num of arr) {
		numMap[num] = numMap[num] + 1 || 1;
	}
	// put all the values in an array
	const values = Object.values(numMap);
	// find the max of the values
	let max = Math.max(...values);
	// create a new array for duplicates
	const newArr = [];
	for (let key in numMap) {
		// search to see if the key has a max
		if (numMap[key] === max) {
			// push elements into array
			newArr.push(Number(key));
		}
	}
	// return the max of the values

	return Math.max(...newArr);
}

const array = [ 12, 10, 8, 12, 7, 6, 4, 10, 12 ];
console.log(highestRank(array)); // 12
