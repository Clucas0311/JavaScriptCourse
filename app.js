let calls = '';

function jerry(str) {
	//go here first
	//add jerry to str
	str += `Jerry`;
	//go to kramer
	kramer(str);
	//is this working?
	console.log(str, `jerry str`);
}

function george(str) {
	str += `George`;
	elaine(str);
	console.log(str, `george str`);
}

function elaine(str) {
	str += `Elaine`;
	console.log(str, `elaine str`);
	calls = str;
	console.log(calls);
}

function kramer(str) {
	str += `Kramer`;
	george(str);
	console.log(str, `kramer str`);
}

// should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);
