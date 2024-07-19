import WeatherIcon from "../../Utils/WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`
    }
    
    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`
    }

    function day(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = [    
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];

        return days[day];
    }
  return (
    <>
      <div className="weather-forecast-date">
        <p>{day()}</p>
      </div>
      <br />
      <WeatherIcon code={props.data.condition.icon_url} size={50} />
      <br />
      <div className="weather-forecast-temp">
        <span className="weather-forecast-temp-max">
          {maxTemperature()}
        </span>
        <span className="weather-forecast-temp-min">
          {minTemperature()}
        </span>
      </div>
    </>
  );
}
