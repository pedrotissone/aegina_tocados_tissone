import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./simpleSlider.css"

const SinSlider = (product) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return(
        <div className="simpleSliderDiv">       
        <Slider {...settings}>

          <div>
            <img className="simpleSliderImagenes" src={product.img} loading="lazy" alt="Tocado de novia de flores preservadas en sombrero"/>
          </div>
          
          
        </Slider>
        </div>         
      );
}

export default SinSlider ;