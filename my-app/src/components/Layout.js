import React from 'react';
import { Outlet} from 'react-router-dom';
import App from '../App';
import Login from './login';
import ContextProvider from '../context/context';


export default function Layout() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
