"use client";

import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Carousel: React.FunctionComponent = () => {
  React.useEffect(() => {
    const slider = document.querySelector("#slider") as HTMLElement;
    const slidesList = slider.firstElementChild as HTMLElement;
    const sticks = [...slider.querySelectorAll("#sticks")];

    let sliderWidth = slider.clientWidth;
    let currentIndex = 0;
    let maxElem = 2;

    if (!sliderWidth || !slidesList || !slider) return;

    window.addEventListener("resize", () => {
      sliderWidth = slider.clientWidth;
      console.log(sliderWidth);
    });

    setInterval(() => {
      let beforeIndex = currentIndex;

      if (currentIndex >= maxElem) {
        currentIndex = 0;
        beforeIndex = maxElem;
      } else {
        currentIndex++;
      }

      nextSlide();
      changeStick(beforeIndex);
    }, 3000);

    const nextSlide = (index: number | null = null) => {
      if (index) {
        currentIndex = index;
      }

      slidesList.style.right = sliderWidth * currentIndex + "px";
    };

    const beforeSlide = (index: number | null = null) => {
      if (index) {
        currentIndex = index;
      }

      slidesList.style.right = sliderWidth * currentIndex + "px";
    }

    const changeStick = (beforeIndex: number) => {
      const activeStick = sticks[currentIndex] as HTMLElement;
      const beforeStick = sticks[beforeIndex] as HTMLElement;

      activeStick.classList.remove("hidden");
      beforeStick.classList.add("hidden");
    };
  }, []);

  return (
    <div
      id="slider"
      className="w-full h-52 xl:h-96 bg-gray-200 overflow-hidden relative rounded-lg sm:h-64"
    >
      <div
        className="absolute h-full w-full flex duration-1000 ease-in-out"
        style={{ right: "0px" }}
      >
        <div className="min-w-full">
          <img
            src="https://pub-c2c1d9230f0b4abb9b0d2d95e06fd4ef.r2.dev/sites/46/2015/07/W10_Desktop_Cortana_Home_16x9_en-USwetyr-2.jpg"
            alt=""
            className="w-full absolute block -translate-y-1/2 top-1/2"
          />
        </div>
        <div className="min-w-full">
          <img
            src="https://img.ixbt.site/live/topics/preview/00/07/92/91/16ecb2aa16.jpg"
            alt=""
            className="w-full absolute block -translate-y-1/2 top-1/2"
          />
        </div>
        <div className="min-w-full">
          <img
            src="https://pub-c2c1d9230f0b4abb9b0d2d95e06fd4ef.r2.dev/sites/46/2015/07/W10_Desktop_Cortana_Home_16x9_en-USwetyr-2.jpg"
            alt=""
            className="w-full absolute block -translate-y-1/2 top-1/2"
          />
        </div>
      </div>
      <div className="relative top-0 w-full h-full opacity-40 hover:opacity-100 duration-300 ease-in-out">
        <div className="relative w-full flex justify-between h-fit top-1/2 -translate-y-1/2 px-4">
          <button className="p-2 bg-white rounded-full">
            <FaAngleLeft size={36} color="#fe5245" />
          </button>
          <button className="p-2 bg-white rounded-full">
            <FaAngleRight size={36} color="#fe5245" />
          </button>
        </div>
        <div className="absolute h-fit bottom-4 left-1/2 -translate-x-1/2 flex gap-1 w-fit">
          <button className="w-4 h-4 bg-gray-100 flex justify-center items-center shadow-lg">
            <div className="w-3 h-3 bg-red-600" id="sticks"></div>
          </button>
          <button className="w-4 h-4 bg-gray-100 flex justify-center items-center shadow-lg">
            <div className="w-3 h-3 bg-red-600 hidden" id="sticks"></div>
          </button>
          <button className="w-4 h-4 bg-gray-100 flex justify-center items-center shadow-lg">
            <div className="w-3 h-3 bg-red-600 hidden" id="sticks"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
