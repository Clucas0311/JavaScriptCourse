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

console.log(warnTheSheep([ 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep' ]));
