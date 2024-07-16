import WeatherIcon from "../../Utils/WeatherIcon";

export default function WeatherForecast(props) {
   //const { temperature, IconUrl, date } = props.data;

  return (
    <div className="container text-center" id="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-date">
            <p>Wed</p>
          </div>
          <br />
          <WeatherIcon code={"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"} size={50} />
          <br />
          <div className="weather-forecast-temp">
            <span className="weather-forecast-temp-max">35°</span>
            <span className="weather-forecast-temp-min">23°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
