import "./styles.css";
import { WeatherDataProcessor } from "./scripts/weatherDataProcessor.js";
import { getWeather } from "./scripts/getWeather.js";

const json = getWeather("Auckland");

const promiseData = new WeatherDataProcessor(json).processWeatherData();

promiseData.then((value) => console.log(value));
