import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";
export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
     setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
     setForecast(response.data.daily);
     setLoaded(true);   
    }


     if (loaded) {
    return (
<div className ="WeatherForecast">
    <div className="row">
        {forecast.map(function(dailyForecast, index) {
            if (index < 6) {
         return (
         <div className="col" key={index}>
        <ForecastDay data={dailyForecast} />
          </div>  
         );
        } else {
            return null;
        }
        })}                                                                                                 
    </div>
</div>
 );
  } else {
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
 
    return null;
     }
}