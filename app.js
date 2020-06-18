let password = 'chicken Gal';
if (password.length >= 8 && password.indexOf(' ') === -1) {
	console.log('VALID PASSWORD');
} else {
	console.log('INVALID PASSWORD');
}
