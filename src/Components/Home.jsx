import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { information } from '../App';
import "./style.css"
const Home = () => {
  const data=useContext(information)
  console.log(data)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div>
      <button></button><button></button><button></button>
    </div>
    <Slider {...settings} >
      {
        data?.map((ele)=>{
          ele?.items?.map((ele1)=>{
            ele1?.products.map((ele2)=>{
              return(
                <img src={ele2.catImg}/>
              )
            })
          })
        })
      }
      
    </Slider>
    </>
  )
}

export default Home