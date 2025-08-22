function updateTime() {
  let losAngelesContainer = document.querySelector("#los-angeles");
  if (losAngelesContainer) {
    let losAngelesDateElement = losAngelesContainer.querySelector(".date");
    let losAngelesTimeElement = losAngelesContainer.querySelector(".time");
    losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    let sydneyContainer = document.querySelector("#sydney");
    if (sydneyContainer) {
      let sydneyDateElement = sydneyContainer.querySelector(".date");
      let sydneyTimeElement = sydneyContainer.querySelector(".time");
      sydneyTime = moment().tz("Australia/Sydney");

      sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
      sydneyTimeElement.innerHTML = `${sydneyTime.format(
        "h:mm:ss [<small>]A[</small>]"
      )}`;
    }
  }

  let johannesburgContainer = document.querySelector("#johannesburg");
  if (johannesburgContainer) {
    let johannesburgDateElement = johannesburgContainer.querySelector(".date");
    let johannesburgTimeElement = johannesburgContainer.querySelector(".time");
    johannesburgTime = moment().tz("Africa/Johannesburg");

    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = `${johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}<small>
          ${cityTime.format("A")}</small></div>
        </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#place");
citiesSelectElement.addEventListener("change", updateCity);
