'use strict'

describe("Thermostat", () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  })

  it("starts at 20 degrees", () => {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  })

  it("temp goes up by 1 with up()", () => {
    thermostat.up()
    expect(thermostat.getCurrentTemp()).toEqual(21);
  })

  it("temp goes down by 1 with down()", () => {
    thermostat.down()
    expect(thermostat.getCurrentTemp()).toBe(19);
  })

  it("throws an error if below 10", () => {
    for (let i = 0; i < 12; i++) {
      thermostat.down()
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  })

  describe("power saving mode", () => {
    it("is on be default", () => {
      expect(thermostat.isPowerSavingMode()).toBe(true)
    })

    it("can be turned off", () => {
      thermostat.turnOffPowerSavingMode()
      expect(thermostat.isPowerSavingMode()).toBe(false)
    })

    it("can be turned on again", () => {
      thermostat.turnOffPowerSavingMode()
      thermostat.turnOnPowerSavingMode()
      expect(thermostat.isPowerSavingMode()).toBe(true)
    })
  })

  describe("when power saving mode is on", () => {
    it("max temp is 25 degrees", () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemp()).toEqual(25)
    })
  })

  describe("when power saving mode is off", () => {
    it("max temp is 32 degrees", () => {
      thermostat.turnOffPowerSavingMode()
      for (let i = 0; i < 13; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemp()).toEqual(32)
    })
  })

  it("can reset temp to 20", () => {
    for (let i = 0; i < 4; i++) {
      thermostat.up()
    }
    thermostat.resetTemp()
    expect(thermostat.getCurrentTemp()).toEqual(20)
  })

  describe("current energy usage", () => {
    it("is low-usage if < 18", () => {
      for (let i = 0; i < 4; i++) {
        thermostat.down()
      }
      expect(thermostat.currentEnergyUse()).toEqual('low-usage')
    })
    it("is medium-usage if <= 25", () => {
      for (let i = 0; i < 3; i++) {
        thermostat.up()
      }
      expect(thermostat.currentEnergyUse()).toEqual('medium-usage')
    })
    it("is high-usage if > 25", () => {
      thermostat.turnOffPowerSavingMode();
      for (let i = 0; i < 9; i++) {
        thermostat.up()
      }
      expect(thermostat.currentEnergyUse()).toEqual('high-usage')
    })
  })


});



