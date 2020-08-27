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

// console.log(largestOfFour([ [ 4, 5, 1, 3 ], [ 13, 27, 18, 26 ], [ 32, 35, 37, 39 ], [ 1000, 1001, 857, 1 ] ]));

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
// console.log(capitalize('a short sentence'));
// console.log(capitalize('a lazy fox'));
// console.log(capitalize('look, it is working!'));
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

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	// first iteration will be the rows
	for (let rows = 0; rows < n; rows++) {
		// declare a variable stairs that will be reassigned
		let stairs = '';
		// second iteration will be the columns
		for (let column = 0; column < n; column++) {
			// CONDITIONAL
			// IF column less than/equal to the row
			if (column + rows > n - 2) {
				// then concatanate "#"
				stairs += '#';
			} else {
				// Otherwise, concat a space to the string
				stairs += ' ';
			}
		}
		// print out each statement through each iteration
		console.log(stairs);
	}
}

// steps(2);

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// create a function pyramid --> one parameter n --> a number argurment
function pyramid(n) {
	// create a variable to calculate the midpt.
	const midpoint = Math.floor((2 * n - 1) / 2);
	// iterate through the rows from 0 to n
	for (let row = 0; row < n; row++) {
		// create a varible levels --> value "" concat with empty space or #
		let levels = '';
		// iterate through columns from 0 to n times 2 subtract 1
		for (let column = 0; column < 2 * n - 1; column++) {
			// CONDITIONAL
			// If midpoint minus row is less than column and midpoint plus row is greater than column
			// add a '#'
			if (midpoint - row <= column && midpoint + row >= column) {
				levels += '#';
			} else {
				// else..
				// Add a ' '
				levels += ' ';
			}
		}
		// print the levels variable during each iteration
		console.log(levels);
	}
}

// pyramid(6);

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// console.log(vowels('Hi There!'));
// console.log(vowels('Why do you ask?'));
// console.log(vowels('Why?'));
function vowels(str) {
	// create a counter variable that will count the characters that are vowels in str
	let counter = 0;
	// create an array with the vowels as elements
	const vowelArr = [ 'a', 'e', 'i', 'o', 'u' ];
	// iterate through the str when its lower case
	for (let char of str.toLowerCase()) {
		// CONDITIONAL:
		// IF vowel array includes any character in the str
		if (vowelArr.includes(char)) {
			// then increment counter
			counter++;
		}
	}
	// return counter
	return counter;
}

// Given an array nums. We define a running sum of an array
// as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// first create a function named runningSum --> nums
function runningSum(nums) {
	// create counter add to each element until the array is complete --> push result inside
	let counter = 0;
	// iterate through the nums.length using map
	const newArr = nums.map((element) => (counter += element));
	// return newArr
	return newArr;
}
// console.log(runningSum([ 1, 2, 3, 4 ])); // [1, 3, 6, 10]

//disemvowel
// Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u'
//from it, and return the new string.

function disemvowel(S) {
	// return S.toLowerCase().replace(/[aeiou]/gi, '');
	// // create an array with vowel charaters as elements
	const vowelArray = [ 'a', 'e', 'i', 'o', 'u' ];
	// // convert the S into an array
	// // filter string Array for its elements to check if
	// // any of its elements are found in the vowel array
	// // if indexOf is false then return the newArray
	// // convert the array back into a string
	return S.toLowerCase().split('').filter((element) => vowelArray.indexOf(element) === -1).join('');
}

console.log(disemvowel('leetcodeisacommunityforcoders'));

// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit
// already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
// Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit

function convertToF(celsius) {
	let fahrenheit = celsius * (9 / 5) + 32;
	return fahrenheit;
}

// console.log(convertToF(30));

// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string
// (second argument, target).This challenge can be solved with the .endsWith()
// method, which was introduced in ES2015. But for the purpose of this challenge,
// we would like you to use one of the JavaScript substring methods instead.

// create a function called confirmEnding --> (str, target)
function confirmEnding(str, target) {
	// CONDITIONAL
	// IF The target is included in str when sliced
	// use substr to slice
	// want the ending so its negative target
	if (str.substr(-target.length) === target) {
		// then the ending is confirmed --> true
		return true;
	}
	// else --> it doesn't match ending --> false
	return false;
}
// console.log(confirmEnding('Bastian', 'n'));

// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

// create a function repeatStringNumTimes(str, num)
function repeatStringNumTimes(str, num) {
	// create a helper variable set equal to an empty string
	let repeater = '';
	// itreate starting at zero and ending num is greater than the index
	for (let i = 0; i < num; i++) {
		// concatanate helper variable with str --> until the num is greater
		repeater += str;
	}
	// return the helper variable
	return repeater;
}

// console.log(repeatStringNumTimes('abc', 3));

