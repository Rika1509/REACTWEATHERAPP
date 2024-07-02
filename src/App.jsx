import { useState } from "react";
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
            date: "Wednesday 17:00",
            description: response.data.condition.description,
            IconUrl: response.data.condition.icon_url,
            wind: response.data.wind.speed,
            city: response.data.city,
        });
    }
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
        const apiKey = "a606oe7b016d122f0t18d2431534646a";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Rome&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
}