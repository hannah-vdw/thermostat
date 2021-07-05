'use strict'

describe("Thermostat", () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", () => {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it("temp goes up by 1 with up()", () => {
    thermostat.up()
    expect(thermostat.currentTemp()).toEqual(21);
  })

});



