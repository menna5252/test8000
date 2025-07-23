import React from 'react'
import ReactDOM from "react-dom/client";
import { Outlet } from 'react-router-dom';



import NavBar from '../../components/Nav/NavBar'
import Footer from '../../components/Footer/Footer'


export default function Layout() {



  return (
    <>
 <NavBar/>
<Outlet>

</Outlet>
 <Footer/>
 </>
  )
}
