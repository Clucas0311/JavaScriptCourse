// Challenge 1
// Write a recursive function countdown that accepts a positive integer
// n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.

// create a function named countdown that takes in one argument
//that will be a positive number we will name n - parameter
function countdown(n) {
	//BASE Case: condition that will end our function
	// if the number is less than or equal to zero; then just return to end the function
	if (n <= 0) return;

	// log out n to console.
	console.log(n);
	// decrease n
	n--;
	// recursive case
	// invoke countdown (n) so every time n is invoke it will
	// be the decremented value until it reaches zero (exclusive)
	countdown(n);
}

// it will print every number from the n = number down to 0

// countdown(10);

//Write a recursive function sum that calculates the sum of an array of integers.

// create a recursive function named sum it will have one parameter named array
function sum(array) {
	// BASE CASE:
	// Condition IF
	// when array's length equals zero then we will return 0;
	if (array.length === 0) return 0;

	// recursive case
	//  we will add each element of the array to the first index while removing the first index
	// on each function invocation.
	return array[0] + sum(array.slice(1));
}

// uncomment these to check your work
// console.log(sum([ 1, 1, 1 ])); // -> returns 3
// console.log(sum([ 1, 2, 3, 4, 5, 6 ])); // -> returns 21

// Challenge 3
// Write a recursive function palindrome that accepts a string as an input
// and returns true if that string is a palindrome (the string is the same
//     forward and backwards). The input string may have punctuation and symbols,
//       but that should not affect whether the string is a palindrome.

// create a recursive function named palindrome --> string (parameter)
function palindrome(string) {
	// base conditon:
	// we need to create a regular expression to get only alphanumeric
	//symbols set that to a variable
	string = string.replace(/[^a-z0-9]/i, '').toLowerCase();
	// the length of the word is zero / one to ==> end the function retrun true
	if (string.length === 0 || string.length === 1) return true;
	// if the word at first index does not = word at last index return false;
	if (string[0] !== string[string.length - 1]) return false;
	// recursive case
	// call function - as arguments and slice out the first and last indices
	return palindrome(string.slice(1, string - 2));
}
// console.log(palindrome('Anne, I vote more cars race Rome-to-Vienna')); //-> true
// console.log(palindrome('llama mall')); //-> true
// console.log(palindrome('jmoney')); //-> false

//Challenge 4
//Write a recursive function isPrime that determines if a number is
//  prime and returns true if it is.

// Prime Numbers are:
// Natural Numbers  (1, 2, 3, ...)
// Natural Numbers greater than 1 and not a product of 2
// Divisible by exactly two numbers (itself and one)

function isPrime(num, div = 2) {
	// BASE CASE:
	// if number is less than two it is not prime
	// if number == 2 it is prime
	if (num <= 2) return num == 2 ? true : false;
	// if the number has a remainder it is false
	// if the number has no remainder then return false
	// Prime numbers can't be divisible by two
	if (num % div == 0) return false;
	// if the divisor is larger than the number then it is most likely a prime number
	// prime has only two divisors one and itself  so as number increase
	// all solutions have failed so only other number it can divide into is itself
	if (div * div > num) return true;
	// RECURSIVE case:

	// invoke the function and increase the divisor if all cases fail.
	return isPrime(num, div + 1);
}

console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false
console.log(isPrime(11)); // -> false
