import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import './HomeSlider.css'
import Banner from '../assets/banner-3.jpg'
import Banner2 from '../assets/banner.jpg'
import Banner3 from '../assets/banner-2.jpg'

export const HomeSlider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
            <SwiperSlide>
                <div className='slider-block'>
                    <img src={Banner} alt='banner-1' width='100%' height='100%' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-block'>
                    <img src={Banner2} alt='banner-1' width='100%' height='100%' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-block'>
                    <img src={Banner3} alt='banner-1' width='100%' height='100%' />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
