import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="rounded-2xl bg-white p-2 shadow-normal dark:bg-zinc-700 md:p-5">
      <div className="relative mb-2 md:mb-5">
        <Image
          width={265}
          height={265}
          src="/images/products/p1.png"
          loading="lazy"
          className="mx-auto w-32 md:w-auto"
          alt=""
        />
        <span className="absolute right-1.5 top-1.5 block h-5 rounded-full bg-orange-300 px-2.5 font-DanaDemibold text-xs/[24px] text-white dark:text-zinc-700 md:h-[30px] md:px-3.5 md:text-base/[34px]">
          12%
        </span>
      </div>
      <h5 className="line-clamp-2 h-10 font-DanaMedium text-sm text-zinc-700 dark:text-white md:h-14 md:text-xl">
        قهوه ترک بن مانو مقدار 250 خط دوم اسم طولانی
      </h5>
      <div className="mt-1.5 flex gap-x-2 md:mt-2.5 md:gap-x-2.5">
        <div className="flex items-center justify-center text-teal-600 dark:text-emerald-500">
          <span className="font-DanaDemibold text-xs md:text-xl">154,000</span>
          <span className="text-xs tracking-tighter md:text-sm ">تومان</span>
        </div>
        <div className="offer flex items-center justify-center">
          <span className="text-xs md:text-xl">175,000</span>
          <span className="hidden text-sm tracking-tighter xl:inline ">
            تومان
          </span>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <span className="flex-center h-[22px] w-[22px]  cursor-pointer rounded-full bg-gray-100 transition-all  hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-600 md:h-9 md:w-9">
            <svg className="h-4 w-4 text-gray-400 md:h-[22px] md:w-[22px]">
              <use href="#shopping-cart"></use>
            </svg>
          </span>
          <span className="dark:hover:txt-emerald-600 block cursor-pointer rounded-full text-gray-400 transition-all hover:text-teal-600">
            <svg className="h-4 w-4 md:h-6 md:w-6 ">
              <use href="#arrow-right-left"></use>
            </svg>
          </span>
        </div>
        <div className="flex text-yellow-400">
          <svg className="h-4 w-4 text-gray-300 dark:text-gray-400  md:h-6 md:w-6">
            <use href="#star"></use>
          </svg>
          <svg className="h-4 w-4 md:h-6 md:w-6">
            <use href="#star"></use>
          </svg>
          <svg className="h-4 w-4 md:h-6 md:w-6">
            <use href="#star"></use>
          </svg>
          <svg className="h-4 w-4 md:h-6 md:w-6">
            <use href="#star"></use>
          </svg>
          <svg className="h-4 w-4 md:h-6 md:w-6">
            <use href="#star"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
