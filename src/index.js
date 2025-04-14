import "./styles.css";

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=3RE8URH9BP6H4YL46EP2U53LT`,
      { mode: "cors" },
    );

    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

async function getCurrentConditions(location) {
  try {
    const weatherData = await getWeather(location);

    const currentObj = {
      icon: weatherData.currentConditions.icon,
      datetime: weatherData.currentConditions.datetime,
      conditions: weatherData.currentConditions.conditions,
      temp: weatherData.currentConditions.temp,
      uvindex: weatherData.currentConditions.uvindex,
      precipprob: weatherData.currentConditions.precipprob,
    };

    console.log(weatherData.currentConditions);
    console.log(currentObj);
    return currentObj;
  } catch (err) {
    console.log(err);
  }
}

getCurrentConditions("Auckland");
