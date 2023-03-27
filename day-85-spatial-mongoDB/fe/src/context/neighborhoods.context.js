import { createContext, useState, useEffect } from "react";

const NeighborhoodContext = createContext(null);

const NeighborhoodContextProvider = ({ children }) => {
  const [neighborhoods, setNeighborhoods] = useState([]);
  const ALL_NEIGHBORHOOD_ULR =
    "http://localhost:8181/neighborhood/neighborhood/list";
  async function fetchAll(url) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setNeighborhoods(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchAll(ALL_NEIGHBORHOOD_ULR);
  }, []);
  return (
    <NeighborhoodContext.Provider value={neighborhoods}>
      {children}
    </NeighborhoodContext.Provider>
  );
};

export { NeighborhoodContext, NeighborhoodContextProvider };
