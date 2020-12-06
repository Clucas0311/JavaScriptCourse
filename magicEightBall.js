/*  Define a variable called userName and set it equal to an empty string */
userName = '';

/* Use tenary expression that decides what to do if the user enters a name or not. */
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');

/* Create a variable named userQuestion.The value of the variable should be the question the user wants to ask the Magic Eight ball. */

userQuestion = "What's in your wonderball?";

/* Print out the userQuestion with the userName */
console.log(`Hey ${userName}, ${userQuestion}`);

/* Generate a number from 0 to 7 - Create another variable and name it randomNumber set it equal to the random expression. */
let randomNumber = Math.floor(Math.random() * 8);

/* Create a variable called eightBall and set it equal to an empty string */
let eightBall = '';

switch (randomNumber) {
	case 0:
		eightBall = 'It is certain';
		break;
	case 1:
		eightBall = 'It is decidedly so';
		break;
	case 3:
		eightBall = 'Reply hazy try again';
		break;
	case 4:
		eightBall = 'Cannot predict now';
		break;
	case 4:
		eightBall = 'Do not count on it';
		break;
	case 5:
		eightBall = 'My sources say no';
		break;
	case 6:
		eightBall = 'Outlook not so good';
		break;
	default:
		eightBall = 'Signs point to yes';
		break;
}
console.log(eightBall);
