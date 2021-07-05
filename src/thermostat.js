'use strict'

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temp = 20;
  }

  currentTemp() {
    return this.temp
  }

  isMinTemp() {
    return this.temp === this.MINIMUM_TEMPERATURE;
  }

  up() {
    this.temp += 1
  }

  down() {
    if (this.isMinTemp()) {
      return;
    }
    this.temp -= 1;
  }

}
