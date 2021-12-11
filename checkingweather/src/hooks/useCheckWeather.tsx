import { useState } from "react";

export interface Main extends Record<string, unknown> {
  temp: number;
}
export interface WeatherEntity extends Record<string, unknown> {
  main: Main;
}

export interface ErrorEntity extends Record<string, unknown> {
  message: string;
}

const useCheckWeather = () => {
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setweatherData] = useState<WeatherEntity>();
  const apiKey = "98b7465353d383f3d0f3bc4a284a48ae";

  const fetchWeatherHandler = async (enteredCity: string) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Request Failed");
      }
      else{setError(null)};

      const data = await response.json();

      setweatherData(data);
    } catch (err) {
      const errorEntity = err as ErrorEntity;
      setError(errorEntity.message || "Something went wrong!");
    }
  };
  return {
    error,
    weatherData,
    fetchWeatherHandler,
  };
};
export default useCheckWeather;
