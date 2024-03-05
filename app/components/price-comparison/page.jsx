"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { useState } from "react";
import { useSwiperSlide } from 'swiper/react';

export default function Price() {
  const img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Swiper
      effect="coverflow"
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      createElements={true}
      autoplay={true}
      breakpoints={{
        640: {
          slidesPerView: 2.75,
        },
      }}
    >
      {img.map((e) => (
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src="/kitish.jpeg"
              width={500}
              height={350}
              alt="1"
              className={`${isActive ? "opacity-100" : "opacity-50"}`}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
