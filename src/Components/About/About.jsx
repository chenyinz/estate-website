import React from 'react'
import "./About.css"
import {AiFillCheckCircle} from "react-icons/ai"
import {BiSolidDownArrow} from "react-icons/bi"
import Accordion from './Accordion'
const About = () => {
  return (
    <div className='About section container'>
      <div className="secContainer flex">
        {/* <img src="" alt="About Image" /> */}
      </div>
      <div className="textDiv">
        <div className="secHeader flex">
          <div className="secTitle">
            <span className="orangeText">
              Our Values
            </span>
            <h1>
              Value We Give You 
              <span className="orangeDot">
              .
              </span>
              </h1>
            
          </div>
        </div>
        <div className="accordion grid">
          <div className="singleAccordion">
            <span className="accordionTitle flex">
              <span className="flex">
                <AiFillCheckCircle className="icon"/>
                <span>Proven Track Record</span>
              </span>
              <span className="dropDownIcon">
              <BiSolidDownArrow className="icon" />
              </span>
            </span>
            <p className='description'>
            The beauty of nature is truly captivating. As the sun rises, casting its golden rays upon the earth, the world awakens with a symphony of colors. The gentle breeze whispers through the trees, carrying with it the sweet scent of blooming flowers.
            </p>
            <Accordion title='About' desc='this is about test'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About