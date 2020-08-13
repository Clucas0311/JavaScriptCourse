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

var arr = [ 2, 3, 1, 3, 4, 5, 3, 1 ];

function getOccurrence(array, value) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) {
			count++;
		}
	}
	return count;
}

// create a function called getOccurrence that gets the value of how many times an element occurs
function getOccurrence(array, value) {
	// return an array filter method and filter out only the elements that are duplicates of one another
	// then get the length of the array which will give you the amount of occurences
	return array.filter((element) => element === value).length;
}

// console.log(getOccurrence(arr, 1)); // 2
// console.log(getOccurrence(arr, 3)); // 3

// create a function that reverses the number

function reverseNum(num) {
	// convert number into a string
	// let revNum = num + '';
	// revNum.split('').reverse().join('');
	// let intToString = num + '';
	// intToString.split('').reduce((prev, next) => next + prev, '');
	let revNum = num.toString().split('').reverse().join('');

	// create a loop to reverse the string:
	// FOR LOOP
	// STARTING PT:  i = num.length - 1
	// CONDITION:  i <= 0
	// decrement
	// 	for (let i = numToString.length - 1; i >= 0; i--) {}
	// 	// convert string to number
	let stringToNumber = parseInt(revNum);
	if (stringToNumber > num) {
		return true;
	} else {
		return false;
	}
}
// console.log(reverseNum(72));

function reverse(str) {
	// // create a variable called reverse set it equal to an empty string
	// let reverse = '';
	// // create a loop and iterate through the string and add the string at each interval to the reverse string
	// for (let i = 0; i < str.length; i++) {
	// 	// reassign the variable of reverse to the concatenated string
	// 	reverse = str[i] + reverse;
	// }
	// return reverse;

	// reduce way
	// first split through the string, then use the reduce method to concat back string
	// return str.split('').reduce((prev, next) => next + prev, '');

	// recursion way
	if (str === '') return str;
	return reverse(str.substr(1)) + str[0];
}
// console.log(reverse('apple')); //=== 'leppa');
// console.log(reverse('hello')); //=== 'olleh');
// console.log(reverse('Greetings!')); //=== '!sgniteerG');

// --- Examples:
// console.log(palindrome('abba')); //=== true;
// console.log(palindrome('abcdefg')); //=== false;

function palindrome(str) {
	// let reverseString = str.split('').reduce((reverse, character) => character + reverse, '');
	// return str === reverseString;
	return str.split('').every((char, i) => {
		console.log(str.length - i - 1);
		return char === str[str.length - i - 1];
	});
}

// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// console.log(maxChar('abcccccccd')); //=== 'c';
// console.log(maxChar('apple 1231111')); //=== '1';

function maxChar(str) {
	// create an empty object to pair letters with numbers
	let charMap = {};
	// create an variable max assign to zero - reassign to the highest value
	let max = 0;
	// create a variable maxChar assign to an empty string - reassign to char
	let maxChar = '';
	// iterate through the string pair letters based on occurences
	for (let char of str) {
		// create a counter for each character
		if (!charMap[char]) {
			charMap[char] = 1;
		} else {
			charMap[char]++;
		}
	}
	// iterate through object and assign values to max and the maxChar
	// based on occurences
	for (let key in charMap) {
		if (charMap[key] > max) {
			max = charMap[key];
			maxChar = key;
		}
	}
	return maxChar;
}
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// console.log(chunk([ 1, 2, 3, 4 ], 2)); //--> [[ 1, 2], [3, 4]]
// console.log(chunk([ 1, 2, 3, 4, 5 ], 2)); //--> [[ 1, 2], [3, 4], [5]]
// console.log(chunk([ 1, 2, 3, 4, 5, 6, 7, 8 ], 3)); //--> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// console.log(chunk([ 1, 2, 3, 4, 5 ], 4)); //--> [[ 1, 2, 3, 4], [5]]
// console.log(chunk([ 1, 2, 3, 4, 5 ], 10)); //--> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	// // create an empty array to push chunks elements in
	// const group = [];
	// // create a while loop and stop it when the array length is equal to zero
	// while (array.length > 0) {
	// 	// inside the loop push the items in but splice them out starting at 0 ending at the size
	// 	group.push(array.splice(0, size));
	// }
	// // return group array
	// return group;

	// create a empty array for the chucked array items
	const chunked = [];
	// iterate through the arrays to get the elements
	for (let element of array) {
		// create a variable to retrieve the last element of the chunked array
		const last = chunked[chunked.length - 1];
		// if the last elements doesn't exist or the last array isn't equal to size
		if (!last || last.length === size) {
			// then push [elements] into chunked array
			chunked.push([ element ]);
		} else {
			// otherwise push elements into the last array
			last.push(element);
		}
	}
	// return the chunked array
	return chunked;
}

// You are given an array (which will have a length of at least 3) containing integers. The array is
//   comprised of either entirely odd integers or entirely even integers, except for a single
//   integer. Write a function numOutlier that takes the array and returns this outlier integer.
// Ex:
// numOutlier([2, 12, 4, 100, 4, 11, 2602, 36]) --> 11
// numOutlier([160, 3, 1719, 19, 11, 13, -21]) --> 160

