import axios from "axios";
import WeatherIcon from "../../Utils/WeatherIcon";

export default function WeatherForecast(props) {
   const { lon, lat } = props.data;
   function handleResponse(response) {
    console.log(response.data.coordinates);
   }

    const apiKey = "a606oe7b016d122f0t18d2431534646a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

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
