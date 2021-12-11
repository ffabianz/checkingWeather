import React from "react";

const CityContext = React.createContext<[string, Function] | []>([]);

export default CityContext;
