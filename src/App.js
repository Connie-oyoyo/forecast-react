import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultcity="Madrid" />
      <footer className="small">
      <a href="https://github.com/Connie-oyoyo/forecast-react" target="_blank" rel="noreferrer"> 
      Open-source code </a> by Connie Oyoyo
      </footer>
      </div>
      </div>
      );
      }