import React from 'react'
import "./Listing.css"
import {FaBed} from "react-icons/fa"
import {MdPool} from "react-icons/md"
import {AiOutlineWifi} from "react-icons/ai"
import {MdFastfood} from "react-icons/md"
import image1 from "../../Assets/1.jpg"
import image2 from "../../Assets/2.jpg"
import image3 from "../../Assets/3.jpg"
import image4 from "../../Assets/4.jpg"
import image5 from "../../Assets/5.jpg"
import image6 from "../../Assets/6.jpg"

const properties=[  
  {
    id:1,
    image:image1,
    name:"Countryside Estate,Italy",
    price:"3,445",
    desc:"A luxurious Balinese villa surrounded by lush gardens",
    beds:6,
  },
  {
    id:2,
    image:image2,
    name:"New Yern",
    price:"3,445",
    desc:"A luxurious Balinese villa surrounded by lush gardens",
    beds:6,
  },
  {
    id:3,
    image:image3,
    name:"New Yern",
    price:"3,445",
    desc:"A luxurious Balinese villa surrounded by lush gardens",
    beds:6,
  },
  {
    id:4,
    image:image4,
    name:"New Yern",
    price:"3,445",
    desc:"A luxurious Balinese villa surrounded by lush gardens",
    beds:6,
  },
  {
    id:5,
    image:image5,
    name:"New Yern",
    price:"3,445",
    desc:"A luxurious Balinese villa surrounded by lush gardens",
    beds:6,
  }
]
const Listing = () => {
  return (
    <div className="Listing container section">
      <div className="secContainer">
        <div className="secHeader">
          <span className="orangeText">Our Listing</span>
          <h1 className="title">Buy And Sell Your Assert<span className="orangeDot">.</span></h1>
          <p>Your Housing real estate agency is you key to uncovering hidden</p>
          <div className="btns flex">
            <button className="btn active">Exclusive</button>
            <button className="btn ">Standard</button>
          </div>
        </div>
        <div className="secContent grid">
          {
            properties.map(({id,image,name,price,desc,beds})=>{
              return (
                <div key={id} className="singleListing">
                <div className="imgDiv">
                  <img src={image} alt="House Image"  />
                </div>
                <div className="info">
                  <h2 className="name">{name}</h2>
                  <span className="price">
                    <span className="digits">{price}</span>
                    <span className="orangeText">USD</span>
                    <span className="duration">Day</span>
                  </span>
                  <p>
                   {desc}
                  </p>
                  <div className="ammenities flex">
                    <span className="flex">
                      <FaBed className="icon"/>
                      <blockquote>{beds}</blockquote>
                    </span>
                    <span className="flex">
                      <MdPool className="icon"/>
                    </span>
                    <span className="flex">
                      <AiOutlineWifi className="icon"/>
                    </span>
                    <span className="flex">
                      <MdFastfood className="icon"/>
                    </span>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Listing