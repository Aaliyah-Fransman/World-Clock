function updateTime() {
  let losAngelesContainer = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesContainer.querySelector(".date");
  let losAngelesTimeElement = losAngelesContainer.querySelector(".time");
  losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyContainer = document.querySelector("#sydney");
  let sydneyDateElement = sydneyContainer.querySelector(".date");
  let sydneyTimeElement = sydneyContainer.querySelector(".time");
  sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let johannesburgContainer = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgContainer.querySelector(".date");
  let johannesburgTimeElement = johannesburgContainer.querySelector(".time");
  johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = `${johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
