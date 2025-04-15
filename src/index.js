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

async function getGeneralInfo(location) {
  try {
    const currentLocation = await getWeather(location);

    const generalObj = {
      resolvedAddress: currentLocation.resolvedAddress,
      description: currentLocation.description,
    };
    console.log(generalObj);
    return generalObj;
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

    console.log(currentObj);
    return currentObj;
  } catch (err) {
    console.log(err);
  }
}

async function getDaysForcast(location) {
  try {
    const weatherData = await getWeather(location);

    const sevenDayData = weatherData.days.splice(0, 7);

    const sevenDayArr = [];

    sevenDayData.forEach((obj) => {
      let dayObj = {
        datetime: obj.datetime,
        description: obj.description,
        icon: obj.icon,
        temp: obj.temp,
        tempmax: obj.tempmax,
        tempmin: obj.tempmin,
        uvindex: obj.uvindex,
        precipprob: obj.precipprob,
      };

      let hoursArr = [];
      obj.hours.forEach((obj) => {
        let hourObj = {
          datetime: obj.datetime,
          icon: obj.icon,
          temp: obj.temp,
          precipprob: obj.precipprob,
        };
        hoursArr.push(hourObj);
      });
      dayObj["hours"] = hoursArr;

      sevenDayArr.push(dayObj);
    });

    console.log(sevenDayArr);

    return;
  } catch (err) {
    console.log(err);
  }
}

// getGeneralInfo("Auckalnd");
// getCurrentConditions("Auckland");
getDaysForcast("Auckland");
