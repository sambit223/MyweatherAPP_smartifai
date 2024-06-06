import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import Calendar from "./Calendar";
import MetricsView from "./MetricsView";

const cities = ["London", "New York", "Tokyo", "Sydney", "Paris"];

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [timeframe, setTimeframe] = useState("daily");

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      for (const city of cities) {
        const url = `http://api.weatherapi.com/v1/current.json?key=f08c79ef6410433dbb8180719240606&q=${city}&aqi=no`;
        const response = await axios.get(url);
        data.push(response.data);
      }
      setWeatherData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
    console.log(timeframe) ;
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center flex-col gap-5">
      <h1 className="text-2xl font-bold mb-10">Weather Dashboard</h1>
      <div className="flex justify-between items-center mb-4 gap-5">
        <div className="flex items-center">
          <select
            className="ml-4 p-2 border rounded w-[12rem]"
            value={timeframe}
            onChange={handleTimeframeChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <Calendar />
      </div>
      <Carousel data={weatherData} currentIndex={currentCityIndex} />
      <MetricsView data={weatherData[currentCityIndex]} />
    </div>
  );
};

export default Dashboard;
