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
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
        </div>
        <a href="index.html" target="_blank">All Cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#place");
citiesSelectElement.addEventListener("change", updateCity);

function showImage() {
  const select = document.getElementById("place");
  const image = document.getElementById("cityImage");
  const value = select.value;
  const images = {
    current:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/717/original/thumbnail_image3_%282%29.jpg?1756056964",
    "Europe/London":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/620/original/thumbnail_image0_%282%29.jpg?1755902364",
    "America/New_York":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/714/original/thumbnail_image0_%283%29.jpg?1756056893",
    "Pacific/Auckland":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/715/original/thumbnail_image1_%281%29.jpg?1756056906",
    "Asia/Tokyo":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/716/original/thumbnail_image2_%282%29.jpg?1756056922",
    "Europe/Rome":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/718/original/thumbnail_image0_%284%29.jpg?1756058008",
    "Asia/Shanghai":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/719/original/thumbnail_image1_%282%29.jpg?1756058047",
    "Asia/Dubai":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/726/original/thumbnail_image4_%281%29.jpg?1756059064",
    "Africa/Cairo":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/720/original/thumbnail_image2_%283%29.jpg?1756058089",
    "Europe/Moscow":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/721/original/thumbnail_image4_%282%29.jpg?1756058109",
  };
  if (images[value]) {
    image.src = images[value];
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}
