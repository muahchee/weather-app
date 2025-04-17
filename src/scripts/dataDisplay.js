import { CurrentDisplay } from "./currentDisplay";
import { DaysDisplay } from "./daysDisplay";
import { HoursDisplay } from "./hoursDisplay";

export class DataDisplay {
  constructor(dataObj) {
    this.dataObj = dataObj;
  }

  displayData() {
    new CurrentDisplay(this.dataObj.current).displayCurrent();
    new HoursDisplay(this.dataObj.hours).displayHours();
    new DaysDisplay(this.dataObj.days).displayDays();
  }
}