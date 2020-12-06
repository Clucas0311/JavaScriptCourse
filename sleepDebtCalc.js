/* Create a function getSleepHours that includes one parameter day */
const getSleepHours = (day) => {
	day = day.toLowerCase();
	switch (day) {
		case 'monday':
			return 8;
			break;
		case 'tuesday':
			return 7;
			break;
		case 'wednesday':
			return 10;
			break;
		case 'thursday':
			return 6;
			break;
		case 'friday':
			return 7;
			break;
		case 'saturday':
			return 5;
			break;
		case 'sunday':
			return 9;
			break;
		default:
			return 'ERROR!';
	}
};

/* Create a function to get the total sleep hours you actually slept 
  getActualSleepHours that has no parameters */

const getActualSleepHours = () =>
	getSleepHours('monday') +
	getSleepHours('tuesday') +
	getSleepHours('wednesday') +
	getSleepHours('thursday') +
	getSleepHours('friday') +
	getSleepHours('saturday') +
	getSleepHours('sunday');

/* Create a function for ideal sleep hours multiply by 7*/
const getIdealSleepHours = () => {
	const idealHours = 7;
	return idealHours * 7;
};

/* Create a function called calculateSleepDebt with no parameters - create a variable named actualSleepHours = getActualSleepHour and create another variable IdealSleepHours and set it equal to getIdealSleepHours() */

const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();
	if (actualSleepHours === idealSleepHours) {
		console.log(`You got perfect sleep. Total Sleep: ${actualSleepHours + idealSleepHours}`);
	} else if (actualSleepHours > idealSleepHours) {
		console.log(`You got more sleep than needed. Hours over ideal sleep: + ${actualSleepHours - idealSleepHours}`);
	} else {
		console.log(`You need to get some rest. Hours under ideal sleep: ${actualSleepHours - idealSleepHours}`);
	}
};

calculateSleepDebt();
