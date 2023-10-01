import React from 'react'
import "./Popular.css"
import {BiLeftArrowAlt} from "react-icons/bi"
import {BiRightArrowAlt} from "react-icons/bi"
import image2 from "../../Assets/2.jpg";
import image3 from "../../Assets/3.jpg";
import image4 from "../../Assets/4.jpg";
import image5 from "../../Assets/5.jpg";
import image6 from "../../Assets/6.jpg";
import image7 from "../../Assets/7.jpg";
const Popular = () => {
  return (
    <div className="Popular container section">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <span className="orangeText">
              Best Choice
            </span>
            <h1 className="Title">
              Popular Residences
              <span className="orangeDot">
                .
              </span>
            </h1>
          </div>
          <div className="icons flex">
            <BiLeftArrowAlt className="icon"/>
            <BiRightArrowAlt className="icon"/>
          </div>
        </div>
        <div className="secContent grid">
            <div className="singleProperty">
              <div className="imgDiv">
                <img src={image2} alt="House Image" />
              </div>
              <div className="info">
                <span className="price">
                  <span className="orangeText">$</span>
                </span>
                  <span className="digits">68454</span>
                <h2 className="name">Mountain Retreat,Aspen</h2>
                <p>Beatiful Mountain welcome to you here!</p>
              </div>
            </div>
            <div className="singleProperty">
              <div className="imgDiv">
                <img src={image3} alt="House Image" />
              </div>
              <div className="info">
                <span className="price">
                  <span className="orangeText">$</span>
                </span>
                  <span className="orangeText">88885</span>
                <h2 className="name">New Yern Town</h2>
                <p>Here have thousands of riches</p>
              </div>
            </div>
            <div className="singleProperty">
              <div className="imgDiv">
                <img src={image4} alt="House Image" />
              </div>
              <div className="info">
                <span className="price">
                  <span className="orangeText">$</span>
                </span>
                  <span className="orangeText">18885</span>
                <h2 className="name">Sea Town</h2>
                <p>Sea Town have a grest of blue sky!</p>
              </div>
            </div>
            <div className="singleProperty">
              <div className="imgDiv">
                <img src={image5} alt="House Image" />
              </div>
              <div className="info">
                <span className="price">
                  <span className="orangeText">$</span>
                </span>
                  <span className="orangeText">28885</span>
                <h2 className="name">Middle Town</h2>
                <p>Here have taste food such as toast、Chinese Foods</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Popular