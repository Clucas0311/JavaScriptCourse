// Write a method sum that takes an array of numbers and returns the sum of the numbers.
//These may be integers or decimals for Ruby and any instance of Num for Haskell.
// The numbers can also be negative. If the array does not contain any numbers then you
// should return 0.

function sum(numbers) {
	return numbers.reduce((prev, next) => prev + next, 0);
}

// console.log(sum([ 1, 5.2, 4, 0, -1 ])); //9.2

// Wolves have been reintroduced to Great Britain. You are a sheep farmer,
// and are now plagued by wolves which pretend to be sheep. Fortunately,
// you are good at spotting them.Warn the sheep in front of the wolf that it is about
// to be eaten. Remember that you are standing at the front of the queue which is at the
// end of the array:

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep".
// Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N
// is the sheep's position in the queue.

function warnTheSheep(index) {
	// find the location of the wolf element
	const findWolf = queue.indexOf('wolf');
	// if the index equals the index before wolf
	// otherwise
	return findWolf === queue.length - 1
		? 'Pls go away and stop eating my sheep'
		: `Oi! Sheep number ${queue.length - 1 - findWolf}! You are about to be eaten by a wolf!`;
}

// Given a string of arbitrary length with any ascii characters.
// Write a function to determine whether the string contains the whole word "English".
function spEng(sentence) {
	// convert the sent into lowercase and check to see if it includes english
	return sentence.toLowerCase().includes('english');
}
// console.log(spEng('english')); //true

//
var countSheep = function(num) {
	// create a string to concatanate the sentences together
	let sheeps = '';
	// loop through ending at num
	for (let i = 1; i <= num; i++) {
		// add the string during each iteration
		sheeps += `${i} sheep...`;
	}
	// return new string
	return sheeps;
};
// console.log(countSheep(2)); // "1 sheep...2 sheep..."

// Write a function that takes an array of words and smashes them together into a
// sentence and returns the sentence. You can ignore any need to sanitize words or add
// punctuation, but you should add spaces between each word. Be careful, there shouldn't
// be a space at the beginning or the end of the sentence!
function smash(words) {
	return words.join(' ');
}
// console.log(smash([ 'hello', 'world' ])); //"hello world"

// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n, m) {
	// edge case if m < 0
	if (m <= 0) {
		// return 'INVALID'
		return 'INVALID';
	}
	// create a sum variable to total the num
	let sum = 0;
	// loop starting at n and ending and excluding m
	for (let i = n; i < m; i++) {
		// if i is divisible by n
		if (i % n === 0) {
			// then add i to sum
			sum += i;
		}
	}
	// return sum
	return sum;
}
// console.log(sumMul(0, 0)); //"INVALID"
// console.log(sumMul(2, 9)); //20)

// The pipes connecting your level's stages together need to be fixed before
// you recieve any more complaints. Each pipe should be connecting,
// since the levels ascend, you can assume every number in the sequence after
// the first index will be greater than the previous and that there will be no duplicates.
// #Task Given the a list of numbers, return the list so that the values increment by 1
// for each index up to the maximum value.

function pipeFix(numbers) {
	// create an array
	let nums = [];

	// iterate starting at index 0 and ending at including the last element
	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
		nums.push(i);
	}
	// return new array
	return nums;
}

// console.log(pipeFix([ 6, 9 ])); //[6,7,8,9]

function countToTen(num) {
	if (num === 10) return 10;
	console.log(num);
	num++;
	return countToTen(num);
}

// console.log(countToTen(1));
// What we want to implement is Array.prototype.filter() function,
// just like the existing Array.prototype.filter(). Another similar function is
// _.filter() in underscore.js and lodash.js.
// The usage will be quite simple, like:

Array.prototype.filter = function(func) {
	const arr = [];
	for (let i = 0; i < this.length; i++) {
		if (func(this[i])) {
			arr.push(this[i]);
		}
	}
	return arr;
};
// console.log(
// 	[ 1, 2, 3, 4 ].filter((num) => {
// 		return num > 3;
// 	})
// ); // [4]

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
	let sum = 0;
	arr.forEach((num) => (num > 0 ? (sum += num) : sum));
	return sum;
}

// console.log(positiveSum([ 1, 2, 3, 4, 5 ])); //15

// Removing the first and last elements
function removeChar(str) {
	return str.slice(1, -1);
}

// console.log(removeChar('eloquent')); //'loquen'

// Write a function called repeat_str which repeats the given string src
// exactly count times

function repeatStr(n, s) {
	// create a newStr variable and assign to an empty string to concat elements
	let newStr = '';
	// iterate through starting at 0 and ending at number
	for (let i = 0; i < n; i++) {
		// join together the strings
		newStr += s;
	}
	// return the new str
	return newStr;
}

