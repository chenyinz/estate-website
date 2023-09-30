import React from 'react'
import "./Hello.css"
import {HiLocationMarker} from "react-icons/hi"
import Image from "../../Assets/2.jpg"
const Hello = () => {
  return (
    <div className="hello">
      <div className="secContainer container flex">
        <div className="textDiv">
          <h1>DisCover Most Suitable Perperty</h1>
          <p>
            Find a variety of properties that suit you very easily.forget all difficult in finding a residernce for you.
          </p>
          <div className="searchBar flex">
            <div className="inputBox flex">
              <HiLocationMarker className="icon"/>
              <input type="text" placeholder='Search by location'/>
            </div>
            <button className="btn">
              Seacher
            </button>
          </div>
          <div className="numbers flex">
            <div className="singleNumber">
              <span>
                9k<blockquote>+</blockquote>
              </span>
              <small>
                Premium Product
              </small>
            </div>
            <div className="singleNumber">
              <span>
                2k<blockquote>+</blockquote>
              </span>
              <small>
                Youtube Product
              </small>
            </div>
            <div className="singleNumber">
              <span>
                9k<blockquote>+</blockquote>
              </span>
              <small>
                FaceBook Product
              </small>
            </div>
          </div>
        </div>
        <div className="imgDiv">
          <img src={Image} alt="Home Imager" />
        </div>
      </div>
    </div>
  )
}

export default Hello