import { CurrentDisplay } from "./currentDisplay";

export class DataDisplay {
  constructor(dataObj) {
    this.dataObj = dataObj;
  }

  displayData() {
    new CurrentDisplay(this.dataObj.current).displayCurrent();
  }
}