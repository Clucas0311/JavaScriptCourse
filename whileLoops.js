// What is a While Loop? (From MDN)
// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true
// The condition is evaluated before executing the statement
// Will often be referred to as a "while loop"

function loopASequence(start, end) {
	// create a loop which runs if start is less than or equal to end
	while (start <= end) {
		// log current value of start to console
		console.log(start);
		// increment value of start
		start++;
	}
}

loopASequence(2, 5);
// console output:
// 2
// 3
// 4
// 5

loopASequence(3, 7);
// console output:
// 3
// 4
// 5
// 6
// 7
