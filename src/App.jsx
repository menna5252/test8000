
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter, createHashRouter } from "react-router";

import './App.css'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home' 
import About from './pages/About/About';
import Portofolio from './pages/Portofolio/Portofolio';
import Contact from './pages/Contact/Contact';
import Notfound from "./pages/NotFound/Notfound";

 function App() {
 const routes=createHashRouter([ 
  
    {path: "/",element:<Layout/> , children:[  
      {index: true,element:<Home/> },
      {path: "home",element:<Home/> },
      {path: "about",element:<About/> },
      {path: "portofolio",element:<Portofolio/> },
      {path: "contact",element:<Contact/> },
     {path: "*",element:<Notfound/> }] },
     
    ],)
  
  

  return (
    <RouterProvider router={routes}/>

  )
}

export default App
