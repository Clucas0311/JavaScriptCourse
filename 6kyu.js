// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers. The array is either
// entirely comprised of odd integers or entirely comprised of even integers
// except for a single integer N. Write a method that takes the array as an
// argument and returns this "outlier" N.
function findOutlier(integers) {
	// filter the integer for the even and odd elements
	const even = integers.filter((element) => element % 2 === 0);
	const odd = integers.filter((element) => element % 2 !== 0);
	// if the length of even equals 1 return the even[0] otherwise odd[0]
	return even.length === 1 ? even[0] : odd[0];
}

// console.log(findOutlier([0, 1, 2])) // 1

// If we list all the natural numbers below 10 that are multiples
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples
// of 3 or 5 below the number passed in.
function solution(number) {
	// if number is negative
	if (number < 0) {
		// return 0
		return 0;
	}
	// create an empty array
	const container = [];
	// iterate through starting at 1 ending and not including number
	for (let i = 1; i < number; i++)
		// if num % 3  or number % 5
		if (i % 3 === 0 || i % 5 === 0) {
			// push contents elements into container
			container.push(i);
		}
	// add the elements up and return the number
	return container.reduce((prev, next) => prev + next, 0);
}

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

function digital_root(n) {
	// BASE CASE:
	// if n is less than 10 --> return n
	if (n < 10) return n;
	// RECURSIVE CASE:
	// convert n to a string --> then into an array --> then back into a number
	// return digitial_root(with the sum)
	// then sum the digits up
	return digital_root(
		String(n)
			.split('')
			.reduce((prev, next) => prev + Number(next), 0)
	);
}

// console.log(digital_root(16)); // 7;

// Your task, is to create NxN multiplication table, of size
// provided in parameter.

multiplicationTable = function (size) {
	// create an empty array container to push array elements into
	const tableContainer = [];
	// first loop iterate starting at 1 ending at size increment
	for (let i = 1; i <= size; i++) {
		// create a row array container to push elements into
		const row = [];
		// iterate through the size starting at 1
		for (let j = 1; j <= size; j++) {
			// push into array i * j
			row.push(i * j);
		}
		// push into container array
		tableContainer.push(row);
	}
	// return container
	return tableContainer;
};

console.log(multiplicationTable(3)); //[[1,2,3], [2,4,6], [3,6,9]]
