describe("Thermostat", () => {
  beforeEach(() => {
    thermo = new Thermostat();
  });

  it("temperature starts at 20 degrees", () => {
    expect(thermo.temperature).toEqual(20);
  });

  it("up function increases temperature", () => {
    thermo.up();
    expect(thermo.temperature).toEqual(21);
  });

  it("down function decreases temperature", () => {
    thermo = new Thermostat();
    thermo.down();
    expect(thermo.temperature).toEqual(19);
  });
  
  it("minimum temperature is 10 degrees", () => {
    for (let i=0; i<11; i++) {
      thermo.down();
    }
    expect(thermo.temperature).toEqual(10);
  });

  it("maximum temperature is 25 degrees at power saving mode", () => {
    for (let i=0; i<6; i++) {
      thermo.up();
    }
    expect(thermo.temperature).toEqual(25);
  });

  it("maximum temperature is 32 degrees if not at power saving mode", () => {
    thermo.togglePowerSavingMode();
    expect(thermo.psm).toEqual("off");
    for (let i=0; i<13; i++) {
      thermo.up();
    }
    expect(thermo.temperature).toEqual(32);
  });

  it("reset temperature to 20", () => {
    thermo.up();
    thermo.reset();
    expect(thermo.temperature).toEqual(20);
  });

  it("current energy usage medium-usage at 20 degrees", () => {
    expect(thermo.currentEnergyUsage).toEqual("medium-usage");
  });

  it("current energy usage low-usage at 17 degrees", () => {
    for (let i=0; i<3; i++) {
      thermo.down();
    }
    expect(thermo.temperature).toEqual(17);
    expect(thermo.currentEnergyUsage).toEqual("low-usage");
  });

  it("current energy usage high-usage at 26 degrees", () => {
    thermo.togglePowerSavingMode();
    for (let i=0; i<6; i++) {
      thermo.up();
    }
    expect(thermo.temperature).toEqual(26);
    expect(thermo.currentEnergyUsage).toEqual("high-usage");
  });
});