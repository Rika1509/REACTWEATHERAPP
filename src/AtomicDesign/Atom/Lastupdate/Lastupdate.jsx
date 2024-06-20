export default function Lastupdated() {
  let weatherData = {
    city: "Rome",
    date: "Tuesday, 12:00",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
  };
  return (
    <div className="col-md-5" id="current-weather">
      <h1>{weatherData.city}</h1>
      <small>Last updated:</small>
      <h4 id="date">{weatherData.date}</h4>
      <div className="main">
        <img src={weatherData.imgUrl} id="icon" />
        <span className="temperature">14</span>
        <span className="units">
          <a href="#" id="celsius-link" className="active">
            °C
          </a>{" "}
          |{" "}
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
    </div>
  );
}
