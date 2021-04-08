# Thermostat

---------
### Functions
[x] Thermostat starts at 20 degrees
[x] You can increase the temperature with an up function
[x] You can decrease the temperature with a down function
[x] The minimum temperature is 10 degrees
[x] If power saving mode is on, the maximum temperature is 25 degrees
[x] If power saving mode is off, the maximum temperature is 32 degrees
[x] Power saving mode is on by default but it can also be turned off
[x] You can reset the temperature to 20 with a reset function
[x] You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
[x] (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
[x] Web interface
[x] Weather API
[x] Basic styling
[x] Saving state (temperature only)

---------
### Issues

Currently use localStorage to save state for temperature. Not yet applied for the whole application (i.e. power saving mode, city selection). Looking for better ways to do it using JavaScript instead of Sinatra.

---------
### How to use
Command line: open index.html

---------
### How to test
Command line: open SpecRunner.html