import React, { useState } from 'react'
import "./Navbar.css"
import {SiTreehouse} from "react-icons/si"
import {AiFillCloseCircle} from "react-icons/ai"
import {PiDotsNineBold} from "react-icons/pi"
const Navbar = () => {
  const [menu,setMenu] =useState("menu");
  const showNavbar=()=>{
    setMenu("showNavbar menu");
  }
  const removeNavbar=()=>{
    setMenu("menu");
  }
  const [transparent,setTransparent]=useState("Navbar");
  const addBG=()=>{
    if(window.scrollY>10){
      //垂直方向滚动像素点
      setTransparent("Navbar addBackground")
    }else{
      setTransparent("Navbar");
    }
  }
  window.addEventListener("scroll",addBG);
  return (
    <div className={transparent}>
        <div className="logoDiv"><SiTreehouse className="icon"/> 
        <span>House</span>
        </div>
        <div className={menu}>
        {/* 此处再套一层div的话 再加上ul本身就是块级元素 ul的宽度会自动填充父类宽度div */}
          <ul>
            <li className="navList">Property</li>
            <li className="navList">Service</li>
            <li className="navList">Product</li>
            <li className="navList">About Us</li>
          </ul>
          <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
        </div>
        {/* 需要注意的是 后面的css样式会覆盖之前的样式 在这个样式中outline的是轮廓线 它与border的不同之处在不占用空间*/}

        <button className="contactBtn btn" >
        Contact
        </button>
        <PiDotsNineBold className="icon menuIcon" onClick={showNavbar}/>

    </div>
  )
}

export default Navbar