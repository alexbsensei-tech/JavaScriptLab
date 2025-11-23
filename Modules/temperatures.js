// Convert Fahrenheit to Celsius
export function toCelsius(farenheit) {
  return (farenheit - 32) * 5 / 9;
}

// Convert Celsius to Fahrenheit
export function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}