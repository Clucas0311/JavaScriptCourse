// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// To accomplish this translation, we can use our knowledge of loops. Let’s get started!

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.

let input = 'a whale of a deal';

const vowels = [ 'a', 'e', 'i', 'o', 'u' ];

const resultArray = [];

// Create a loop to iterate through each letter of the input variable text.
for (let i = 0; i < input.length; i++) {
	for (let j = 0; j < vowels.length; j++) {
		if (input[i] === vowels[j]) {
			resultArray.push(input[i]);
		}
	}
	if (input[i] === 'e') {
		resultArray.push(input[i]);
	}
	if (input[i] === 'u') {
		resultArray.push(input[i]);
	}
}
console.log(resultArray.join('').toUpperCase());
