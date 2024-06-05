import React from 'react';
import Slider from 'react-slick';
import ProfileCard from '../card/card';
import './slider.css'; // Import your custom CSS for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorizontalSlider = ({ data }) => {

    const PrevArrow = ({ onClick }) => (
        <button className="slick-arrow slick-prev" onClick={onClick} style={{backgroundColor : 'black'}}>
          Previous
        </button>
      );
    
      const NextArrow = ({ onClick }) => (
        <button className="slick-arrow slick-next" onClick={onClick} style={{backgroundColor : 'black'}}>
          Next
        </button>
      );
  const settings = {
    dots: true,
    infinite: data.length > 1,
    speed: 500,
    slidesToShow:  Math.min(data.length, 4), // Number of slides to show at once
    slidesToScroll: data.length > 3 ? 1 : 0, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(data.length, 2),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: data.length > 3 ? <PrevArrow /> : null,
    nextArrow: data.length > 3 ? <NextArrow /> : null
  };

  

  return (
    <div className="best-matches-slider">
      <Slider {...settings}>
        {data.map((std, index) => (
          <div key={index} className="profile-card-container">
            <ProfileCard
              Name={std.name}
              Subject={'Front End Development'}
              Faculty={std.faculty}
              Department={std.department}
              className="profile-card"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalSlider;
