class Thermostat {
  constructor (temperature=20) {
    this._temperature = temperature;
    this._powerSavingMode = true;
    this._MIN_TEMP = 10;
    this._MAX_TEMP_PSM_ON = 25;
    this._MAX_TEMP_PSM_OFF = 32;
    this._LOW_TEMP_LIMIT = 18;
    this._MEDIUM_TEMP_LIMIT = 25;
  }

  get temperature() {
    return this._temperature;
  }

  up () {
    if (this._temperature<(this._powerSavingMode ? this._MAX_TEMP_PSM_ON : this._MAX_TEMP_PSM_OFF)) {
      this._temperature ++;
    }
  }

  down () {
    if (this._temperature>this._MIN_TEMP) {
      this._temperature --;
    }
  }

  togglePowerSavingMode() {
    if (this._powerSavingMode===true) {
      this._powerSavingMode = false;
    } else {
      this._powerSavingMode = true;
    }
  }

  get psm() {
    return this._powerSavingMode===true ? "on" : "off"; 
  }

  reset() {
    this._temperature = 20;
  }

  get currentEnergyUsage() {
    if (this._temperature<this._LOW_TEMP_LIMIT) {
      return "low-usage";
    } else if (this._temperature<=this._MEDIUM_TEMP_LIMIT) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}
