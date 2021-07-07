document.addEventListener("DOMContentLoaded", () => {

  const thermostat = new Thermostat();
  const currentEnergyUsage = document.querySelector('#current-energy-usage')

  const updateTemp = () => {
    document.querySelector('#current-temp').innerText = thermostat.temp;
    currentEnergyUsage.innerText = thermostat.currentEnergyUse();
  }
  updateTemp()

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
      psmBtn.innerText = 'Turn on'
    } else {
      thermostat.turnOnPowerSavingMode()
      psmBtn.innerText = 'Turn off'
    }
  })


})