import { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
   const { lon, lat } = props.data;
   const [loaded, setLoaded] = useState(false);
   const [forecast, setForecast] = useState(null);
   
   function handleResponse(response) {
    console.log(response.data.coordinates);
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true)
   }

    if (loaded)  {
  return (
    <div className="container text-center" id="weather-forecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]}/>
        </div>
      </div>
    </div>
  );
} else {
    const apiKey = "a606oe7b016d122f0t18d2431534646a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`
    
    axios.get(apiUrl).then(handleResponse);

    return null;
}
}
