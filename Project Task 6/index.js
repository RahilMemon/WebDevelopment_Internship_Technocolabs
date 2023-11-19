console.log("hello");

//Executing code using Node.js -- To run javascript code
//To run --  use node ./index.js

const kelvin = 293;

var celcius = kelvin - 273;

var fahrenheit = celcius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celcius * (33/100);

newton = Math.floor(newton)

console.log(`The temperature in newton ${newton}`)