import "./styles.css";
import { WeatherDataProcessor } from "./scripts/weatherDataProcessor.js";
import { getWeather } from "./scripts/getWeather.js";

const json = getWeather("Auckland");

const data = new WeatherDataProcessor(json).processWeatherData();

data.then(value => console.log(value))
