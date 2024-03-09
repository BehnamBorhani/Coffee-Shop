import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
      <div className="relative mb-2 md:mb-5">
        <Image
          width={265}
          height={265}
          src="/images/products/p1.png"
          loading="lazy"
          className="w-32 md:w-auto mx-auto"
          alt=""
        />
        <span className="absolute top-1.5 right-1.5 bg-orange-300 block h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaDemibold text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full">
          12%
        </span>
      </div>
      <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
        قهوه ترک بن مانو مقدار 250 خط دوم اسم طولانی
      </h5>
      <div className="flex gap-x-2 md:gap-x-2.5 md:mt-2.5 mt-1.5">
        <div className="text-teal-600 dark:text-emerald-500 flex items-center justify-center">
          <span className="font-DanaDemibold text-xs md:text-xl">154,000</span>
          <span className="text-xs md:text-sm tracking-tighter ">تومان</span>
        </div>
        <div className="offer flex items-center justify-center">
          <span className="text-xs md:text-xl">175,000</span>
          <span className="hidden xl:inline text-sm tracking-tighter ">
            تومان
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2.5">
        <div className="flex items-center gap-x-3">
          <span className="flex-center w-[22px] h-[22px]  md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600  dark:bg-zinc-800 dark:hover:bg-emerald-600 rounded-full transition-all cursor-pointer">
            <svg className="w-4 h-4 md:w-[22px] md:h-[22px] text-gray-400">
              <use href="#shopping-cart"></use>
            </svg>
          </span>
          <span className="block text-gray-400 hover:text-teal-600 dark:hover:txt-emerald-600 rounded-full transition-all cursor-pointer">
            <svg className="w-4 h-4 md:w-6 md:h-6 ">
              <use href="#arrow-right-left"></use>
            </svg>
          </span>
        </div>
        <div className="flex text-yellow-400">
          <svg className="w-4 h-4 md:w-6 md:h-6  text-gray-300 dark:text-gray-400">
            <use href="#star"></use>
          </svg>
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#star"></use>
          </svg>
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#star"></use>
          </svg>
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#star"></use>
          </svg>
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#star"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
