import React, { useState } from "react";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Weather from "./pages/Weather";
import CityContext from "./context/CityContext";

const App = () => {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={[city, setCity]}>
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
