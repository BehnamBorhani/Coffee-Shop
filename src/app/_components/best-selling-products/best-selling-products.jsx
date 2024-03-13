"use client";
import React from "react";
import ProductCard from "../product-card/product-card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

const BestSellingProducts = () => {
  return (
    <>
      <section className="best-selling mb-8 md:mb-20">
        <div className="container">
          {/* section Head */}
          <div className="mb-5 flex select-none items-end justify-between md:mb-12">
            <div>
              <h3 className="section-title">محصولات پرفروش</h3>
              <span className="section-subtitle">پیشنهاد قهوه خورها ... </span>
            </div>
            <div className="flex gap-x-3 md:gap-x-[18px] lg:gap-x-[20px]">
              <div className="swiper-button-prev-custom flex-center md:h10 h-9 w-9 cursor-pointer rounded-full bg-white text-zinc-700 shadow-normal transition-all hover:bg-gray-300 dark:hover:text-zinc-700 md:w-10">
                <svg className="h-5 w-5 rotate-180 md:h-[26px] md:w-[26px]">
                  <use href="#chevron-left-mini"></use>
                </svg>
              </div>
              <div className="swiper-button-next-custom flex-center md:h10 h-9 w-9 cursor-pointer rounded-full bg-white text-zinc-700 shadow-normal transition-all hover:bg-gray-300 dark:hover:text-zinc-700 md:w-10">
                <svg className="h-5 w-5 md:h-[26px] md:w-[26px]">
                  <use href="#chevron-left-mini"></use>
                </svg>
              </div>
            </div>
          </div>

          <Swiper
            className="p-5"
            style={{
              padding: "1rem",
            }}
            slidesPerView={2}
            spaceBetween={24}
            // Navigation arrows
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            lazy="true"
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BestSellingProducts;
