import React from 'react'
import "./Sponsors.css"
import logo1 from "../../Assets/3.jpg";
import logo2 from "../../Assets/4.jpg";
import logo3 from "../../Assets/5.jpg";
import logo4 from "../../Assets/6.jpg";
import logo5 from "../../Assets/7.jpg";
const Sponsors = () => {
  return (
    <div className="Sponsors">
      <div className='secContainer flex'>
        <span>
          <img src={logo1} alt="Logo Image" />
        </span>
        <span>
          <img src={logo2} alt="Logo Image" />
        </span>
        <span>
          <img src={logo3} alt="Logo Image" />
        </span>
        <span>
          <img src={logo4} alt="Logo Image" />
        </span>
        <span>
          <img src={logo5} alt="Logo Image" />
        </span>
      </div>
    </div>
  )
}

export default Sponsors