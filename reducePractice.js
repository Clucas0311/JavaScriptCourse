const scores = [ 90, 30, 20, 75, 85, 95, 0, 55, 60, 40 ];

const total = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);
