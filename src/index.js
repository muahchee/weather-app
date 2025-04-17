import "./styles.css";
import { getWeather } from "./scripts/getWeather.js";
import { WeatherDataProcessor } from "./scripts/weatherDataProcessor.js";
import { DataDisplay } from "./scripts/dataDisplay.js";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const location = formData.get("location");
  
  const json = getWeather(location);

  const promiseData = new WeatherDataProcessor(json).processWeatherData();

  promiseData.then((value) => {
    new DataDisplay(value).displayData();
    console.log(value);
  });

  form.reset();
});
