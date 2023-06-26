import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carrousel.css"

const Carrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return(
        <>
        <center><h2 className="galeriaTitle">Happiness is only real when shared</h2></center>       
        <Slider {...settings}>
          <div>
            <img className="carrouselImagenes" src="/img/carrousel1.jpg"/>
          </div>
          <div>
          <img className="carrouselImagenes" src="/img/carrousel2.jpg"/>
          </div>
          <div>
          <img className="carrouselImagenes" src="/img/carrousel3.jpg"/>
          </div>
        </Slider>
        </>         
      );
}

export default Carrousel;
