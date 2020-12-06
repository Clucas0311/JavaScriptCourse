/* Create a variable named myAge and set it equal to your age as a number */

let myAge = 29;

/* Create a variable called earlyYears and save the value to 2 - use let, value will be changed */
let earlyYears = 2;

/* Multiply 10.5 to earlyYears and reassign it to earlyYears */
earlyYears *= 10.5;

/* Since the first two years were acocunted for take the myAge variable and subtract 2 from it and set the result = later Years */
let laterYears = myAge - 2;

/* Multiply laterYears by 4 to calculate the number of dog years use *= to multiply in onestep */
laterYears *= 4;

/* Add earlyYears + laterYears and store it in myAgeinDogYears variable */
let myAgeInDogYears = earlyYears + laterYears;
/* Write your name as a string and use the toLowerCaseMethod() to make it lowercase, and store it the variable myName. */
let myName = 'Charles'.toLowerCase();

/* Write the statement My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years. use the variables created and sub them in with back ticks */
console.log(
	`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
