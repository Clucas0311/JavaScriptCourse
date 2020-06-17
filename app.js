let password = 'kitty';

if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		// if it contains a whitespace it wont return -1 if it does it will and that will be true
		console.log('Valid Password!');
	} else {
		console.log('Password is long enough, but cannot contain spaces');
	}
} else {
	console.log('Password must be longer!');
}
