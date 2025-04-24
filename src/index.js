import "./styles.css";
import { getWeather } from "./scripts/getWeather.js";
import { WeatherDataProcessor } from "./scripts/weatherDataProcessor.js";
import { DataDisplay } from "./scripts/dataDisplay.js";
import { TempButton } from "./scripts/tempButton.js";

const form = document.querySelector("form");
const loadingScreen = document.querySelector("dialog");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadingScreen.showModal();
  const formData = new FormData(form);
  const location = formData.get("location");

  const json = getWeather(location);

  const promiseData = new WeatherDataProcessor(json).processWeatherData();

  promiseData.then((value) => {
    new DataDisplay(value).displayData();
    console.log(value);
    loadingScreen.close();
  });

  form.reset();
});

//change temp unit button
const button = document.querySelector("button.change-unit");

button.addEventListener("click", () => {
  new TempButton(button).makeTempButton();
});

//initial
loadingScreen.showModal();
const json = getWeather("Malaysia");

new WeatherDataProcessor(json).processWeatherData().then((value) => {
  new DataDisplay(value).displayData();
  loadingScreen.close();
});
