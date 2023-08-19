import React from 'react'
import  { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import CartList from '../Cart/Cart';

export const Homepg = () => {
  
  return (
       <> <section className='hero-section'>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000} // Interval between slides in milliseconds
        >
          <div>
            <img src='https://swabirestaurants.com/images/food-4-original-1200x800.jpg' alt="Image 1" />
          </div>
          <div>
            <img src="https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/56/2015/07/Junk-food.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="https://cdn.wallpapersafari.com/69/95/GsNcVt.jpg" alt="Image 3" />
          </div>
          {/* Add more images here */}
        </Carousel>

        <div className='hero-content'>
          <p>Welcome To</p>
          <h1>TasteTitans</h1>
        </div>
      </section>
      <CartList/>
    </>
  );
};
export default Homepg;