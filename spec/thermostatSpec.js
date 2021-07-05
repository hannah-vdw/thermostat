'use strict'

describe("Thermostat", () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", () => {
    expect(thermostat.temp).toEqual(20);
  });


});