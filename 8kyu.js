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
console.log(
	[ 1, 2, 3, 4 ].filter((num) => {
		return num > 3;
	})
); // [4]

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
	let sum = 0;
	arr.forEach((num) => (num > 0 ? (sum += num) : sum));
	return sum;
}

console.log(positiveSum([ 1, 2, 3, 4, 5 ])); //15
