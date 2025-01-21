"use client";

import React from "react";
import { InitDefaultCarousel } from "@/helper/CarouselHelper";

const Carousel: React.FunctionComponent = () => {
  
  React.useEffect(() => {
    InitDefaultCarousel("carousel-example");
  }, [])

  return (
    <div id="carousel-example" className="relative w-full" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <div id="carousel-item-1" className="hidden duration-700 ease-in-out w-full" data-carousel-item>
          <img
            src="https://pub-c2c1d9230f0b4abb9b0d2d95e06fd4ef.r2.dev/sites/46/2015/07/W10_Desktop_Cortana_Home_16x9_en-USwetyr-2.jpg"
            className="absolute left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div id="carousel-item-2" className="hidden duration-700 ease-in-out w-full" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
            className="absolute left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div id="carousel-item-3" className="hidden duration-700 ease-in-out w-full" data-carousel-item>
          <img
            src="https://pub-c2c1d9230f0b4abb9b0d2d95e06fd4ef.r2.dev/sites/46/2015/07/W10_Desktop_Cortana_Home_16x9_en-USwetyr-2.jpg"
            className="absolute left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div id="carousel-item-4" className="hidden duration-700 ease-in-out w-full" data-carousel-item>
          <img
            src="https://pub-c2c1d9230f0b4abb9b0d2d95e06fd4ef.r2.dev/sites/46/2015/07/W10_Desktop_Cortana_Home_16x9_en-USwetyr-2.jpg"
            className="absolute left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <button
          id="carousel-indicator-1"
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          id="carousel-indicator-2"
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
        ></button>
        <button
          id="carousel-indicator-3"
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
        ></button>
        <button
          id="carousel-indicator-4"
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
        ></button>
      </div>
      <button
        id="data-carousel-prev"
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        id="data-carousel-next"
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