String.prototype.toJadenCase = function() {
	// convert  string it into an array split by spaces
	// create a new array to push uppercase characters in
	// iterate through the new array
	// uppercase the first index and add the slice string with the first index removed
	return this.split(' ').map((element) => element[0].toUpperCase() + element.substr(1)).join(' ');
};

// Write a function that takes a string as input and reverse only the
//  vowels of a string.

// create a function named reverseVowels --> str
function reverseVowels(str) {
	// convert the string to an array --> split ''
	const strToArr = str.split('');
	// create a helper function to swap the variables
	// create a function --> arr, index1, index2

	function swap(arr, index1, index2) {
		// inside the function [arr[index1], arr[index2]] = [ arr[index2], arr[index1]]
		return ([ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ]);
	}
	// create a array with vowel characters
	const arrOfVowel = [ 'a', 'e', 'i', 'o', 'u' ];
	// create a two pointer
	// left will be the left side of the string --> 0
	let left = 0;
	// right will be the right side which will be array.length - 1 --> last element of the array
	let right = strToArr.length - 1;
	// while the left side is less than the right the condition will keep running
	while (left < right) {
		// if the vowel array on left does not match any string elements then increment
		if (arrOfVowel.indexOf(strToArr[left].toLowerCase()) === -1) {
			left++;
			continue;
		}
		// if the vowel array on the right doesnt not match string array elements then decrement
		if (arrOfVowel.indexOf(strToArr[right].toLowerCase()) === -1) {
			right--;
			continue;
		}
		// invoke the swap helper function --> strArray, left, right
		swap(strToArr, left, right);
		// left increment
		left++;
		// right decrement
		right--;
	}
	// return the string Array but join it back to a string
	return strToArr.join('');
}

console.log(reverseVowels('leetcode'));

// intersection of two arrays
// create a function called intersection that takes in two params (arr2, arr1)
function intersection(arr1, arr2) {
	// iterate through the array using the filter method
	// if the array1 includes elements that match array two --> creates a new array
	return (
		arr1
			.filter((element) => arr2.includes(element))
			// then remove duplicates by filtering each element of new array
			// and checking if new array has the element at at a certain index
			.filter((ele, index, newArr) => newArr.indexOf(ele) === index)
	);
}
console.log(intersection([ 1, 2, 2, 1 ], [ 2, 2 ]));

// create a function intersect ---> two parameters arr1, arr2
function intersect(arr1, arr2) {
	// create a hashmap --> to count the number of occurences each number occurs
	// create an empty object
	const numMap = {};
	// iterate through the first array
	arr1.forEach((element) => {
		// if value is in array - increment or // if value doesn't exist set value to 1
		numMap[element] = numMap[element] + 1 || 1;
	});
	// create a new Array to push like elements inside
	const newArr = [];
	//iterate through the array2
	arr2.forEach((element) => {
		//if arr2 elements are values of numMap and the value is a duplicate
		if (numMap[element] && numMap[element] > 0) {
			// then push elements inside the new Array
			newArr.push(element);
			// decrease the value so multiples wont exceed.
			numMap[element]--;
		}
	});
	// return new Array
	return newArr;
}
console.log(intersect([ 1, 2, 2, 1 ], [ 2, 2 ]));

// Given an array of integers arr, write a function that returns true if and only
// if the number of occurrences of each value in the array is unique.

// create a function named uniqueOccurences --> arr
function uniqueOccurences(arr) {
	// create a hashmap
	// declare a variable numMap and set it equal to an empty object
	const numMap = {};
	// iterate through the array
	for (let num of arr) {
		// if numMap[arr] has a value then add 1 or just set the value to 1
		numMap[num] = numMap[num] + 1 || 1;
	}
	// create a variable called values and set it to an array of the numMap's values
	// sort the numbers  from ascending order
	const value = Object.values(numMap).sort();

	// create a variable to compare the indices set it equal to zero
	let j = 0;
	// iterate through the values array but start i at 1
	for (let i = 1; i < value.length; i++) {
		// if values at j index is equal to values at i index
		if (value[j] === value[i]) {
			// then solution is false
			return false;
		}
		// increment j so during each iteration it will be a new value
		j++;
	}
	// else the solution will be true - opposite values
	return true;
}

// console.log(uniqueOccurences([ 1, 2, 2, 1, 1, 3 ]));

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
	// create an variable and assign to an empty object - use as a hash table
	const numMap = {};
	// iterate through the nums array
	for (let i = 0; i < nums.length; i++) {
		// create a const variable for the element
		const newElement = nums[i];
		// create a difference variable subtracting the target from the element --> a number
		const difference = target - newElement;
		// if the difference variable is in the object
		// then return the array with the index
		if (numMap[difference] !== undefined) {
			return [ numMap[difference], i ];
			// otherwise
			// return the element as the key and index as a value
		} else {
			numMap[newElement] = i;
		}
	}
}

console.log(twoSum([ 3, 2, 4 ], 6));
