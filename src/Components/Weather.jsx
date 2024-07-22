// src/components/Weather.js

import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    const apiKey = "a1fe61928cca17bfd3b654a0aceadfbc"; // Replace with your OpenWeatherMap API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError("");
    } catch (error) {
      setError("Error fetching weather data");
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Weather App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-4 py-2 border rounded-lg text-gray-700"
        />
        <button
          onClick={getWeather}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Get Weather
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
          <p className="text-xl mb-1">Temperature: {weather.main.temp} °C</p>
          <p className="text-xl">Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
