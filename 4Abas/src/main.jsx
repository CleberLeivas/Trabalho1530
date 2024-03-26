import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Menu from './components/Menu.jsx'; // Importe o componente Menu
import Home from './Home.jsx';
import { Calculadora } from  './Calculadora.jsx';
import { Mapa } from './Mapa.jsx';
import { MarvelAPI } from './MarvelAPI.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Menu />,
  },
  {
    path: "/home",
    element:  <Home />,
  },
  {
    path: "/calculadora",
    element:  <Calculadora />,
  },
  {
    path: "/mapa",
    element:  <Mapa />,
  },
  {
    path: "/marvelAPI",
    element:  <MarvelAPI />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
