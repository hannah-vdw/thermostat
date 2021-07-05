'use strict'

class Thermostat {
  constructor() {
    this.temp = 20;
  }

  currentTemp() {
    return this.temp
  }

  up() {
    this.temp += 1
  }

  down() {
    this.temp -= 1
  }
}
