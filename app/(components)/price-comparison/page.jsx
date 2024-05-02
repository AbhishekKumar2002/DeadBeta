"use client";

import { useEffect, useState } from "react";
import "./style.css";

const Slider = () => {
  const [fare, setFare] = useState();

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
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      
      const response = await fetch("/api/fare");
      const data = await response.json();
      const price = data.price.fare;
      setFare(price);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="">
      <div class="container mb-28">
      <div class="slide">
        <div
          class="item"
          style={{
            backgroundImage:
              "url(https://www.shutterstock.com/image-photo/wroclaw-poland-aug-25-2020-600nw-2258295659.jpg)",
          }}
        >
          <div class="content">
            <div class="name">Uber</div>
            <div class="des"> </div>
            <button>{fare}</button>
          </div>
        </div>
        <div
          class="item"
          style={{
            backgroundImage:
              "url(https://miro.medium.com/v2/resize:fit:2000/format:webp/1*MEpturVAaHNpeaXw691Y1A.jpeg)",
          }}
        >
          {/* <div
            class="item"
            style={{
              backgroundImage:
                "url(https://miro.medium.com/v2/resize:fit:2000/format:webp/1*MEpturVAaHNpeaXw691Y1A.jpeg)",
            }}
          ></div> */}
          <div class="content">
            <div class="name">Price Prediction</div>
            <div class="des"></div>
            {/* <button>{fare}</button> */}
          </div>
        </div>
        <div
          class="item"
          style={{
            backgroundImage:
              "url(https://www.techzim.co.zw/wp-content/uploads/2023/05/Indrive.png)",
          }}
        >
          <div class="content">
            <div class="name">Indriver</div>
            <div class="des">
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum! */}
            </div>
            <button>{fare - 20}</button>
          </div>
        </div>
        <div
          class="item"
          style={{
            backgroundImage:
              "url(https://startupstorymedia.com/wp-content/uploads/2023/01/Rapido_1-1.jpg)",
          }}
        >
          <div class="content">
            <div class="name">Rapido</div>
            {/* <div class="des">{fare + 10}</div> */}
            <button>{fare + 10}</button>
          </div>
        </div>
        {/* <div
          class="item"
          style={{
            backgroundImage:
              "url(https://cdn.neowin.com/news/images/uploaded/2021/03/1615995441_ola-taxi_story.jpg)",
          }}
        >
          <div class="content">
            <div class="name">OLA</div>
            <div class="des"></div>
            <button>{fare + 37}</button>
          </div>
        </div> */}
        <div
          class="item"
          style={{
            backgroundImage:
              "url(https://cdn.neowin.com/news/images/uploaded/2021/03/1615995441_ola-taxi_story.jpg)",
          }}
        >
          <div class="content">
            <div class="name">OLA</div>
            {/* <div class="des"></div> */}
            <button>{fare + 37}</button>
          </div>
        </div>
      </div>

      <div class="button">
        <button class="prev">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button class="next">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Slider;
