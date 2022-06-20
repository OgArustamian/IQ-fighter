/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useState,
} from 'react';

const WsContext = createContext();

function Context({ children }) {
  const [ws, setWs] = useState(new WebSocket('ws://localhost:3001'));
  const [modal, setModal] = useState(false);

  return (
    <WsContext.Provider value={{ ws, modal, setModal }}>
      {children}
    </WsContext.Provider>
  );
}

export default Context;

export const useWsContext = () => useContext(WsContext);
