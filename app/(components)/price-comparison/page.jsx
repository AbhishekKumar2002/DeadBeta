// "use client";
// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/effect-coverflow";
// import Image from "next/image";
// import { useState } from "react";
// import { useSwiperSlide } from 'swiper/react';

// export default function Price() {
//   const img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   return (
//     <Swiper
//       effect="coverflow"
//       centeredSlides={true}
//       slidesPerView={1}
//       loop={true}
//       createElements={true}
//       autoplay={true}
//       breakpoints={{
//         640: {
//           slidesPerView: 2.75,
//         },
//       }}
//     >
//       {img.map((e) => (
//         <SwiperSlide>
//           {({ isActive }) => (
//             <Image
//               src="/kitish.jpeg"
//               width={500}
//               height={350}
//               alt="1"
//               className={`${isActive ? "opacity-100" : "opacity-50"}`}
//             />
//           )}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// Mark the parent component as a Client Component
"use client";

// Import the component that imports useEffect
import React, { useEffect } from "react";
// import MyComponent from "./(components)";

// Rest of the parent component code

import styles from "./Slider.module.css"; // Import CSS module for styling

// Rest of your component code

const Slider = () => {
  useEffect(() => {
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");

    next.addEventListener("click", function () {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    });

    prev.addEventListener("click", function () {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
    });
    // JavaScript logic for the card slider
    // Make sure to adjust the code to work with React and Next.js
    const handleNext = () => {
      // Your logic for moving to the next card
    };

    const handlePrev = () => {
      // Your logic for moving to the previous card
    };

    // Add event listeners, cleanup, etc.
  }, []); // Empty dependency array ensures the effect runs only once after component mount

  return (
    <>
      <div className={styles.container}>
        <div className={styles.slide}>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.name}>Switzerland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className={styles.item}
            // style="background-image: url(https://i.ibb.co/jrRb11q/img2.jpg);"
            style={{
              backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)",
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Finland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className={styles.item}
            style={{
              backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)",
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Iceland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className={styles.item}
            // style="background-image: url(https://i.ibb.co/Bq4Q0M8/img4.jpg)"
            style={{
              backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)",
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Australia</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className={styles.item}
            // style="background-image: url(https://i.ibb.co/jTQfmTq/img5.jpg);"
            style={{
              backgroundImage: "url(https://i.ibb.co/jTQfmTq/img5.jpg)",
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Netherland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className={styles.item}
            style={{
              backgroundImage: "url(https://i.ibb.co/RNkk6L0/img6.jpg)",
            }}
            // style="background-image: url(https://i.ibb.co/RNkk6L0/img6.jpg);"
          >
            <div className={styles.content}>
              <div className={styles.name}>Ireland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className="button">
          <button className="prev" onClick={() => {}}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
