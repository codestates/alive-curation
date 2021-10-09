import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, { pagination } from 'swiper';

SwiperCore.use([pagination]);


function SwiperPagination(){
    return(
        <Swiper pagination={{
            "dynamicBullets": true
        }} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    )
}

export default SwiperPagination