import React, { createContext, useState } from 'react';


export const OpenContext = createContext();

const OpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

export default OpenProvider;