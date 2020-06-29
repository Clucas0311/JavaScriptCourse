function disemvowel(string) {
	// your code here...
	// Create a empty string to create new string from the loop
	let str = '';
	// Use for loop to iterate through string and remove vowels from the string
	for (let i = 0; i < string.length; i++) {
		// toLowerCase each letter to check at each index to make it case insensitive
		if (
			string[i].toLowerCase() !== 'a' &&
			string[i].toLowerCase() !== 'e' &&
			string[i].toLowerCase() !== 'i' &&
			string[i].toLowerCase() !== 'o' &&
			string[i].toLowerCase() !== 'u'
		) {
			console.log((str += string[i]), i);
		}
	}

	return str;
}

//Comment in the code below to test your function:

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
console.log(disemvowel('hello world'));
