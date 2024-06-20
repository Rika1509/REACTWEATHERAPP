export default function weatherDescription() {
  let weatherData = {
    humidity: "58",
    wind: "4.12",
    pressure: "1014",
  };
  return (
    <div className="col-md-4" id="current-weather-info">
      <ul>
        <li>
          Humidity: <span id="humidity">{weatherData.humidity}</span>%
        </li>
        <li>
          Wind speed: <span id="wind">{weatherData.wind}</span> km/h
        </li>
        <li>
          Pressure: <span id="pressure">{weatherData.pressure}</span> mb
        </li>
      </ul>
    </div>
  );
}
