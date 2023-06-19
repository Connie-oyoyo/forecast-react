 import React, { useState } from "react";
 import axios from "axios";
 import "./Weather.css";
 import FormattedDate from "./FormattedDate";
 export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/10034/10034791.png"
              
    });
  }
  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
          <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description} />
              <div>
                <span className="units">
                  <a href="/" id="celsius-link" class="active">
                    <strong>{Math.round(weatherData.temperature)}</strong> ºC
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
                Humidity: <span id="humidity"></span>{weatherData.humidity}%
              </li>
              <li>
                Wind: <span id="wind"></span> {weatherData.wind} Km/H
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
} else { 
const apiKey = "d1a86552de255334f6117b348c4519bd"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showResponse);
  return "Loading..."
}
 }
