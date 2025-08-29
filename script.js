
const userlocation = document.getElementById("userLocation"),
      converter = document.getElementById("converter"),
      weatherIcon = document.querySelector(".weatherIcon"),
      temperature = document.querySelector(".temperature"),
      feelslike = document.querySelector(".feelsLike"),
      description = document.querySelector(".description"),
      date = document.querySelector(".date"),
      city = document.querySelector(".city"),
      HValue = document.getElementById("HValue"),
      WValue = document.getElementById("WValue"),
      SRValue = document.getElementById("SRValue"),
      SSValue = document.getElementById("SSValue"),
      CValue = document.getElementById("CValue"),
      PValue = document.getElementById("PValue");

const WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid={your_API_Key}&units=metric&q=`;


function findUserLocation() {
  fetch(WEATHER_API_ENDPOINT + userlocation.value)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        alert(data.message);
        return;
      }

      console.log(data);

      city.innerHTML = data.name + ", " + data.sys.country;

      weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;

      temperature.innerHTML = TemConverter(data.main.temp);

      feelslike.innerHTML = "Feels Like " + TemConverter(data.main.feels_like);

      description.innerHTML = `<i class="fa-solid fa-cloud"></i> &nbsp;` + data.weather[0].description;

      const optionsDate = {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      date.innerHTML = formatUnixTime(data.dt, data.timezone, optionsDate);

      HValue.innerHTML = Math.round(data.main.humidity) + "<span>%</span>";

      WValue.innerHTML = Math.round(data.wind.speed) + "<span> m/s</span>";

      const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
      SRValue.innerHTML = formatUnixTime(data.sys.sunrise, data.timezone, optionsTime);
      SSValue.innerHTML = formatUnixTime(data.sys.sunset, data.timezone, optionsTime);

      CValue.innerHTML = data.clouds.all + "<span>%</span>";

      PValue.innerHTML = data.main.pressure + "<span> hPa</span>";
    })
    .catch((err) => console.error("Fetch error:", err));
}

function formatUnixTime(dtValue, offset, options = {}) {
  const date = new Date((dtValue + offset) * 1000);
  return date.toLocaleString("en-US", { timeZone: "UTC", ...options });
}

function TemConverter(temp) {
  let tempValue = Math.round(temp);
  if (converter.value === "°C") {
    return tempValue + "<span>" + "\xB0C</span>";
  } else {
    let ctof = (tempValue * 9) / 5 + 32;
    return Math.round(ctof) + "<span>" + "\xB0F</span>";
  }
}









