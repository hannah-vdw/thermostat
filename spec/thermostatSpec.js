'use strict'

describe("Thermostat", () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  })

  it("starts at 20 degrees", () => {
    expect(thermostat.currentTemp()).toEqual(20);
  })

  it("temp goes up by 1 with up()", () => {
    thermostat.up()
    expect(thermostat.currentTemp()).toEqual(21);
  })

  it("temp goes down by 1 with down()", () => {
    thermostat.down()
    expect(thermostat.currentTemp()).toBe(19);
  })

  it("throws an error if below 10", () => {
    for (let i = 0; i < 12; i++) {
      thermostat.down()
    }
    expect(thermostat.currentTemp()).toEqual(10);
  })



});