// create a function numOutlier ---> 1 param array (argument)
function numOutlier(array) {
	// create an empty even array
	let even = [];
	// create an empty odd array
	let odd = [];
	// iterate through the array to get the elements
	for (let i = 0; i < array.length; i++) {
		// if array is even pusheven elements in the even array
		if (array[i] % 2 === 0) {
			even.push(array[i]);
		} else if (array[i] % 2 === 1) {
			// else if array is odd, push odd elements in the odd array
			odd.push(array[i]);
		}
	} // if the length of even array is greater than even --> return the odd array[0]
	if (even.length > odd.length) {
		return odd[0];
	}
}

// console.log(numOutlier([ 2, 12, 4, 100, 4, 11, 2602, 36 ]));
// console.log(numOutlier([ 160, 3, 1719, 19, 11, 13, -21 ])); //--> 160

// replace(/[^\w]/g, "").toLowerCase();

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
// console.log(anagrams('rail safety', 'fairy tales')); // True
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // True
// console.log(anagrams('Hi there', 'Bye there')); // False
// function anagrams(stringA, stringB) {
// 	// use helper functions to create two charMaps of stringA and B
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);
// 	// check to see if all characters are the same by checking the keys
// 	// of each charMap length if the length is not the same then false
// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// 		return false;
// 	}
// 	// iterate through charMap's to see if the keys match
// 	for (let char in aCharMap) {
// 		// if key:Value pairs do not match then its false
// 		if (aCharMap[char] !== bCharMap[char]) {
// 			return false;
// 		}
// 	}
// 	// otherwise, return true;
// 	return true;
// }

// create a helper function to iterate through the keys of the two strings
// helper will take in one argument --> the string
// function buildCharMap(str) {
// 	// inside the function create an empty object so we can
// 	const charMap = {};
// 	// iterate through the string and create key value pairs - based on occurences
// 	// if punctuation is used - regex to replace punctuation and remove them and change the case to lower
// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// 		// if character- key is present then increment the value if character isn't then set it value to 1
// 		if ((charMap[char] = charMap[char] + 1 || 1)) {
// 		}
// 	}
// 	// return charMap
// 	return charMap;
// }

function anagrams(stringA, stringB) {
	// create two variables and use the helper function to key:value the two strings
	const aCharMap = helper(stringA);
	const bCharMap = helper(stringB);
	// we need to compare if the string characters match in length -- compare using the keys
	// so if stringA.length !== stringB.length --> false
	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}
	// iterate through one of the strings if the the keys do not match its false
	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}
	// otherwise, it will be true
	// return true
	return true;
}

// create a helper function that will create a character Map for the two strings
// it will have one parameter --> str
function helper(str) {
	// create an object
	const charMap = {};
	// iterate through the string but, the string will include
	// regex for removing punctuation and spaces and convert string to lowercase
	for (let char of str.replace(/[^\w/]/g, '').toLowerCase()) {
		// CONDITIONAL - if the character(key) has a value --> increment value, or set the value to 1
		if ((charMap[char] = charMap[char] + 1 || 1)) {
		}
	}
	// return the object
	return charMap;
}

function findLongestWordLength(str) {
	// change the string into array
	const stringToArr = str.split(' ');
	// create a helper var for the max set --> 0
	let longestWord = 0;
	// iterate through the array
	for (let i = 0; i < stringToArr.length; i++) {
		// CONDITIONAL IF element > longestWord
		if (stringToArr[i].length > longestWord) {
			// reassign the max to w/e is the greater value
			longestWord = stringToArr[i].length;
		}
	}
	return longestWord;
}

// console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog')); // 6;

// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.Remember,
//  you can iterate through an array with a simple for loop, and access each member
//  with array syntax arr[i].

// return an array ---> make an array to put the max value in
// it will have subarrays --> within each subarray we need the max --> Math.max in for wach element
// either --> double iterate or use spread method
function largestOfFour(arr) {
	// create an empty array to push items into
	const newArr = [];
	// iterate through the array
	for (let i = 0; i < arr.length; i++) {
		// then find the max in each array an push inside the array
		newArr.push(Math.max(...arr[i]));
	}
	return newArr;
}

console.log(largestOfFour([ [ 4, 5, 1, 3 ], [ 13, 27, 18, 26 ], [ 32, 35, 37, 39 ], [ 1000, 1001, 857, 1 ] ]));

function anagram(stringA, stringB) {
	return cleaner(stringA) === cleaner(stringB);
}

// create a helper function
// remove none alpha types, change into an array, sort the array, then change back to string - lowecase
function cleaner(str) {
	return str.replace(/[^\w/]/g, '').split('').sort().join('').toLowerCase();
}
// console.log(anagram('rail safety', 'fairy tales')); // True
// console.log(anagram('RAIL! SAFETY!', 'fairy tales')); // True
// console.log(anagram('Hi there', 'Bye there')); // False

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));
function capitalize(str) {
	// create an empty array
	const words = [];
	// convert the string into an array by spliting based on spaces
	//then iterate through string array
	for (let word of str.split(' ')) {
		// uppercase the first letter of the word and
		// then add it to the word without the first index
		// push items into word array
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	// return the word array but convert it back into a string
	return words.join(' ');
}
