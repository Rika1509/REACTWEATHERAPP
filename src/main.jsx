import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Header from "./components/molecule/Header/Header";
import Searchbar from "./components/molecule/Searchbar/Searchbar";
import Lastupdated from "./components/molecule/Lastupdate/Lastupdate";
import WeatherDescription from "./components/molecule/Weatherdescription/Weatherdescription";
import WeatherInfo from "./components/molecule/WeatherInfo/WeatherInfo";
import Footer from "./components/molecule/Footer/Footer";
import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <App>
    <div className="container">
      <div className="card mb-3">
        <Searchbar />
        <div className="row g-0">
          <Lastupdated />
          <WeatherInfo />
          <WeatherDescription />
          <Footer />
        </div>
      </div>
    </div>
    </App>
  </StrictMode>
);

