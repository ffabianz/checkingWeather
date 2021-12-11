import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CityContext from "../context/CityContext";
import useCheckWeather from "../hooks/useCheckWeather";
import { BottomNavigationAction } from "@material-ui/core";

const Weather = () => {
  const ctx = useContext(CityContext);
  const [city] = ctx;
  const { isLoading, error, weatherData, fetchWeatherHandler } =
    useCheckWeather();
  useEffect(() => {
    if (weatherData == null || weatherData == undefined || weatherData.length == 0) {
    fetchWeatherHandler(city);
}
  }, [fetchWeatherHandler]);

  const temp = weatherData?.main?.temp;
  return (
    <div>
      <h1>Weather page</h1>
      <h2>{temp}</h2>
      {temp >= 15 && <h2>il fait chaud</h2>}
      {temp < 15 && <h2>il fait froid</h2>}
      <Link to="/home"> test2</Link>
    </div>
  );
};

export default Weather;
