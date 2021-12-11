import React, { useState } from "react";
import { Route,Redirect } from "react-router-dom";
import Weather from "./pages/weather/Weather";
import CityContext from "./context/CityContext";
import Home from "./pages/home/Home";

const App = () => {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={[city, setCity]}>
      <Redirect from="/" to="home" />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/weather">
        <Weather />
      </Route>
    </CityContext.Provider>
  );
};

export default App;
