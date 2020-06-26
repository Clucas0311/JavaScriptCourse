const rage = () => {
	console.log('I HATE EVERYTHING!');
};

const repeatNTimes = (action, num) => {
	for (let i = 0; i < num; i++) {
		action();
	}
};

repeatNTimes(rage, 19);
