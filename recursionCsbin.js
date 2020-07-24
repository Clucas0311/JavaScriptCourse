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
	// invoke countdown (n) so every time n is envoke it will
	// be the decremented value until it reaches zero (exclusive)
	countdown(n);
}

// it will print every number from the n = number down to 0

countdown(10);
