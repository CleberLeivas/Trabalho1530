import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HOME from './Home.jsx'
import { CALCULADORA } from './Calculadora.jsx';
import { MAPAS } from './Mapas.jsx'
import { API } from './Api.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <HOME />,
  },
  {
    path: "/Calculadora",
    element:  <CALCULADORA />,
  },
  {
    path: "/Mapas",
    element:  <MAPAS />,
  },
  {
    path: "/Api",
    element:  <API />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
