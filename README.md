# Thermostat

---------
### Functions
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default but it can also be turned off
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
- (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
- Web interface
- Weather API
- Basic styling
- Saving state (temperature only)


---------
### Issues

Currently use localStorage to save state for temperature. Not yet applied for the whole application (i.e. power saving mode, city selection). Looking for better ways to do it using JavaScript instead of Sinatra.

---------
### How to use
Command line: `open index.html`

---------
### How to test
Command line: `open SpecRunner.html`