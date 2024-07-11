import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const urlKey = "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/"
  const codeMapping = {
    [`${urlKey}clear-sky-day.png`]: `CLEAR_DAY`,
    [`${urlKey}clear-sky-night.png`]: "CLEAR_NIGHT",
    [`${urlKey}few-clouds-day.png`]: "PARTLY_CLOUDY_DAY",
    [`${urlKey}few-clouds-night.png`]: "PARTLY_CLOUDY_NIGHT",
    [`${urlKey}scattered-clouds-day.png`]: "PARTLY_CLOUDY_DAY",
    [`${urlKey}scattered-clouds-night.png`]: "PARTLY_CLOUDY_NIGHT",
    [`${urlKey}broken-clouds-day.png`]: "CLOUDY",
    [`${urlKey}broken-clouds-night.png`]: "CLOUDY",
    [`${urlKey}shower-rain-day.png`]: "RAIN",
    [`${urlKey}shower-rain-night.png`]: "RAIN",
    [`${urlKey}rain-day.png`]: "RAIN",
    [`${urlKey}rain-night.png`]: "RAIN",
    [`${urlKey}thunderstorm-day.png`]: "RAIN",
    [`${urlKey}thunderstorm-night.png`]: "RAIN",
    [`${urlKey}snow-day.png`]: "SNOW",
    [`${urlKey}snow-night.png`]: "SNOW",
    [`${urlKey}mist-day.png`]: "FOG",
    [`${urlKey}mist-night.png`]: "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon= {codeMapping[props.code]}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}