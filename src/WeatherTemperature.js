import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function displayFarenheit(event) {
        event.preventDefault();
        setUnit("farenheit");
    }
    function displayCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") { 
    return ( 
 <div className="WeatherTemperature">
<span className="temperature">{Math.round(props.celsius)}</span> 
<span className="units">ºC | <a href="/" onClick={displayFarenheit}>ºF</a>
</span>
</div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
     <div className="WeatherTemperature">
<span className="temperature">{Math.round(farenheit)}</span> 
<span className="units"> 
<a href="/" onClick={displayCelsius}>ºC</a>{" "}
| ºF
</span>
</div>
);
}
}