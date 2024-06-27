import { useState } from "react";
import axios from "axios";

export default function App() {
    const [weatherData, setWeatherData] = useState({ ready : false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: "Wednesday 17:00",
            description: response.data.condition.description,
            IconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
            wind: response.data.wind.speed,
            city: response.data.city
        });
    }
    if (weatherData.ready) {
        return (
            <>
            </>
        )
     } else {
        const apiKey = "a606oe7b016d122f0t18d2431534646a";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Rome&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
}