export default function Lastupdated(props) {

  const { temperature, IconUrl } = props.data;

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
        <img src={IconUrl} id="icon" />
        <span className="temperature">{Math.round(temperature)}</span>
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
