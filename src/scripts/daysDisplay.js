import { fahrenheitToCelcius } from "./changeTempUnit";

export class DaysDisplay {
  constructor(daysData) {
    this.daysData = daysData;
    this.daysContainer = document.querySelector(".days-container");
  }

  async _getRainImg(rainImg) {
    const rainSrc = await import(`../png/umbrella.png`);
    rainImg.src = rainSrc.default;
    rainImg.alt = "umbrella icon";
    return;
  }

  async _changedayIcon(day, dayIcon) {
    const newImage = await import(`../png/${day.icon}.png`);
    dayIcon.src = newImage.default;
    dayIcon.alt = `${day.icon} icon`
    return;
  }

  displayDays() {
    while (this.daysContainer.firstChild) {
      this.daysContainer.removeChild(this.daysContainer.lastChild);
    }

    this.daysData.forEach((day) => {
      const dayDiv = document.createElement("div");
      dayDiv.className = "day";

      const dayDate = document.createElement("p");
      dayDate.className = "day-date";
      dayDate.textContent = day.date;

      const dayIcon = document.createElement("img");
      this._changedayIcon(day, dayIcon);

      const dayInfo = document.createElement("div");
      dayInfo.className = "day-info";

      const dayTemp = document.createElement("p");
      dayTemp.className = "day-temp";

      const dayTempMin = document.createElement("span");
      dayTempMin.className = "temperature";
      dayTempMin.textContent = fahrenheitToCelcius(day.tempmin);

      const dayTempSlash = document.createElement("span");
      dayTempSlash.textContent = " / ";

      const dayTempMax = document.createElement("span");
      dayTempMax.className = "temperature";
      dayTempMax.textContent = fahrenheitToCelcius(day.tempmax);

      const dayRain = document.createElement("p");
      dayRain.className = "day-rain";

      const dayRainImg = document.createElement("img");
      this._getRainImg(dayRainImg);

      const dayRainText = document.createElement("span");
      dayRainText.textContent = day.rain + "%";

      dayDiv.appendChild(dayDate);
      dayDiv.appendChild(dayIcon);
      dayDiv.appendChild(dayInfo);

      dayInfo.appendChild(dayTemp);
      dayInfo.appendChild(dayRain);

      dayTemp.appendChild(dayTempMin);
      dayTemp.appendChild(dayTempSlash);
      dayTemp.appendChild(dayTempMax);

      dayRain.appendChild(dayRainImg);
      dayRain.appendChild(dayRainText);

      this.daysContainer.appendChild(dayDiv);

      return;
    });
  }
}
