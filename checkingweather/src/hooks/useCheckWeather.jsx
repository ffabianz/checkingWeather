import { useState } from "react";

const useCheckWeather = () =>{
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setweatherData] = useState([]);
  const apiKey = "98b7465353d383f3d0f3bc4a284a48ae";

  const fetchWeatherHandler = async (enteredCity) => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${apiKey}&units=metric`);
    
    if (!response.ok){
      throw new Error("Request Failed");
    }

    const data = await response.json();

    setweatherData(data);
  } catch (err){
    setError(err.message || 'Something went wrong!');
  }
  setIsLoading(false);
};
return {
 isLoading,
 error,
 weatherData,
 fetchWeatherHandler
};
};
export default useCheckWeather;

