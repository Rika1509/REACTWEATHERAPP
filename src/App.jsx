import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Searchbar from "./components/molecule/Searchbar/Searchbar";
import Lastupdated from "./components/molecule/Lastupdate/Lastupdate";
import WeatherInfo from "./components/molecule/WeatherInfo/WeatherInfo";
import WeatherDescription from "./components/molecule/Weatherdescription/Weatherdescription";
import Footer from "./components/molecule/Footer/Footer";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      FeelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      IconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
      lon: response.data.coordinates.longitude,
      lat: response.data.coordinates.latitude,
    });
  }

  const searchCity = useCallback((city) => {
    const apiKey = "a606oe7b016d122f0t18d2431534646a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, []);

  const searchLocation = useCallback((lat, lon) => {
    const apiKey = "a606oe7b016d122f0t18d2431534646a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
    searchCity(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      searchLocation(position.coords.latitude, position.coords.longitude);
    });
  }

  useEffect(() => {
    if (!weatherData.ready) {
      searchCity("Rome");
    }
  }, [weatherData.ready, searchCity]);

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card mb-3">
          <Searchbar
            handleCityChange={handleCityChange}
            handleSubmit={handleSubmit}
            getCurrentLocation={getCurrentLocation}
          />
          <div className="row g-0">
            <Lastupdated data={weatherData} />
            <WeatherInfo data={weatherData} />
            <WeatherDescription data={weatherData} />
            <WeatherForecast data={weatherData} />
            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
