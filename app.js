/*function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

rollDie();

function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}

throwDice(6); */

function containsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false;
}

console.log(containsPurple([ 'red', 'blue', 'magenta' ]));
