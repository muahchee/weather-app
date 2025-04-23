import { fahrenheitToCelcius } from "./changeTempUnit";

export class CurrentDisplay {
  constructor(currentData) {
    this.currentData = currentData;

    //selectors
    this.currentImg = document.querySelector(".current-img img");
    this.currentAddress = document.querySelector(".current-address");
    this.currentDate = document.querySelector(".current-date");
    this.currentTime = document.querySelector(".current-time");
    this.currentTemp = document.querySelector(".current-temp");
    this.currentUV = document.querySelector(".current-uv span");
    this.currentRain = document.querySelector(".current-rain span");
    this.currentCondition = document.querySelector(".current-condition");
  }

  async _changeCurrentImg() {
    const newImage = await import(`../png/${this.currentData.icon}.png`);
    this.currentImg.src = newImage.default;
    this.currentImg.alt = `${this.currentData.icon} icon`
    return;
  }



  _changeInfo() {
    this.currentAddress.textContent = this.currentData.address;
    this.currentDate.textContent = this.currentData.date;
    this.currentTime.textContent = this.currentData.time;
    this.currentTemp.textContent = fahrenheitToCelcius(this.currentData.temp);
    this.currentUV.textContent = this.currentData.uvindex;
    this.currentRain.textContent = this.currentData.rain;
    this.currentCondition.textContent = this.currentData.condition;

  }

  displayCurrent() {
    this._changeCurrentImg();
    this._changeInfo();
    return;
  }
}
