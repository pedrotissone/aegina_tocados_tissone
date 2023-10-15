import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./simpleSlider.css"

const SimpleSlider = (product) => {
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
          <div>
          <img className="simpleSliderImagenes" src={product.img2} loading="lazy" alt="Flores preservadas para tocados de novia"/>
          </div>
          <div>
          <img className="simpleSliderImagenes" src={product.img3}  loading="lazy" alt="Niña con corona de flores preservadas"/>
          </div>
          
        </Slider>
        </div>         
      );
}

export default SimpleSlider;
