navigator.getBattery().then((battery) => {
  console.log(battery);
  const { charging, chargingTime, dischargingTime, level } = battery;

  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }

  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });

  function updateChargeInfo() {
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });

  function updateLevelInfo() {
    const elem = document.getElementById("battery-level");
    elem.style.width = `${battery.level * 100 * 2}px`;
    elem.textContent = battery.level * 100;
    console.log(`Battery level: ${battery.level * 100}%`);

  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });

  function updateChargingInfo() {
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });

  function updateDischargingInfo() {
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
});