/*if (1 == 1) {
	console.log(true);
}*/

/*let num = 37;
if (num % 2 !== 0);
{
	console.log('ODD NUMBER!');
} */

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 needs improvement
// anything else - wtf?
/*let rating = 213;
if (rating === 3) {
	console.log("YOU'RE A SUPERSTAR!");
} else if (rating === 2) {
	console.log('MEETS EXPECTATIONS');
} else if (rating === 1) {
	console.log('NEEDS IMPROVEMENT');
} else {
	console('INVALID RATING!');
}
*/

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
	console.log(`Congrats, you have a new high score of ${userScore}`);
	highScore = userScore; // update highScore to the new userScore
} else {
	console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}
