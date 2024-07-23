import React from "react";
import axios from 'axios'
import background from './assests/background (2).jpg'

function App() {

  const url=`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=68cddfbfc934d38ece27677271d8cccc`;


  return (
    <div className="w-full h-screen">
      <img src={background} alt='loading'></img>
      <div className="container absolute top-0 left-0">
        <div className="top">
          <div className="location">
            <p>Delhi</p>
          </div>
          <div className="temp">
            <h1>60 F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <h1>60 F</h1>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
