const celciusInput = document.querySelector(".celcius-container  input");
const fahrenheitInput = document.querySelector(".fahrenheit-container  input");
const timeSpan = document.querySelector(".status-bar span");
function calculateTemperature() {
  if (this.parentNode.classList.contains("fahrenheit-container")) {
    return (celciusInput.value = Math.ceil(
      (parseFloat(this.value) - 32) * (5 / 9)
    ));
  }
  return (fahrenheitInput.value = Math.ceil(
    parseFloat(this.value) * (9 / 5) + 32
  ));
}

const getTime = () => {
  var date = new Date();
  let hours = date.getHours() - 12;
  let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  timeSpan.textContent = `${hours}:${minutes}`;
};

celciusInput.addEventListener("input", calculateTemperature);

fahrenheitInput.addEventListener("input", calculateTemperature);

setInterval(getTime, 1000);
