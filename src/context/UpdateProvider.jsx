import React, { useContext, createContext, useState } from "react";

export const UpdateContext = createContext();

const UpdateProvider = ({ children }) => {
  const [updated, setUpdated] = useState(0); // state for re-rendering components

  return (
    <UpdateContext.Provider value={{ updated, setUpdated }}>
      {children}
    </UpdateContext.Provider>
  );
};

export default UpdateProvider;
