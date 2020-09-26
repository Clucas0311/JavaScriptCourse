// Write a method sum that takes an array of numbers and returns the sum of the numbers.
//These may be integers or decimals for Ruby and any instance of Num for Haskell.
// The numbers can also be negative. If the array does not contain any numbers then you
// should return 0.

function sum(numbers) {
	return numbers.reduce((prev, next) => prev + next, 0);
}

console.log(sum([ 1, 5.2, 4, 0, -1 ])); //9.2
