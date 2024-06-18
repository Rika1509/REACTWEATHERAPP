import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./AtomicDesign/Atom/Index/index";
import Searchbar from "./AtomicDesign/Atom/Searchbar/Searchbar";
import Lastupdated from "./AtomicDesign/Atom/Lastupdate/Lastupdate";
import WeatherDescription from "./AtomicDesign/Atom/Weatherdescription/Weatherdescription";
import WeatherInfo from "./AtomicDesign/Atom/WeatherInfo/WeatherInfo";
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

