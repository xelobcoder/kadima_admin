import React from 'react';
import LandSelection from './landSelection';
import { Authcontext } from '../context/context';



export default function Request() {
  const tokenContext = React.useContext(Authcontext);
  console.log(Object.values(tokenContext));
  return (
    <div>
      {
        tokenContext.accesstoken !== "" ? <div> {tokenContext.refreshtoken}</div>:null
      }
    </div>
  )
}
