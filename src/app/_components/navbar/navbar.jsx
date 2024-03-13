"use client";
import { useAppContext } from "@/contexts/app/app-context";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, changeTheme } = useAppContext();
  const { isOverlayShow, changeOverlayShow } = useAppContext();

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  const changeThemeHandler = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [theme]);

  useEffect(() => {
    changeOverlayShow(isMobileMenuOpen || isMobileCartOpen);
  }, [isMobileMenuOpen, isMobileCartOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(isOverlayShow);
    }

    if (isMobileCartOpen) {
      setIsMobileCartOpen(isOverlayShow);
    }
  }, [isOverlayShow]);

  return (
    <>
      {/* APP HEADER */}
      <header className="fixed left-0 right-0 top-9 z-50 mx-auto hidden h-24 w-[98%] items-center rounded-3xl bg-black/50 px-5 py-5 backdrop-blur-[6px] md:flex lg:w-[90%] lg:px-10">
        <div className="flex w-full items-center justify-between  ">
          {/* LOGO & Menu */}
          <nav className="flex h-14 items-center gap-x-6 lg:gap-x-9">
            {/* logo */}
            <div className="shrink-0">
              <Image
                src="/images/app-logo.png"
                width={59}
                height={56}
                alt="Golden Coffee"
              />
            </div>
            {/* menu */}
            <ul className="flex h-full gap-x-5 text-xl tracking-tightest text-gray-300 child:leading-[56px] lg:gap-x-9 ">
              <li className="font-DanaMedium text-orange-200">
                <a href="#">صفحه اصلی</a>
              </li>
              <li className="group relative">
                {/* Has sub */}
                <a href="#" className="group-hover:text-orange-300">
                  فروشگاه
                </a>
                {/* SubMenu */}
                <ul className="invisible absolute top-full w-52 space-y-4 rounded-2xl border-t-[3px] border-t-orange-300 bg-white p-6 text-base tracking-normal text-zinc-700 opacity-0 shadow-normal transition-all delay-75 group-hover:visible group-hover:opacity-100 child:inline-block child:transition-colors child-hover:cursor-pointer child-hover:text-orange-300 dark:bg-zinc-700 dark:text-white">
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
          <div className="flex items-center gap-x-4 text-xl text-orange-200 lg:gap-x-5 xl:gap-x-10">
            {/* Cart & Theme Toggle */}
            <div className="flex gap-x-4 lg:gap-x-5">
              {/* Cart */}
              <div className="group relative cursor-pointer">
                <div className="py-3">
                  <svg className="h-8 w-8">
                    <use href="#shopping-cart"></use>
                  </svg>
                </div>

                <div className="invisible absolute left-0 top-full max-h-[475px]  w-[400px] space-y-4 overflow-auto rounded-2xl border-t-[3px] border-t-orange-300  bg-white p-5 text-base tracking-normal text-zinc-700 opacity-0 shadow-normal transition-all delay-75 group-hover:visible group-hover:opacity-100 child:transition-colors dark:bg-zinc-700 dark:text-white">
                  {/* cart Header  */}
                  <div className="flex items-center justify-between font-DanaMedium  text-xs tracking-tightest">
                    <span className=" text-gray-300"> 1 مورد </span>
                    <a href="#" className="flex items-center text-orange-300">
                      <span className="">سبد خرید</span>
                      <svg className="h-5 w-5">
                        <use href="#arrow-left"></use>
                      </svg>
                    </a>
                  </div>
                  {/* cart Body */}
                  <div className="devide-y devide-gray-100 dark:devide-white/10 border-b border-b-gray-300 pb-1 child:py-5 dark:border-b-white/10">
                    <div className="flex gap-x-2.5">
                      <Image
                        width={120}
                        height={120}
                        src="/images/products/p1.png"
                        className="h-30 w-30"
                        alt="products"
                      />
                      <div className="flex flex-col justify-between tracking-tighter">
                        <h4 className="line-clamp-2 font-DanaMedium text-base text-zinc-700 dark:text-white">
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
                      <Image
                        width={120}
                        height={120}
                        src="/images/products/p2.png"
                        className="h-30 w-30"
                        alt="products"
                      />
                      <div className="flex flex-col justify-between tracking-tighter">
                        <h4 className="line-clamp-2 font-DanaMedium text-base text-zinc-700 dark:text-white">
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
                      <Image
                        width={120}
                        height={120}
                        src="/images/products/p2.png"
                        className="h-30 w-30"
                        alt="products"
                      />
                      <div className="flex flex-col justify-between tracking-tighter">
                        <h4 className="line-clamp-2 font-DanaMedium text-base text-zinc-700 dark:text-white">
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
                  <div className="mt-5 flex  justify-between">
                    <div>
                      <span className="font-DanaMedium text-xs  tracking-tighter text-gray-300">
                        مبلغ قابل پرداخت
                      </span>
                      <div className="text-zinc-700 dark:text-white">
                        <span className="font-DanaDemibold">175,000</span>
                        <span className="font-Dana text-sm">تومان</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex h-14 w-[144px] items-center justify-center rounded-xl bg-teal-600 tracking-tightest text-white transition-colors hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 "
                    >
                      ثبت سفارش
                    </a>
                  </div>
                </div>
              </div>
              {/* Btn Theme Toggle */}
              <div
                className="toggle-btn cursor-pointer py-3"
                onClick={changeThemeHandler}
              >
                <svg className="inline-block h-8 w-8 dark:hidden">
                  <use href="#moon"></use>
                </svg>
                <svg className="hidden h-8 w-8 dark:inline-block">
                  <use href="#sun"></use>
                </svg>
              </div>
            </div>
            {/* divide Border */}
            <span className="block h-14 w-px bg-white/20"></span>
            {/* login link */}
            <a
              href="#"
              className="flex items-center gap-x-2.5 tracking-tightest"
            >
              <svg className="h-8 w-8">
                <use href="#arrow-left-on-rectangle"></use>
              </svg>
              <span className="hidden xl:inline-block"> ورود | ثبت نام</span>
            </a>
          </div>
        </div>
      </header>

      <div className="z-20 flex h-16 items-center justify-between bg-white px-4 dark:bg-zinc-700 md:hidden">
        {/* hamburger Btn icon */}
        <div
          className="nav-icon-btn cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className="h-6 w-6 text-zinc-700 dark:text-white">
            <use href="#bars-3"></use>
          </svg>
        </div>

        {/* mobile menu */}
        <div
          className={`mobile-menu fixed top-0 ${
            isMobileMenuOpen ? "right-0" : "-right-64"
          } z-20 min-h-screen w-64 overflow-y-auto bg-white px-4 pt-3 transition-all dark:bg-zinc-700`}
        >
          <div className="mb-6 flex items-center justify-between border-b border-b-gray-100 pb-5 dark:border-b-white/10">
            <div className="flex items-center gap-x-3.5">
              <svg className="h-10 w-[41px] text-orange-300">
                <use href="#logo"></use>
              </svg>

              <svg className="h-10 w-[100px] text-orange-300">
                <use href="#logo-type"></use>
              </svg>
            </div>
            <div
              className="close-mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="h-5 w-5 cursor-pointer text-zinc-600 dark:text-white">
                <use href="#x-mark"></use>
              </svg>
            </div>
          </div>

          <div className="h10 mb-4 flex items-center rounded-md bg-orange-200/20 pr-2.5 text-orange-300 ">
            <a href="#" className="flex items-center gap-x-2">
              <svg className="h-5 w-5">
                <use href="#home"></use>
              </svg>
              <span>صفحه اصلی</span>
            </a>
          </div>
          <ul className="mb-4 space-y-6 text-zinc-600 child:pr-2.5 dark:text-white ">
            <li>
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-x-2">
                  <svg className="h-5 w-5">
                    <use href="#shopping-bag"></use>
                  </svg>
                  <span>فروشگاه</span>
                </a>
                <span
                  className="submenu-open-btn cursor-pointer"
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                >
                  <svg className="h-5 w-5">
                    <use href="#chevron-down"></use>
                  </svg>
                </span>
              </div>
              <div
                className={`submenu ${isSubMenuOpen ? "submenu--open" : ""}`}
              >
                <a href="#">قهوه ویژه</a>
                <a href="#" className="submenu__item--active">
                  قهوه در سطح جهانی
                </a>
                <a href="#">قهوه درجه یک</a>
                <a href="#">ترکیبات تجاری</a>
                <a href="#">کپسول قهوه</a>
                <a href="#">قهوه رینو برزیلی</a>
              </div>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2">
                <svg className="h-5 w-5">
                  <use href="#chat"></use>
                </svg>
                <span>دیکشنری</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2">
                <svg className="h-5 w-5">
                  <use href="#briefcase"></use>
                </svg>
                <span>درباره ما</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2">
                <svg className="h-5 w-5">
                  <use href="#document-text"></use>
                </svg>
                <span>بلاگ</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2">
                <svg className="h-5 w-5">
                  <use href="#phone-arrow-up"></use>
                </svg>
                <span>تماس با ما</span>
              </a>
            </li>
          </ul>

          <div className="space-y-6 border-t border-t-gray-100 px-2.5 py-8 text-orange-300 dark:border-t-white/10">
            <a href="#" className="inline-flex items-center gap-x-2">
              <svg className="h-5 w-5 rotate-180">
                <use href="#arrow-left-on-rectangle"></use>
              </svg>
              <span> ورود | ثبت نام</span>
            </a>

            <div className="toggle-btn">
              <span className="inline-flex cursor-pointer items-center gap-x-2 dark:hidden">
                <svg className="h-5 w-5 ">
                  <use href="#moon"></use>
                </svg>
                <span>تم تیره</span>
              </span>
              <span className=" hidden cursor-pointer  items-center gap-x-2 dark:inline-flex">
                <svg className="h-5 w-5">
                  <use href="#sun"></use>
                </svg>
                <span>تم روشن</span>
              </span>
            </div>

            <a
              href="#"
              className="inline-flex cursor-pointer items-center gap-x-2"
            >
              <svg className="h-5 w-5">
                <use href="#shopping-cart"></use>
              </svg>
              <span>سبد خرید</span>
            </a>
          </div>
        </div>

        {/* logo icon */}
        <div>
          <svg className="h-10 w-[100px] text-orange-300">
            <use href="#logo-type"></use>
          </svg>
        </div>

        {/* cart shop icon */}
        <div className="cart-icon" onClick={() => setIsMobileCartOpen(true)}>
          <svg className="h-6 w-6 cursor-pointer text-zinc-700 dark:text-white">
            <use href="#shopping-cart"></use>
          </svg>
        </div>
      </div>

      {/* mobile shoping cart */}
      <div
        className={`mobile-cart fixed top-0 ${
          isMobileCartOpen ? "left-0" : "-left-64"
        } bottom-0 z-20 flex min-h-screen w-64 flex-col overflow-y-auto bg-white px-4 pt-5 transition-all dark:bg-zinc-700`}
      >
        {/* mobile cart Header */}
        <div className="mb-5 flex items-center justify-between border-b border-b-gray-300 pb-5 dark:border-b-white/10">
          <div
            className="close-mobile-cart-btn"
            onClick={() => setIsMobileCartOpen(false)}
          >
            <svg className="h-5 w-5 cursor-pointer text-zinc-600 dark:text-white">
              <use href="#x-mark"></use>
            </svg>
          </div>

          <h3 className="font-DanaMedium text-base text-zinc-700 dark:text-white">
            سبد خرید
          </h3>
        </div>

        {/* mobile cart Body */}
        <div className="child:mb-5 child:pb-5">
          <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
            <Image
              width={120}
              height={120}
              src="/images/products/p1.png"
              className="h-[90px] w-[90px]"
              alt="products"
            />
            <div className="flex flex-col justify-between gap-y-1.5 tracking-tighter">
              <h4 className="line-clamp-2 font-DanaMedium text-sm text-zinc-700 dark:text-white">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h4>
              <div>
                <span className="font-DanaMedium text-xs text-teal-600 dark:text-emerald-500">
                  14.500 تومان تخفیف
                </span>
                <div className="text-zinc-700 dark:text-white">
                  <span className="font-DanaDemibold">175,000</span>
                  <span className="font-Dana text-xs">تومان</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
            <Image
              width={120}
              height={120}
              src="/images/products/p2.png"
              className="h-[90px] w-[90px]"
              alt="products"
            />
            <div className="flex flex-col justify-between gap-y-1.5 tracking-tighter">
              <h4 className="line-clamp-2 font-DanaMedium text-sm text-zinc-700 dark:text-white">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h4>
              <div>
                <span className="font-DanaMedium text-xs text-teal-600 dark:text-emerald-500">
                  14.500 تومان تخفیف
                </span>
                <div className="text-zinc-700 dark:text-white">
                  <span className="font-DanaDemibold">175,000</span>
                  <span className="font-Dana text-xs">تومان</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
            <Image
              width={120}
              height={120}
              src="/images/products/p2.png"
              className="h-[90px] w-[90px]"
              alt="products"
            />
            <div className="flex flex-col justify-between gap-y-1.5 tracking-tighter">
              <h4 className="line-clamp-2 font-DanaMedium text-sm text-zinc-700 dark:text-white">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h4>
              <div>
                <span className="font-DanaMedium text-xs text-teal-600 dark:text-emerald-500">
                  14.500 تومان تخفیف
                </span>
                <div className="text-zinc-700 dark:text-white">
                  <span className="font-DanaDemibold">175,000</span>
                  <span className="font-Dana text-xs">تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile cart Footer */}
        <div className="mb-4 mt-auto flex items-start gap-x-4">
          <a
            href="#"
            className=" flex h-11 w-28 items-center justify-center rounded-xl bg-teal-600 tracking-tightest text-white transition-colors hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 "
          >
            ثبت سفارش
          </a>
          <div>
            <span className="font-DanaMedium text-xs tracking-tighter text-gray-300">
              مبلغ قابل پرداخت
            </span>
            <div className="text-zinc-700 dark:text-white">
              <span className="font-DanaDemibold">175,000</span>
              <span className="font-Dana text-xs">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
