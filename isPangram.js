/* Write a function isPangram which checks to see if a given sentenc contains every letter
of the alphabet - Make sure you ignore string casing */

function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}
console.log(isPangram('The five boxing wizards jump quickly'));
