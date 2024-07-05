import { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./components/molecule/Searchbar/Searchbar";
import Lastupdated from "./components/molecule/Lastupdate/Lastupdate";
import WeatherInfo from "./components/molecule/WeatherInfo/WeatherInfo";
import WeatherDescription from "./components/molecule/Weatherdescription/Weatherdescription";
import Footer from "./components/molecule/Footer/Footer";

export default function App() {
    const [weatherData, setWeatherData] = useState({ ready : false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            pressure: response.data.temperature.pressure,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            IconUrl: response.data.condition.icon_url,
            wind: response.data.wind.speed,
            city: response.data.city,
        });
    }

    useEffect(() => {
      if (!weatherData.ready) {
        const apiKey = "a606oe7b016d122f0t18d2431534646a";
        let defaultCity = "London"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
      }
    }, [weatherData.ready]);

    if (weatherData.ready) {
        return (
            <div className="container">
            <div className="card mb-3">
              <Searchbar />
              <div className="row g-0">
                <Lastupdated data={weatherData}/>
                <WeatherInfo data={weatherData}/>
                <WeatherDescription data={weatherData}/>
                <Footer />
              </div>
            </div>
          </div>
        )
     } else {
        return "Loading..."
    }
}