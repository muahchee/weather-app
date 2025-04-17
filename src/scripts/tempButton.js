import { celciusToFahrenheit, fahrenheitToCelcius } from "./changeTempUnit";

export class TempButton {
  constructor(button) {
    this.button = button;
    this.allTemps = Array.from(document.querySelectorAll(".temperature"));
  }

  makeTempButton() {
    this.allTemps.forEach((temp) => {
      const tempString = temp.textContent;

      if (/°C/.test(tempString)) {
        const fahrenheit = celciusToFahrenheit(tempString);
        temp.textContent = fahrenheit;
        this.button.textContent = "Change to °C";
        return;
      } else if (/°F/.test(tempString)) {
        const celcius = fahrenheitToCelcius(tempString);
        temp.textContent = celcius;
        this.button.textContent = "Change to °F";
        return;
      }

      return;
    });
  }
}