// console.log(repeatStr(3, '*')); //"***"

// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

var summation = function(num) {
	// create a sum varible to sum up numbers
	let sum = 0;
	// iterate through starting at 1 and including num
	for (let i = 1; i <= num; i++) {
		// add sum to each index
		sum += i;
	}
	// return sum
	return sum;
};
// console.log(summation(8)); // 36

// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array
// (true means present).
function countSheeps(arrayOfSheep) {
	// TODO May the force be with you
	return arrayOfSheep.filter((truthy) => truthy === true).length;
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

// console.log(countSheeps(array1)); // 17

// Create a function that checks if a number n is divisible by two numbers
// x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
	return n % x === 0 && n % y === 0 ? true : false;
}
// console.log(isDivisible(12, 3, 4)); //true

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
	switch (operation) {
		case '+':
			return value1 + value2;
			break;
		case '-':
			return value1 - value2;
			break;
		case '/':
			return value1 / value2;
			break;
		case '*':
			return value1 * value2;
	}
}
// console.log(basicOp('+', 4, 7)); //11
// console.log(basicOp('-', 15, 18)); //-3;
// console.log(basicOp('*', 5, 5)); //25
// console.log(basicOp('/', 49, 7)); //7

// Complete the square sum function so that it squares each number passed
// into it and then sums the results together.

function squareSum(numbers) {
	// return numbers.map((element) => element ** 2).reduce((prev, next) => prev + next, 0);
	return numbers.reduce((prev, next) => prev + next ** 2, 0);
}
// console.log(squareSum([ 1, 2 ])); //5
// console.log(squareSum([ 0, 3, 4, 5 ])); // 50

// Given a random non-negative number, you have to return the digits of this
// number within an array in reverse order.
function digitize(n) {
	// first convert num in to a string, then to an array reverse, then back into a num
	return n.toString().split('').reverse().map((num) => Number(num));
}
// console.log(digitize(35231)); //[1,3,2,5,3]

// Write a function to convert a name into initials. This kata strictly takes
// two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
	return name.toUpperCase().split(' ').map((intial) => intial[0]).join('.');
}

// console.log(abbrevName('Sam Harris')); //"S.H"

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
	return `found the needle at position ${haystack.indexOf('needle')}`;
}
// var haystack_1 = [ '3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false ];
// console.log(findNeedle(haystack_1));

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the
// second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.
function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) return [];
	// filter out the positives and get the length
	let positive = input.filter((element) => element > 0).length;
	// filter out the negatives and total them up
	let negative = input.filter((element) => element < 0).reduce((sum, ele) => sum + ele, 0);
	// return the new array
	return [ positive, negative ];
}
// console.log(countPositivesSumNegatives([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 ])); // [10, -65].

// Sum all the numbers of the array (in F# and Haskell you get a list) except
// the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge,
// 	even if there are more than one with the same value!)

function sumArray(array) {
	// if the array is null or no elements or one element
	if (!array || !array.length || array.length === 1) {
		// then return 0
		return 0;
	}
	// // sort the array
	// let sorted = array.sort((a, b) => a - b);
	// // create a new variable slicing out the first and last elements
	// let sliced = sorted.slice(1, -1);
	// // sum up the elements
	// return sliced.reduce((sum, currVal) => sum + currVal, 0);
	return array.sort((a, b) => a - b).slice(1, -1).reduce((sum, currVal) => sum + currVal, 0);
}

// console.log(sumArray([ 6, 2, 1, 8, 10 ])); // 16

// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
function invert(array) {
	//return array.map((element) => (element === 0 ? element : -element));
	return array.map((element) => -element);
}

// console.log(invert([ 1, 2, 3, 4, -5 ])); //[-1,-2,-3,-4,-5]

// Write function avg which calculates average of numbers in given list.
function find_average(array) {
	let sum = array.reduce((prev, next) => prev + next, 0);
	return Math.floor(sum / array.length);
}

// console.log(find_average([ 1, 1, 1 ])); // 1

// Create a function with two arguments that will return an array of the first
// (n) multiples of (x).Assume both the given number and the number of times to
// count will be positive numbers greater than 0.

function countBy(x, n) {
	const arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i * x);
	}

	return arr;
}

// console.log(countBy(2, 5)); // [2,4,6,8,10]

// This kata is about multiplying a given number by eight if it is an even
// number and by nine otherwise.

function simpleMultiplication(number) {
	return number % 2 === 0 ? number * 8 : number * 9;
}
// console.log(simpleMultiplication(2)); //16

