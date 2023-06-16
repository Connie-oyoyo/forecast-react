 import React from "react";
 import "./Weather.css";
 export default function Weather() {
return (
    <div className="Weather">
        <form>
          <div className="row mb-4">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                class="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Madrid</h1>
        <ul>
          <li> Last updated Thursday</li>
          <li>cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10034/10034791.png"
                alt="cloudy"
              />
              <div>
                <strong></strong>
                <span className="units">
                  <a href="/" id="celsius-link" class="active">
                    <strong>20</strong> ºC
                  </a>{" "}
                  |
                  <a href="/" id="fahrenheit-link">
                    ºF
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity"></span>10%{" "}
              </li>
              <li>
                Wind: <span id="wind"></span>30 Km/H
              </li>
            </ul>
          </div>
          <div className="weather-forecast" id="forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Sat</div>
                <img
                  src="https://openweathermap.org/img/wn/04d@2x.png"
                  alt=""
                  width="30"
                />
                <div className="weather-forecast-temperature">
                  <span className="weather-forecast-temperature-max">18º</span>
                  <span className="weather-forecast-temperature-min">12º</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
