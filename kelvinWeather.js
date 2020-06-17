/* Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. */

/* Create a variable named Kelvin and set it equal to 293 */

let kelvin = 0;

// Convert Kelvin to Celcius
let celcius = kelvin - 273;

/* Use Farenheit = Celcius * (9/5) + 32. to calculate Fahrenheit. */
let fahrenheit = celcius * (9 / 5) + 32;

/* With the conversion convert the decimal into a whole number using the floor method */
fahrenheit = Math.floor(fahrenheit);

/* Print the sting out with this template "The temperature is {Temperature} degrees Fahrenheit." - used the back tick method. */
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/* Convert Celcius to Newtons 
Newton = Celcius * (33/100) */
let newton = celcius * (33 / 100);

/* Round down the temperature using the .floor method Math.floor(Newton)*/
newton = Math.floor(newton);

/* Console.log and string interpolation the data */

console.log(`The temperature is ${newton} degrees in Newton.`);
