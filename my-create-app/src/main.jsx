import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Searchbar from "./Searchbar";
import Lastupdated from "./Lastupdate";
import WeatherDescription from "./Weatherdescription";
import WeatherInfo from "./WeatherInfo";
import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <div className="container">
      <div className="card mb-3">
        <Searchbar />
        <div className="row g-0">
          <Lastupdated />
          <WeatherInfo />
          <WeatherDescription />
        </div>
      </div>
    </div>
  </StrictMode>
);

