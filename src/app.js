document.addEventListener("DOMContentLoaded", () => {

  const thermostat = new Thermostat();

  const updateTemp = () => {
    document.querySelector('#current-temp').innerText = thermostat.temp;
  }
  updateTemp()

  // const currentTemp = document.querySelector('#current-temp')
  // currentTemp.innerHTML = thermostat.temp;

  const tempUpBtn = document.querySelector('#temp-up')
  const tempDownBtn = document.querySelector('#temp-down')
  const tempResetBtn = document.querySelector('#temp-reset')

  tempUpBtn.addEventListener("click", () => {
    thermostat.up()
    updateTemp()
  })
  tempDownBtn.addEventListener("click", () => {
    thermostat.down()
    updateTemp()
  })
  tempResetBtn.addEventListener("click", () => {
    thermostat.resetTemp()
    updateTemp()
  })

  const psmBtn = document.querySelector('#PSM-BTN')

  psmBtn.addEventListener("click", () => {
    if (thermostat.isPowerSavingMode()) {
      thermostat.turnOffPowerSavingMode()
      psmBtn.innerTextL = 'Turn on'
    }
    thermostat.turnOnPowerSavingMode()
    psmBtn.innerText = 'Turn off'
  })

})