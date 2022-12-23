function updateTime() {
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = moment().format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let newDelhiElement = document.querySelector("#new-delhi");
  if (newDelhiElement) {
    let newDelhiDateElement = newDelhiElement.querySelector(".date");
    let newDelhiTimeElement = newDelhiElement.querySelector(".time");
    let newDelhiTime = moment().tz("Asia/Colombo");

    newDelhiDateElement.innerHTML = moment().format("MMMM Do YYYY");
    newDelhiTimeElement.innerHTML = newDelhiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  function updateCityTime() {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
          </div>
        </div>`;
  }
  setInterval(updateCityTime, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
