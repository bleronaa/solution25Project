import React from 'react';
import './homepage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background from './background.jpeg'
import slider from './images.jpeg'
import Home from './home';
const Homepage = () => {
    const handleClick = () => {
        console.log('Button clicked');
      };
      const Click = () => {
        console.log('Button clicked');
      };

      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


  return (
    <div className='home'>
    
      <Slider {...sliderSettings}>
                <div>
                    <img src={background} alt="Slider Image 1" />
                </div>
                <div>
                    <img src={slider} alt="Slider Image 2" />
                </div>
              
            </Slider>
        <div className="centeredText">
        <h1>Mockup to empower your <br></br>creative workflow </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex optio saepe quisquam praesentium vero, nisi illum, <br></br>error, dignissimos omnis odio? Cupiditate, maxime velit! Asperiores ipsa voluptatem corporis officia pariatur?</p>
        </div>

        <div className='button'>
            <button onClick={handleClick} className='btn'><h4>More about us</h4></button>

            <button onClick={Click} className='btn'><h4>Choose your design</h4></button>
        </div>
        <Home/>
        </div>
  
      
  )
}

export default Homepage
