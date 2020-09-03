// if (/*some expression which evaluates to true or false*/) {

//   /*some action to be taken in the event
//   that the expression above evaluates to true*/

// }

// We are going to complete a function that takes in one parameter, determines if that parameter is
// defined, and returns a specific string if it is. Your function should use an if statement to determine
//  if the input parameter is defined, and if it is, should return the string 'Input is defined'.
//   Below are examples of the code running, assuming that you will have completed the described function:
//   isItUndefined.

function isItUndefined(param) {
	// if param is defined (or not undefined)
	if (param !== undefined) {
		// return 'Input is defined'
		return `Input is defined`;
	}
}
// let result1 = isItUndefined('anything');
// console.log('should log "Input is defined":', result1);

// let result2 = isItUndefined();
// console.log('Should log undefined, because function returned nothing:', result2);

// We are going to complete a function that takes in two parameters, both numbers representing totals
// for apples and oranges, determines if there are fewer apples than oranges, and if so, returns
// a specific string. Your function should use an if statement to determine if there are fewer apples
//  than oranges, and if there are, should return the string 'There are fewer apples than oranges'.
//  Below are examples of the code running, assuming that you will have completed the described function:
//  fewerApples.

function fewerApples(apples, oranges) {
	// if there are fewer apples than oranges
	if (apples < oranges) {
		// return 'There are fewer apples than oranges'
		return `There are fewer apples than oranges`;
	}
}

// var result1 = fewerApples(4, 7);
// console.log('should log "There are fewer apples than oranges":', result1);

// var result2 = fewerApples(19, 12);
// console.log('Should log undefined, because function returned nothing:', result2);

// We are going to complete a function that takes in one parameter, a string representing
//  a password, determines if the string is both longer than 4, and less than 15, characters
//  long, and if it is returns a specific string. Your function should use an if statement
//  to determine if the input string is both long enough, and not too long, and if it is,
//  should return the string 'Password length is valid'. Below are examples of the code running,
//  assuming that you will have completed the described function: validLengthPassword.

function validLengthPassword(password) {
	// if password length is greater than 4 and less than 15
	if (password.length > 4 && password.length < 15) {
		// return 'Password length is valid'
		return `Password length is valid`;
	}
}

// var result1 = validLengthPassword('passwordyfurdy');
// console.log('should log "Password length is valid":', result1);

// var result2 = validLengthPassword('pass');
// console.log('Should log undefined, because function returned nothing:', result2);

// var result3 = validLengthPassword('this is clearly too long of a password');
// console.log('Should log undefined, because function returned nothing:', result3);

// We are going to complete a function that takes in two parameters, an array of agents in the field,
//  and an agent to search for within that array, determines if the agent to search for is present
//  within the array, and if it is, returns a specific string. Your function should use an if statement
// to determine if the agent to search for is present within the list of agents, and if it is, should
// return the string '{agentToSearchFor} is present within Agent list', where {agentToSearchFor} has
// the value of the argument the function is called on. Below are examples of the code running, assuming
// that you will have completed the described function: findAgent.

function findAgent(agentList, agentToSearchFor) {
	// if agentToSearchFor is present within agentList
	if (agentList.indexOf(agentToSearchFor) > -1) {
		// return '{agentToSearchFor} is present within Agent list'
		return `${agentToSearchFor} is present within Agent list`;
	}
}
// var result1 = findAgent([ '001', '005', '007', '009' ], '007');
// console.log('should log "007 is present within Agent list":', result1);

// var result2 = findAgent([ 'tiny', 'teeny', 'eeny', 'meany' ], 'teeny');
// console.log('should log "teeny is present within Agent list":', result2);

// var result3 = findAgent([ 'red', 'blue', 'green' ], 'orange');
// console.log('Should log undefined, because function returned nothing:', result3);

// We are going to complete a function that takes in two parameters, an object containing the report
// totals for various teams, and the string name of a team, and determines if the given team has surpassed
// their goal of 5 reports, and if they have, returns a specific string. Your function should use an if
// statement to determine if the team in question has surpassed their goal of 5 reports, and if they have,
// should return the string '{teamName} has surpassed goal with {number_of_reports_for_team} reports',
// where {teamName} has the value of the second argument the function is called on, and
// {number_of_reports_for_team} is the number of reports in the inputted object argument for {teamName}.
// Below are examples of the code running, assuming that you will have completed the described
// function: generateReportSummary.

function generateReportSummary(reportTotals, teamName) {
	let total = reportTotals[teamName];
	// if teamName's report total is greater than 5
	if (total > 5) {
		// return '{teamName} has surpassed goal with {number_of_reports_for_team} reports'
		return `${teamName} has surpassed goal with ${total} reports`;
	}
}

var result1 = generateReportSummary({ a_team: 12, b_team: 7, c_team: 0 }, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({ blue: 18, red: 8, green: 12 }, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({ gamma: 1, epsilon: 3, alpha: 4, bravo: 17 }, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);
