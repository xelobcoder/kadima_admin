import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Login from './components/login';
import {ContextProvider }from './context/context';
import reportWebVitals from './reportWebVitals';

let container = document.getElementById('root');

let root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
            <Route path="/*" element={<App/>}/>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
</React.StrictMode>,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
