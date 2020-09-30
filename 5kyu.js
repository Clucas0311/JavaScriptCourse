// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid. The function
// should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
	// create a variable named match assign to 0
	let match = 0;
	// iterate through the string
	for (let i = 0; i < parens.length; i++) {
		// if the match is less than 0
		if (match < 0) {
			// return -1
			return false;
		}
		// if the element is '('
		if (parens[i] === '(') {
			// then increment match
			match++;
			// if the element is ')'
		} else if (parens[i] === ')') {
			// then decrement
			match--;
		}
	}
	// if count equals zero
	if (match === 0) {
		// then true
		return true;
		// otherwise
	}
	// false
	return false;
}

console.log(validParentheses('()')); // true
console.log(validParentheses('())')); //false
