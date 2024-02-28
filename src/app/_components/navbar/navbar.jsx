"use client";
import { useAppContext } from "@/contexts/app/app-context";
import React from "react";

const Navbar = () => {
  const { theme, changeTheme } = useAppContext();

  const changeThemeHandler = () => {
    changeTheme(theme === "dark" ? "ligth" : "dark");
  };

  return (
    <>
      {/* APP HEADER */}
      <header className="fixed top-9 right-0 left-0  bg-black/50 h-24 w-[98%] lg:w-[90%] mx-auto rounded-3xl hidden md:flex items-center px-5 lg:px-10 py-5 backdrop-blur-[6px]">
        <div className="flex w-full items-center justify-between  ">
          {/* LOGO & Menu */}
          <nav className="flex items-center gap-x-6 lg:gap-x-9 h-14">
            {/* logo */}
            <div className="shrink-0">
              <img src="./images/app-logo.png" alt="Golden Coffe" />
            </div>
            {/* menu */}
            <ul className="flex gap-x-5 lg:gap-x-9 text-xl text-gray-300 tracking-tightest h-full child:leading-[56px] ">
              <li className="font-DanaMedium text-orange-200">
                <a href="#">صفحه اصلی</a>
              </li>
              <li className="relative group">
                {/* Has sub */}
                <a href="#" className="group-hover:text-orange-300">
                  فروشگاه
                </a>
                {/* SubMenu */}
                <ul className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-52 p-6 bg-white text-base text-zinc-700 dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-t-orange-300 shadow-normal space-y-4 tracking-normal child:transition-colors child-hover:text-orange-300 transition-all child:inline-block delay-75">
                  <li>قهوه ویژه</li>
                  <li>قهوه در سطح جهانی</li>
                  <li>قهوه درجه یک</li>
                  <li>ترکیبات تجاری</li>
                  <li>کپسول قهوه</li>
                  <li>قهوه زینو برزیلی</li>
                </ul>
              </li>
              <li>
                <a href="#">دیکشنری</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li className="relative">
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </nav>
          {/* Cart & Theme Toggle & Login Link */}
          <div className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-10 text-orange-200 text-xl">
            {/* Cart & Theme Toggle */}
            <div className="flex gap-x-4 lg:gap-x-5">
              {/* Cart */}
              <div className="relative cursor-pointer group">
                <div className="py-3">
                  <svg className="w-8 h-8">
                    <use href="#shopping-cart"></use>
                  </svg>
                </div>

                <div className="absolute top-full left-0 opacity-0 invisible  max-h-[475px] w-[400px] overflow-auto p-5 group-hover:opacity-100 group-hover:visible  bg-white text-base text-zinc-700 dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-t-orange-300 shadow-normal space-y-4 tracking-normal child:transition-colors transition-all delay-75">
                  {/* cart Header  */}
                  <div className="flex items-center justify-between tracking-tightest  font-DanaMedium text-xs">
                    <span className=" text-gray-300"> 1 مورد </span>
                    <a href="#" className="flex items-center text-orange-300">
                      <span className="">سبد خرید</span>
                      <svg className="w-5 h-5">
                        <use href="#arrow-left"></use>
                      </svg>
                    </a>
                  </div>
                  {/* cart Body */}
                  <div className="pb-1 border-b border-b-gray-300 dark:border-b-white/10 devide-y devide-gray-100 dark:devide-white/10 child:py-5">
                    <div className="flex gap-x-2.5">
                      <img
                        src="images/products/p1.png"
                        className="w-30 h-30"
                        alt="products"
                      />
                      <div className="flex flex-col justify-between tracking-tighter">
                        <h4 className="text-base font-DanaMedium text-zinc-700 dark:text-white line-clamp-2">
                          قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                          <span className="text-xs text-teal-600 dark:text-emerald-500">
                            14.500 تومان تخفیف
                          </span>
                          <div className="text-zinc-700 dark:text-white">
                            <span className="font-DanaDemibold">175,000</span>
                            <span className="font-Dana text-sm">تومان</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-x-2.5">
                      <img
                        src="images/products/p2.png"
                        className="w-30 h-30"
                        alt="products"
                      />
                      <div className="flex flex-col justify-between tracking-tighter">
                        <h4 className="text-base font-DanaMedium text-zinc-700 dark:text-white line-clamp-2">
                          قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                          <span className="text-xs text-teal-600 dark:text-emerald-500">
                            14.500 تومان تخفیف
                          </span>
                          <div className="text-zinc-700 dark:text-white">
                            <span className="font-DanaDemibold">175,000</span>
                            <span className="font-Dana text-sm">تومان</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-x-2.5">
                      <img
                        src="images/products/p2.png"
                        className="w-30 h-30"
                        alt="products"
                      />
                      <div className="flex flex-col justify-between tracking-tighter">
                        <h4 className="text-base font-DanaMedium text-zinc-700 dark:text-white line-clamp-2">
                          قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                          <span className="text-xs text-teal-600 dark:text-emerald-500">
                            14.500 تومان تخفیف
                          </span>
                          <div className="text-zinc-700 dark:text-white">
                            <span className="font-DanaDemibold">175,000</span>
                            <span className="font-Dana text-sm">تومان</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* cart Footer */}
                  <div className="flex justify-between  mt-5">
                    <div>
                      <span className="text-xs text-gray-300  tracking-tighter font-DanaMedium">
                        مبلغ قابل پرداخت
                      </span>
                      <div className="text-zinc-700 dark:text-white">
                        <span className="font-DanaDemibold">175,000</span>
                        <span className="font-Dana text-sm">تومان</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="h-14 w-[144px] flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors rounded-xl tracking-tightest "
                    >
                      ثبت سفارش
                    </a>
                  </div>
                </div>
              </div>
              {/* Btn Theme Toggle */}
              <div
                className="toggle-btn py-3 cursor-pointer"
                onClick={changeThemeHandler}
              >
                <svg className="w-8 h-8 inline-block dark:hidden">
                  <use href="#moon"></use>
                </svg>
                <svg className="w-8 h-8 hidden dark:inline-block">
                  <use href="#sun"></use>
                </svg>
              </div>
            </div>
            {/* divide Border */}
            <span className="block w-px h-14 bg-white/20"></span>
            {/* login link */}
            <a
              href="#"
              className="flex items-center gap-x-2.5 tracking-tightest"
            >
              <svg className="w-8 h-8">
                <use href="#arrow-left-on-rectangle"></use>
              </svg>
              <span className="hidden xl:inline-block"> ورود | ثبت نام</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
