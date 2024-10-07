'use client'

import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
export default function Preview() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    console.log(thumbsSwiper);
    
    return (
        <div className={styles.preview}>
            <Swiper modules={[Thumbs]} style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>

            </Swiper>
            <Swiper modules={[Thumbs]} onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
