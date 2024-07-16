import { useState } from "react";

export default function WeatherTemperature (props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.temperature * 9) / 5 + 32;
      }

      const temperature = unit === "celsius" ? Math.round(props.temperature) : Math.round(fahrenheit()) 

    return (
        <>
        <span className="temperature">{temperature}</span>
        <span className="units">
          {unit === "celsius" ? (
            <>
              °C | <a href="#" id="celsius-link" onClick={showFahrenheit}>°F</a>
            </>
          ) : (
            <>
              <a href="#" id="fahrenheit-link" className="active" onClick={showCelsius}>°C</a> | °F
            </>
          )}
        </span>
        </>
    );
}