
export function celciusToFahrenheit(c) {

  let celcius;

  if (/°C/.test(c)) {
    celcius = c.slice(0, -2)
  } else {
    celcius = c
  }

  const f = (Number(celcius) * 9 / 5) + 32

  return f + "°F"
}

export function fahrenheitToCelcius(f) {

  let fahrenheit;

  if (/°F/.test(f)) {
    fahrenheit = f.slice(0, -2)
  } else {
    fahrenheit = f
  }

  const c = (Number(fahrenheit) - 32) * 5 / 9 

  return c + "°C"
}