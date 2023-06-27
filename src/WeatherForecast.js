import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
     setForecast(response.data.daily);
     setLoaded(true);   
    }

     if (loaded) {
    return (
<div className = "WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <img
                  src="https://openweathermap.org/img/wn/04d@2x.png"
                  alt=""
                  width="30"
                />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    19º</span>
                <span className="WeatherForecast-temperature-min">
                    10º</span>
            </div>
        </div>
    </div>
</div>
 );
  } else {
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
 
    return null;
     }
}