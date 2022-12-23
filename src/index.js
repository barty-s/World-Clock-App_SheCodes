function updateTime() {
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = moment().format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let newDelhiElement = document.querySelector("#new-delhi");
  let newDelhiDateElement = newDelhiElement.querySelector(".date");
  let newDelhiTimeElement = newDelhiElement.querySelector(".time");
  let newDelhiTime = moment().tz("Asia/Colombo");

  newDelhiDateElement.innerHTML = moment().format("MMMM Do YYYY");
  newDelhiTimeElement.innerHTML = newDelhiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
