"use client";
import React from "react";

const ScrollToTopBtn = () => {
  const clickHandler = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(clickHandler);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <>
      <svg className="absolute -top-[22px] left-0 right-0 mx-auto hidden h-[22px] w-[100px] rotate-180 text-gray-100 dark:text-zinc-800 md:inline-block">
        <use href="#curve-footer"></use>
      </svg>
      <svg className="absolute -top-[1px] left-0 right-0 mx-auto hidden h-[22px] w-[100px] text-gray-100 dark:text-zinc-800 md:inline-block">
        <use href="#curve-footer"></use>
      </svg>
      <div
        className="absolute -top-[1px] left-0 right-0 mx-auto hidden h-[30px] w-[30px] -translate-y-2/4 cursor-pointer items-center justify-center rounded-full border-2 border-orange-300 md:flex"
        onClick={clickHandler}
      >
        <svg className="size-5 rotate-180 text-zinc-700 dark:text-white">
          <use href="#chevron-down"></use>
        </svg>
      </div>
    </>
  );
};

export default ScrollToTopBtn;
