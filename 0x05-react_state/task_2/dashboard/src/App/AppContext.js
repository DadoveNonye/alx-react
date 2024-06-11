import React, { createContext, useState } from "react";

const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const defaultLogOut = () => {};

const UserContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const logOut = () => {
    setUser({ ...defaultUser, isLoggedIn: false });
  };

  return (
    <UserContext.Provider value={{ user, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
