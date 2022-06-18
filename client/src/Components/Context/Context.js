import React, { createContext, useContext, useState } from 'react';

const WsContext = createContext();

function Context({ children }) {
  const [ws, setWs] = useState(new WebSocket('ws://localhost:3001'));

  console.log(ws.readyState);

  return (
    <WsContext.Provider value={ws}>
      {children}
    </WsContext.Provider>
  );
}

export default Context;

export const useWsContext = () => useContext(WsContext);
