import { createContext, useState } from 'react';

export const SearchFlightContext = createContext({
    departureAirportCode: "",
    destinationAirportCode: "",
    departureCity: "",
    destinationCity: ""
});

export const SearchFlightContextProvider = ({ children }) => {
  const [departureAirportCode, setDepartureAirportCode] = useState("");
  const [destinationAirportCode, setDestinationAirportCode] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  return (
    <SearchFlightContext.Provider value={{ 
        departureAirportCode,
        setDepartureAirportCode,
        destinationAirportCode,
        setDestinationAirportCode,
        departureCity,
        setDepartureCity,
        destinationCity,
        setDestinationCity
        }}
    >
      {children}
    </SearchFlightContext.Provider>
  );
};

export default SearchFlightContext;