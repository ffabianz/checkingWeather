import { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CityContext from "../../context/CityContext";
import useCheckWeather from "../../hooks/useCheckWeather";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";
import "./weather.css";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);


const Weather = () => {
  const classes = useStyles();
  const ctx = useContext(CityContext);
  const history = useHistory();
  const [city] = ctx;
  const {error, weatherData, fetchWeatherHandler } =
    useCheckWeather();
  useEffect(() => {
    if (
      (weatherData === null ||
        weatherData === undefined ||
        weatherData.length === 0) &&
        city !== undefined &&
        error === null
    ) {
      fetchWeatherHandler(city);
    }
  }, [city,error,weatherData,fetchWeatherHandler]);

   
  const temp = weatherData?.main?.temp;
  let color = "red";
  if (temp !== undefined && temp <= 15) color = "blue";
  return (
    <div className="route">
      <div className="wrapper">
        <div className={`${color} card`}>
          {error === null && <h1>La Température à {city} est</h1>}
          {temp === undefined && <h2>{error}</h2>}
          {temp !== undefined && temp >= 15 && <h2>{temp}, il fait chaud</h2>}
          {temp !== undefined && temp < 15 && <h2>{temp}, il fait froid</h2>}
          <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          history.push("/home");
        }}
      >
        retourner
      </Button>
        </div>
             
      </div>
    </div>
  );
};

export default Weather;
