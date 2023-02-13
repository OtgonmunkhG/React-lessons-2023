import { createContext } from "react";
import { DATA } from "../data/data";

const BookContext = createContext(null);

const BookContextProvide = ({ children }) => {
  const bookData = DATA;
  return (
    <BookContext.Provider value={bookData}>{children}</BookContext.Provider>
  );
};
export { BookContext, BookContextProvide };
