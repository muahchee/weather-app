async function getWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=3RE8URH9BP6H4YL46EP2U53LT`,
    { mode: "cors" },
  );

  const weatherData = await response.json();

  console.log(weatherData);
}

getWeather("Auckland");
