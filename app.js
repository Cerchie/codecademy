//forecast today
const kelvin = 0;
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
const celsius = kelvin-273;
//equation that changes cel>fahr, rounds down fahr
const newton = Math.floor(celsius*33/100);
const fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')
console.log('The temperature is ' + newton + ' degrees Newton.')