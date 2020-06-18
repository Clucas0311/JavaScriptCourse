let raceNumber = Math.floor(Math.random() * 1000);

/* Create a variable to indicate if a runner registered early or not - set it equal to a boolean value. */
let runnerRegistered = false;

/* Create a variable for the runners age and set it equal to a number */
runnerAge = 18;

/* Create a control flow that checks whether the runner is an adult and registered early - Add 1000 to their raceNumber it is true */
if (runnerAge > 18 && runnerRegistered) {
	raceNumber += 1000;
}

/* Create a seperate control flow, that will check age and registration time to determine racetime if > 18 and registered early log a statement to the console telling them that they will race at 9:30. Include thier raceNumber 

Write an else if statement if the runner is over 18 and did not register - They will race at 11 am 

Youth registrants run at 12:30 pm (regardless of registration)”

*/
if (runnerAge > 18 && runnerRegistered) {
	console.log(`Early Registrator - Race number: ${raceNumber} will run at 9:30 am.`);
} else if (runnerAge > 18 && runnerRegistered === false) {
	console.log(`Late Adult Registrator  - Race number: ${raceNumber} will run at 11:00 am.`);
} else if (runnerAge < 18) {
	console.log(`Youth Registrator - You are under 18 and will run at 12:30 pm. Your Race Number is: ${raceNumber}`);
} else {
	console.log('18 year old runners. Please see the registration desk.');
}
