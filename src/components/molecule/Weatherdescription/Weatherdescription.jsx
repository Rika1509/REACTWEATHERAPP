export default function weatherDescription(props) {
  
const { humidity, wind, pressure } = props.data;

  return (
    <div className="col-md-4" id="current-weather-info">
      <ul>
        <li>
          Humidity: <span id="humidity">{humidity}</span>%
        </li>
        <li>
          Wind speed: <span id="wind">{wind}</span> km/h
        </li>
        <li>
          Pressure: <span id="pressure">{pressure}</span> mb
        </li>
      </ul>
    </div>
  );
}
