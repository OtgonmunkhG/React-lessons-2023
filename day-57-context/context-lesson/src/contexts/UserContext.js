import { createContext } from "react";

const UserContext = createContext(null);

//Provider
//Suu HHK

const UserProvider = ({ children }) => {
  const userName = "Shine Suu";

  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };

//Consumer
//Irged
