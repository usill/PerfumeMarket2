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

    const nextSlide = () => {
      const index = checkPosition(currentIndex + 1);
      const beforeIndex = currentIndex - 1;
      changeSlideTo(index, beforeIndex);
    };

    const beforeSlide = () => {
      const index = checkPosition(currentIndex - 1);
      const beforeIndex = currentIndex + 1;
      changeSlideTo(index, beforeIndex);
    }

    const checkPosition = (index:number): number => {
      let result = 0;

      if (index <= maxElem) {
        result = index;
      }
      if (index < 0) {
        result = maxElem;
      }

      currentIndex = result;
      return result;
    }

    const changeSlideTo = (index: number, beforeIndex: number) => {
      if (index || index === 0) {
        currentIndex = index;
      }
      if(beforeIndex < 0) {
        beforeIndex = maxElem;
      }
      if(beforeIndex > maxElem) {
        beforeIndex = 0
      }

      slidesList.style.right = sliderWidth * currentIndex + "px";
      changeStickTo(beforeIndex);
    }

    const changeStickTo = (beforeIndex: number) => {
      const activeStick = sticks[currentIndex] as HTMLElement;
      const beforeStick = sticks[beforeIndex] as HTMLElement;

      activeStick.classList.remove("hidden");
      beforeStick.classList.add("hidden");
    };

    const beforeButton = slider.querySelector("#slider-before-button");
    const nextButton = slider.querySelector("#slider-next-button");

    beforeButton?.addEventListener('click', () => {
      beforeSlide();
    })

    nextButton?.addEventListener('click', () => {
      nextSlide();
    })

    let intervalId: NodeJS.Timeout;

    window.addEventListener("resize", () => {
      sliderWidth = slider.clientWidth;
    });

    slider.addEventListener('mouseenter', () => {
      clearInterval(intervalId);
    })

    slider.addEventListener('mouseleave', () => {
      intervalId = setInterval(nextSlide, 3000);
    })

    sticks.forEach((value, index) => {
      const stick:HTMLElement = value.parentElement as HTMLElement;

      stick.addEventListener('click', () => {
        let currentActiveStick = 0;

        sticks.forEach((v, i) => {
          if(!v.classList.contains("hidden")) {
            currentActiveStick = i;
          }
        })

        changeSlideTo(index, currentActiveStick);
      })
    })
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
          <button className="p-2 bg-white rounded-full" id="slider-before-button">
            <FaAngleLeft size={36} color="#fe5245" />
          </button>
          <button className="p-2 bg-white rounded-full" id="slider-next-button">
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
