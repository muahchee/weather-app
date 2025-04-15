export class WeatherDataProcessor {
  constructor(weatherData) {
    this.weatherData = weatherData;
  }

  async _getGeneralInfo() {
    try {
      const currentLocation = await this.weatherData;

      const generalObj = {
        resolvedAddress: currentLocation.resolvedAddress,
        description: currentLocation.description,
      };

      return generalObj;
    } catch (err) {
      console.log(err);
    }
  }

  async _getCurrentConditions() {
    try {
      const weatherData = await this.weatherData;

      const currentObj = {
        icon: weatherData.currentConditions.icon,
        datetime: weatherData.currentConditions.datetime,
        conditions: weatherData.currentConditions.conditions,
        temp: weatherData.currentConditions.temp,
        uvindex: weatherData.currentConditions.uvindex,
        precipprob: weatherData.currentConditions.precipprob,
      };

      return currentObj;
    } catch (err) {
      console.log(err);
    }
  }

  async _getDaysForecast() {
    try {
      const weatherData = await this.weatherData;

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

      return sevenDayArr;
    } catch (err) {
      console.log(err);
    }
  }

  async processWeatherData() {
    const processedWeatherData = {
      general: await this._getGeneralInfo(),
      current: await this._getCurrentConditions(),
      forecast: await this._getDaysForecast(),
    };
    return processedWeatherData;
  }
}
