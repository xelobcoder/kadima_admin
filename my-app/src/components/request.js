import React from 'react';
import LandSelection from './landSelection';
import { Authcontext } from '../context/context';
import Headers from "./header";



export default function Request() {
  const tokenContext = React.useContext(Authcontext);
  return (
    <div>
      <Headers/>
      <LandSelection/>
    </div>
  )
}
