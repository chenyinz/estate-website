import React from 'react'
import "./Navbar.css"
import {SiTreehouse} from "react-icons/si"
const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="logeDiv">
           <div className="logoDiv"><SiTreehouse className="icon"/></div>
        </div>
    </div>
  )
}

export default Navbar