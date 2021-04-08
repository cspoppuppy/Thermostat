// temperature = localStorage.getItem("temperature");
// localStorage.clear();
// if (temperature===null) {
  thermo = new Thermostat();
// } else {
//   thermo = new Thermostat(temperature);
// }

reloadData();
displayWeather();

$("#increase").click(() => {
  thermo.up();
  reloadData();
});

$("#decrease").click(() => {
  thermo.down();
  reloadData();
});

$("#reset").click(() => {
  thermo.reset();
  reloadData();
});

$("#toggle-psm").click(() => {
  thermo.togglePowerSavingMode();
  $("#psm").text(thermo.psm);
  // localStorage.setItem("powerSavingMode", thermo._powerSavingMode);
});

function reloadData() {
  $("#temperature").text(thermo.temperature);
  $("#temperature").attr("class", thermo.currentEnergyUsage);
  // localStorage.setItem("temperature", thermo.temperature);
}

$("#city").change(() => {
  displayWeather();
})

function displayWeather() {
  let city = $("#city").val();
  let apiStr = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=315819ecefcf996377ea1c1f24ae31b6&units=metric"
  console.log(apiStr)
  $.get(apiStr, function(data) {
    $("#current-weather").text(data.main.temp);
  });
}