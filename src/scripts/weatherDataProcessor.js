export class WeatherDataProcessor {
  constructor(weatherData) {
    this.weatherData = weatherData;
  }

  async _getCurrentConditions() {
    try {
      const weatherData = await this.weatherData;

      const currentObj = {
        icon: weatherData.currentConditions.icon,
        address: weatherData.resolvedAddress,
        date: weatherData.days[0].datetime,
        time: weatherData.currentConditions.datetime,
        temp: weatherData.currentConditions.temp,
        uvindex: weatherData.currentConditions.uvindex,
        rain: weatherData.currentConditions.precipprob,
        condition: weatherData.days[0].description,
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
          date: obj.datetime,
          icon: obj.icon,
          tempmax: obj.tempmax,
          tempmin: obj.tempmin,
          rain: obj.precipprob,
        };
        sevenDayArr.push(dayObj);
      });

      return sevenDayArr;
    } catch (err) {
      console.log(err);
    }
  }

  async _getHoursForecast() {
    try {
      const weatherData = await this.weatherData;
      const todayHoursData = weatherData.days[0].hours;

      const hoursArr = [];
      todayHoursData.forEach((obj) => {
        let hourObj = {
          time: obj.datetime,
          icon: obj.icon,
          temp: obj.temp,
          rain: obj.precipprob,
        };
        hoursArr.push(hourObj);
      });
      return hoursArr;
    } catch (err) {
      console.log(err);
    }
  }

  async processWeatherData() {
    const processedWeatherData = {
      current: await this._getCurrentConditions(),
      hours: await this._getHoursForecast(),
      days: await this._getDaysForecast(),
    };
    return processedWeatherData;
  }
}
