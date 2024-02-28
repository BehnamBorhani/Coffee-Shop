"use client";
import { useAppContext } from "@/contexts/app/app-context";
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
      <header className="fixed top-9 right-0 left-0 bg-black/50 h-24 w-[98%] lg:w-[90%] mx-auto rounded-3xl hidden md:flex items-center px-5 lg:px-10 py-5 backdrop-blur-[6px]">
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
                <ul className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-52 p-6 bg-white text-base text-zinc-700 dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-t-orange-300 shadow-normal space-y-4 tracking-normal child:transition-colors child-hover:text-orange-300 child-hover:cursor-pointer transition-all child:inline-block delay-75">
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

      <div className="flex md:hidden items-center justify-between h-16 px-4 bg-white dark:bg-zinc-700 z-20">
        {/* hamburger Btn icon */}
        <div
          className="nav-icon-btn cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className="w-6 h-6 text-zinc-700 dark:text-white">
            <use href="#bars-3"></use>
          </svg>
        </div>

        {/* mobile menu */}
        <div
          className={`mobile-menu fixed top-0 ${
            isMobileMenuOpen ? "right-0" : "-right-64"
          } w-64 min-h-screen bg-white dark:bg-zinc-700 pt-3 px-4 z-20 transition-all overflow-y-auto`}
        >
          <div className="flex items-center justify-between pb-5 border-b border-b-gray-100 dark:border-b-white/10 mb-6">
            <div className="flex items-center gap-x-3.5">
              <svg className="w-[41px] h-10 text-orange-300">
                <use href="#logo"></use>
              </svg>

              <svg className="w-[100px] h-10 text-orange-300">
                <use href="#logo-type"></use>
              </svg>
            </div>
            <div
              className="close-mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 text-zinc-600 dark:text-white cursor-pointer">
                <use href="#x-mark"></use>
              </svg>
            </div>
          </div>

          <div className="bg-orange-200/20 text-orange-300 flex items-center pr-2.5 h10 mb-4 rounded-md ">
            <a href="#" className="flex items-center gap-x-2">
              <svg className="w-5 h-5">
                <use href="#home"></use>
              </svg>
              <span>صفحه اصلی</span>
            </a>
          </div>
          <ul className="child:pr-2.5 text-zinc-600 dark:text-white mb-4 space-y-6 ">
            <li>
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-x-2">
                  <svg className="w-5 h-5">
                    <use href="#shopping-bag"></use>
                  </svg>
                  <span>فروشگاه</span>
                </a>
                <span
                  className="submenu-open-btn cursor-pointer"
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                >
                  <svg className="w-5 h-5">
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
                <svg className="w-5 h-5">
                  <use href="#chat"></use>
                </svg>
                <span>دیکشنری</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#briefcase"></use>
                </svg>
                <span>درباره ما</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#document-text"></use>
                </svg>
                <span>بلاگ</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#phone-arrow-up"></use>
                </svg>
                <span>تماس با ما</span>
              </a>
            </li>
          </ul>

          <div className="py-8 border-t border-t-gray-100 dark:border-t-white/10 space-y-6 px-2.5 text-orange-300">
            <a href="#" className="inline-flex items-center gap-x-2">
              <svg className="w-5 h-5 rotate-180">
                <use href="#arrow-left-on-rectangle"></use>
              </svg>
              <span> ورود | ثبت نام</span>
            </a>

            <div className="toggle-btn">
              <span className="inline-flex items-center gap-x-2 dark:hidden cursor-pointer">
                <svg className="w-5 h-5 ">
                  <use href="#moon"></use>
                </svg>
                <span>تم تیره</span>
              </span>
              <span className=" items-center gap-x-2  hidden dark:inline-flex cursor-pointer">
                <svg className="w-5 h-5">
                  <use href="#sun"></use>
                </svg>
                <span>تم روشن</span>
              </span>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-x-2 cursor-pointer"
            >
              <svg className="w-5 h-5">
                <use href="#shopping-cart"></use>
              </svg>
              <span>سبد خرید</span>
            </a>
          </div>
        </div>

        {/* logo icon */}
        <div>
          <svg className="w-[100px] h-10 text-orange-300">
            <use href="#logo-type"></use>
          </svg>
        </div>

        {/* cart shop icon */}
        <div className="cart-icon" onClick={() => setIsMobileCartOpen(true)}>
          <svg className="w-6 h-6 text-zinc-700 dark:text-white cursor-pointer">
            <use href="#shopping-cart"></use>
          </svg>
        </div>
      </div>

      {/* mobile shoping cart */}
      <div
        className={`mobile-cart fixed top-0 ${
          isMobileCartOpen ? "left-0" : "-left-64"
        } bottom-0 w-64 min-h-screen bg-white dark:bg-zinc-700 pt-5 px-4 z-20 transition-all overflow-y-auto flex flex-col`}
      >
        {/* mobile cart Header */}
        <div className="flex items-center justify-between pb-5 border-b border-b-gray-300 dark:border-b-white/10 mb-5">
          <div
            className="close-mobile-cart-btn"
            onClick={() => setIsMobileCartOpen(false)}
          >
            <svg className="w-5 h-5 text-zinc-600 dark:text-white cursor-pointer">
              <use href="#x-mark"></use>
            </svg>
          </div>

          <h3 className="font-DanaMedium text-zinc-700 dark:text-white text-base">
            سبد خرید
          </h3>
        </div>

        {/* mobile cart Body */}
        <div className="child:pb-5 child:mb-5">
          <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
            <img
              src="images/products/p1.png"
              className="w-[90px] h-[90px]"
              alt="products"
            />
            <div className="flex flex-col justify-between gap-y-1.5 tracking-tighter">
              <h4 className="text-sm font-DanaMedium text-zinc-700 dark:text-white line-clamp-2">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h4>
              <div>
                <span className="text-xs font-DanaMedium text-teal-600 dark:text-emerald-500">
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
            <img
              src="images/products/p2.png"
              className="w-[90px] h-[90px]"
              alt="products"
            />
            <div className="flex flex-col justify-between gap-y-1.5 tracking-tighter">
              <h4 className="text-sm font-DanaMedium text-zinc-700 dark:text-white line-clamp-2">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h4>
              <div>
                <span className="text-xs font-DanaMedium text-teal-600 dark:text-emerald-500">
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
            <img
              src="images/products/p2.png"
              className="w-[90px] h-[90px]"
              alt="products"
            />
            <div className="flex flex-col justify-between gap-y-1.5 tracking-tighter">
              <h4 className="text-sm font-DanaMedium text-zinc-700 dark:text-white line-clamp-2">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h4>
              <div>
                <span className="text-xs font-DanaMedium text-teal-600 dark:text-emerald-500">
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
        <div className="flex items-start gap-x-4 mt-auto mb-4">
          <a
            href="#"
            className=" flex items-center justify-center h-11 w-28 text-white bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors rounded-xl tracking-tightest "
          >
            ثبت سفارش
          </a>
          <div>
            <span className="text-xs text-gray-300 tracking-tighter font-DanaMedium">
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
