import FormattedDate from "../../../Utils/FormattedDate";
import WeatherIcon from "../../../Utils/WeatherIcon";

export default function Lastupdated(props) {

  const { temperature, IconUrl, city, date, FeelsLike } = props.data;

  return (
    <div className="col-md-5" id="current-weather">
      <h1>{city}</h1>
      <small>Last updated:</small>
      <h4 id="date"><FormattedDate date={date}/></h4>
      <div className="main">
        {/* <img src={IconUrl} id="icon" /> */}
        <WeatherIcon code={IconUrl} />
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
      <span className="feels-like">Feels like: {Math.round(FeelsLike)} </span>
    </div>
  );
}
