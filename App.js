import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

const KEY = "8603950f6896232352d07c7080b248e2";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
      );
      setData(response.data);
    } catch (err) {
      alert("Please Enter the City Name");
    }
  };

  return (
    <div className="App">
      <h1 className="title">weather app</h1>
      <div className="input-container">
        <input
          type="text"
          className="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter the city name"
        />

        <button className="button" onClick={fetchData}>
          fetch
        </button>
      </div>

      <div>
        {data && (
          <div className="container">
            <h1 className="cityname">
              {data.name}, {data.sys.country}
            </h1>
            <div className="weather-info">
              <div className="temp">{Math.round(data.main.temp)} C</div>
              <div className="coord">
                <div>Lat- {data.coord.lat}</div>
                <div>Lon- {data.coord.lon}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
