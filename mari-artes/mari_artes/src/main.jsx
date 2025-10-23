import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
// REACT
import Bags from './pages/Bags.jsx'
import Home from './pages/Home.jsx'
import GuideBuy from './pages/GuideBuy.jsx'
import Necklaces from './pages/Necklaces.jsx'
import Bracelets from './pages/Bracelets.jsx'
import Keychains from './pages/Keychains.jsx'
import PhotoFrame from './pages/PhotoFrame.jsx'
import About from './pages/About.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/", // PÁGINA PRINCIPAL DO OUTLET
        element: <Home/>
      },
      {
        path: "/bags", // PÁGINA DE BOLSAS
        element: <Bags/>
      },
      {
        path: "/necklaces", // PÁGINA DE COLARES
        element: <Necklaces/>
      },
      {
        path: "/bracelets", // PÁGINA DE PULSEIRAS
        element: <Bracelets/>
      },
      {
        path: "/keychains", // PÁGINA DE CHAVEIROS
        element: <Keychains/>
      },
      {
        path: "/photoframe", // PÁGINA DE PORTA-RETRATOS
        element: <PhotoFrame/>
      },
      {
        path: "/about", // PÁGINA INFORMATIVA - QUEM SOMOS NÓS
        element: <About/>
      },
      {
        path: "/guidebuy", // PÁGINA INFORMATIVA - COMO COMPRAR
        element: <GuideBuy/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
