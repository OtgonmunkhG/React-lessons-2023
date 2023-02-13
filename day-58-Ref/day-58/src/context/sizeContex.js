import { createContext } from "react";
import { useState } from "react";

const SizeContext = createContext(null);

const SizeContextProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <SizeContext.Provider value={[isLarge, setIsLarge, imageSize]}>
      {children}
    </SizeContext.Provider>
  );
};

export { SizeContext, SizeContextProvider };