// Given a string, you have to return a string in which each character
// (case-sensitive) is repeated once.
function doubleChar(str) {
	// convert the str into an array the create a new array and create string
	// elements of duplicate letters
	// join the string back to a string
	return str.split('').map((letter) => `${letter}${letter}`).join('');
}
// console.log(doubleChar('Adidas')); //"AAddiiddaass"

// A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of
// powerful dragons! each dragon takes 2 bullets to be defeated, our hero has
// no idea how many bullets he should carry.. Assuming he's gonna grab a specific
// given number of bullets and move forward to fight another specific given number
// of dragons, will he survive?
function hero(bullets, dragons) {
	// if dragon times two is less than or equal to bullets
	if (dragons * 2 <= bullets) {
		// return true
		return true;
		//otherwise
	}
	// return false
	return false;
}
// console.log(hero(1500, 751)); //false

// Given 2 strings, a and b, return a string of the form short+long+short,
// with the shorter string on the outside and the longer string on the inside.
// The strings will not be the same length, but they may be empty

function solution(a, b) {
	// if a is greater than b
	if (a.length > b.length)
		// return b + a + b
		return `${b}${a}${b}`;
	// otherwise
	// return a + b + a
	return `${a}${b}${a}`;
}

// console.log(solution('Soon', 'Me')); //'MeSoonMe'

// All of the animals are having a feast! Each animal is bringing one dish.
// There is just one rule: the dish must start and end with the same letters
// as the animal's name. For example, the great blue heron is bringing garlic naan
// and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments
// and returns true or false to indicate whether the beast is allowed to bring the dish to
// the feast.Assume that beast and dish are always lowercase strings,
// and that each has at least two letters.
// beast and dish may contain hyphens and spaces, but these will not appear at the beginning
// or end of the string.
// They will not contain numerals.

function feast(beast, dish) {
	// if the first character matches the first and last match character of dish
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

//   console.log(feast("great blue heron", "garlic naan")) // true

// Given a number n, return the number of positive odd numbers below n, EASY!
function oddCount(n) {
	return Math.floor(n / 2);
}

// console.log(oddCount(15)); // 7

//  Complete the function which takes two arguments and returns all numbers which
//  are divisible by the given divisor. First argument is an array of numbers and the
//  second is the divisor.

function divisibleBy(numbers, divisor) {
	// iterate using filter
	// if the element is divisble by divisor
	// return element
	return numbers.filter((element) => element % divisor === 0);
}

// console.log(divisibleBy([ 1, 2, 3, 4, 5, 6 ], 2)); // [2,4,6]

// Implement a function named generateRange(min, max, step), which
// takes three arguments and generates a range of integers from min to max,
// with the step. The first integer is the minimum value, the second is the
// maximum of the range and the third is the step. (min < max)

function generateRange(min, max, step) {
	// create an array container to put elements into
	const container = [];
	// iterate start at min and end at max incrementing step
	for (let i = min; i <= max; i += step) {
		// push into container i
		container.push(i);
	}
	// return container
	return container;
}
// console.log(generateRange(2, 10, 2)); // [2,4,6,8,10]

function shortcut(string) {
	// create a vowel regex
	const vowels = /[aeiou]+/g;
	// replace the characters that contain the vowel with ''
	return string.replace(vowels, '');
}

// console.log(shortcut('codewars')); // --> cdwrs
// console.log(shortcut('goodbye')); // --> gdby

// Write a function that rearranges an integer into its largest possible value.
function superSize(num) {
	// convert the num into a string then into an array
	num = String(num).split('');
	// convert back into a number
	const newNum = num.map((element) => Number(element));
	// sort in ascending order reverse then convert back into
	// a string then back into a number
	return Number(newNum.sort((a, b) => a - b).reverse().join(''));
}
// console.log(superSize(123456)); //654321
// console.log(superSize(105)); // 510
// console.log(superSize(12)); // 21

// Write a function named setAlarm which receives two parameters. The first parameter, employed,
// is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation
// (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
// Examples:

function setAlarm(employed, vacation) {
	// if employed === true and vacation === false
	if (employed === true && vacation === false) {
		// return true
		return true;
	}
	// otherwise
	// return false
	return false;
}

console.log(setAlarm(true, true)); //-> false
console.log(setAlarm(false, true)); //-> false
console.log(setAlarm(false, false)); //-> false
console.log(setAlarm(true, false)); //-> true

// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.

function checkForFactor(base, factor) {
	// if base divided by factor equals 1
	// return false
	return base % factor === 0 ? true : false;
}
console.log(checkForFactor(10, 2)); //true))
console.log(checkForFactor(63, 7)); //true)
console.log(checkForFactor(2450, 5)); //true)
console.log(checkForFactor(24612, 3)); //true
