import FormattedDate from "../../../Utils/FormattedDate";
import WeatherIcon from "../../../Utils/WeatherIcon";
import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";

export default function Lastupdated(props) {

  const { temperature, IconUrl, city, date, FeelsLike } = props.data;

  return (
    <div className="col-md-5" id="current-weather">
      <h1>{city}</h1>
      <small>Last updated:</small>
      <h4 id="date"><FormattedDate date={date}/></h4>
      <div className="main">
        <WeatherIcon code={IconUrl} />
        <WeatherTemperature temperature={temperature}/>
      </div>
      <span className="feels-like">Feels like: {Math.round(FeelsLike)} </span>
    </div>
  );
}
