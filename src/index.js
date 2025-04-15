import "./styles.css";
import { WeatherDataProcessor } from "./scripts/weatherDataProcessor.js";
import { getWeather } from "./scripts/getWeather.js";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const location = formData.get("location");

  const json = getWeather(location);

  const promiseData = new WeatherDataProcessor(json).processWeatherData();

  promiseData.then((value) => console.log(value));
});

// const json = getWeather("Auckland");

// const promiseData = new WeatherDataProcessor(json).processWeatherData();

// promiseData.then((value) => console.log(value));
