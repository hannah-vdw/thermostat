'use strict'


console.log("HIYA")

class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20
    this.MIN_TEMP = 10;
    this.powerSavingMode = true;
    this.temp = this.DEFAULT_TEMP;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.MEDIUM_USAGE_LIMIT = 18;
    this.HIGH_USAGE_LIMIT = 25;
  }

  getCurrentTemp() {
    return this.temp;
  }

  isMinTemp() {
    return this.temp === this.MIN_TEMP;
  }

  isMaxTemp() {
    if (this.isPowerSavingMode()) {
      return this.temp === this.MAX_TEMP_PSM_ON
    }
    return this.temp === this.MAX_TEMP_PSM_OFF
  }

  up() {
    if (this.isMaxTemp()) {
      return;
    }
    this.temp += 1;
  }

  down() {
    if (this.isMinTemp()) {
      return;
    }
    this.temp -= 1;
  }

  isPowerSavingMode() {
    return this.powerSavingMode;
  }

  turnOffPowerSavingMode() {
    this.powerSavingMode = false;
  }

  turnOnPowerSavingMode() {
    this.powerSavingMode = true;
  }

  resetTemp() {
    this.temp = this.DEFAULT_TEMP;
  }

  currentEnergyUse() {
    if (this.temp < this.MEDIUM_USAGE_LIMIT) {
      return "low-usage"
    } else if (this.temp <= this.HIGH_USAGE_LIMIT) {
      return "medium-usage"
    } else {
      return "high-usage"
    }
  }

}
