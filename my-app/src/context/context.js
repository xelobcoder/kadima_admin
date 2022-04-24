import React, { createContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jack from "../api/axios";
const {accesstoken,refreshtoken} = jack;

const Authcontext = createContext();

function ContextProvider({children}) {
  return (
   <div>
      <Authcontext.Provider value={{accesstoken,refreshtoken}}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}

export { ContextProvider , Authcontext };