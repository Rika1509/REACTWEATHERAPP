export default function weatherInfo() {
  let weatherData = {
    description: "Cloudy",
  };
  return (
    <div className="col-md-3" id="current-weather-info">
      <div className="card-body">
        <h5 className="card-title" id="weather-description">
          {weatherData.description}
        </h5>
      </div>
    </div>
  );
}
