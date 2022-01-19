
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);



const Landing = () => {
  const [image, setImage] = useState([
    { id: 'slide-1', url: '/photoSlider/1.jpg' },
    { id: 'slide-2', url: '/photoSlider/2.jpg' },
    { id: 'slide-3', url: '/photoSlider/3.jpg' },
    { id: 'slide-4', url: '/photoSlider/4.jpg' }
  ])

  const [imgBaner, setImgBaner] = useState([
    { id: 'banner-1', url: '/photoSlider/1.jpg' },
    { id: 'banner-2', url: '/photoSlider/2.jpg' }
  ])

  return (
    <div className="container mx-auto p-2 flex flex-col lg:flex-row-reverse">
      <div className='lg:w-4/6 lg:pr-2 lg:pt-1 lg:rounded-xl'>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
          "delay": 4500,
          "disableOnInteraction": false
        }} pagination={{
          "clickable": true
        }} navigation={true} className="mySwiper">
          {image.map(slide => {
            return <SwiperSlide className='rounded' key={slide.id}><img src={slide.url} alt='notLoaded'></img></SwiperSlide>
          })}
        </Swiper>
      </div>

      {window.innerWidth > 640 && <div className='w-full flex lg:w-2/6 lg:flex-col lg:justify-between'>
        {imgBaner.map(banner => {
          return <img className='p-1 rounded-xl w-1/2 lg:w-full lg:rounded-xl lg:py-1' src={banner.url} alt='notLoaded'></img>
        })}
      </div>}

    </div>
  );
}

export default Landing;