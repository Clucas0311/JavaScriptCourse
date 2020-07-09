const arr = [ 1, 2, 3 ];

const smallerArr = arr.filter((num) => num !== 2).map((numb) => numb + 1);

console.log(smallerArr);

const years = [ 1989, 2015, 2000, 1999, 2013, 1973, 2012 ];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

// filter through array to get the years of the 21st century
// map - create a new array with strings and AD.

displayYears = years.filter((year) => year >= 2001).map((element) => `${element} A.D.`);

console.log(displayYears);
