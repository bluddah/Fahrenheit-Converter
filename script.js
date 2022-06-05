const kelvin = 295;
// This indicates the weather today 
const celsius = kelvin - 273;
// Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius * (9 / 5) + 32;
// Just above I did the necessary convertion to get the Fahrenheit convertion going
fahrenheit = Math.floor(fahrenheit);
// This is so we can round up the fahrenheit number

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit and ${celsius} in Celsius.`)
// This is the result, displaying the temperature in Fahrenheit and Celsius

// Now we take the necessary measures to display it in Newton
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);
// Result :)
console.log(`It is also ${newton} degrees Newton.`);