import { fahrenheitToCelcius } from "./changeTempUnit";

export class HoursDisplay {
  constructor(hoursData) {
    this.hoursData = hoursData;
    this.hoursContainer = document.querySelector(".hours-container");
  }

  async _getRainImg(rainImg) {
    const rainSrc = await import(`../icons/water-alert.svg`);
    rainImg.src = rainSrc.default;
    return;
  }

  async _changeHourIcon(hour, hourIcon) {
    const newImage = await import(`../icons/${hour.icon}.svg`);
    hourIcon.src = newImage.default;
    return;
  }

  displayHours() {

    while(this.hoursContainer.firstChild) {
      this.hoursContainer.removeChild(this.hoursContainer.lastChild)
    }

    this.hoursData.forEach((hour) => {
      const hourDiv = document.createElement("div");
      hourDiv.className = "hour";

      const hourTime = document.createElement("p");
      hourTime.className = "hour-time";
      hourTime.textContent = hour.time;

      const hourInfo = document.createElement("div");
      hourInfo.className = "hour-info";

      const hourIcon = document.createElement("img");
      this._changeHourIcon(hour, hourIcon);

      const hourInfoInner = document.createElement("div");

      const hourTemp = document.createElement("p");
      hourTemp.className = "hour-temp temperature";
      hourTemp.textContent = fahrenheitToCelcius(hour.temp);

      const hourRain = document.createElement("p");
      hourRain.className = "hour-rain";

      const hourRainImg = document.createElement("img");
      this._getRainImg(hourRainImg);

      const hourRainText = document.createElement("span");
      hourRainText.textContent = hour.rain + "%";

      hourDiv.appendChild(hourTime);
      hourDiv.appendChild(hourInfo);

      hourInfo.appendChild(hourIcon);
      hourInfo.appendChild(hourInfoInner);

      hourInfoInner.appendChild(hourTemp);
      hourInfoInner.appendChild(hourRain);

      hourRain.appendChild(hourRainImg);
      hourRain.appendChild(hourRainText);

      this.hoursContainer.appendChild(hourDiv);

      return;
    });
  }
}
