export async function getWeather(location = "Auckland") {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=3RE8URH9BP6H4YL46EP2U53LT&iconSet=icons2`,
      { mode: "cors" },
    );

    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}
