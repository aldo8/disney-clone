import styled from "styled-components";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ImageSlider = () => {
    const imgSlider = [
        {
            image:'/images/slider-badag.jpg',
            name:'badag-slider'
        },
        {
            image:'/images/slider-badging.jpg',
            name:'badging-slider'
        },
        {
            image:'/images/slider-scale.jpg',
            name:'scale-slider'
        },
        {
            image:'/images/slider-scales.jpg',
            name:'scales-slider'
        }
    ]
    const settings = {
        dots:true,
        Infinity:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }
    return (
           <Carousel {...settings}>
                {
                    imgSlider.map((data) => {
                    return (
                    <Wrap>
                    <a>
                    <img src={data.image} alt={data.name}/>
                    </a>
                    </Wrap>
                    )
                    })
                    
                }
               </Carousel>
    )
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
   
    &:hover{
    opacity: 1;
    }
  }
  ul li button {
      &:before {
          font-size: 10px;
          color: rgb(150,158,171);
      }
  }
  li.slick-active button:before{
      color:white;
  }
  .slick-list{
      overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
  `
const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;
a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -1px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    
    img{
        width: 100%;
        height:100%;
        border-radius: 4px;
    }
    &:hover{
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }
}

`

export default ImageSlider
