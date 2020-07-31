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

console.log(getOccurrence(arr, 1)); // 2
console.log(getOccurrence(arr, 3)); // 3

// create a function that reverses the number

function reverseNum(num) {
	// convert number into a string
	let revNum = num + '';
	revNum.split('').reverse().join('');

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
console.log(reverseNum(72));

function reverse(str) {
	// create a variable called reverse set it equal to an empty string
	let reverse = '';
	// create a loop and iterate through the string and add the string at each interval to the reverse string
	for (let i = 0; i < str.length; i++) {
		// reassign the variable of reverse to the concatenated string
		reverse = str[i] + reverse;
	}
	return reverse;
}
console.log(reverse('apple')); //=== 'leppa');
console.log(reverse('hello')); //=== 'olleh');
console.log(reverse('Greetings!')); //=== '!sgniteerG');
