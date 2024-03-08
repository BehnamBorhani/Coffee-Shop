"use client";
import { useAppContext } from "@/contexts/app/app-context";
import { useEffect } from "react";
import Header from "./_components/header/header";
import ProductCard from "./_components/product-card/product-card";
import Link from "next/link";
import BestSellingProducts from "./_components/best-selling-products/best-selling-products";
import Image from "next/image";
import BlogPostCardList from "./_components/blog-post-card-list/blog-post-card-list";

export default function Home() {
  const { theme } = useAppContext();
  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [theme]);

  return (
    <>
      <Header />
      <main className="">
        <section class="products pt-8 md:pt-24 lg:pt-48">
          <div class="container px-4 md:px-0">
            {/* section Header */}
            <div class="flex items-end justify-between mb-5 md:mb-12">
              <div>
                <h2 class="section-title">جدیدترین محصولات</h2>
                <span class="section-subtitle">فراوری شده از دانه قهوه</span>
              </div>

              <Link href="#" class="section-link">
                <span class="hidden md:inline-block">مشاهده همه محصولات</span>
                <span class="inline-block md:hidden">مشاهده همه</span>
                <svg class="w-5 h-5">
                  <use href="#chevron-left-mini"></use>
                </svg>
              </Link>
            </div>

            {/* section Body */}
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>

        <section class="category-banner mt-8 mb-10 md:my-20">
          <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
              <a
                href="#"
                class="category-banner_item1 flex flex-col pr-7 md:pr-12 justify-center rounded-2xl h-[142px] md:h-[248px]"
              >
                <span class="font-DanaDemibold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">
                  انواع قهوه
                </span>
                <span class="md:font-DanaMedium md:text-xl/6">
                  ترکیبی و تک خاستگاه
                </span>
              </a>
              <a
                href="#"
                class="category-banner_item2 flex flex-col pr-7 md:pr-12 justify-center rounded-2xl h-[142px] md:h-[248px]"
              >
                <span class="font-DanaDemibold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">
                  پودرهای فوری
                </span>
                <span class="md:font-DanaMedium md:text-xl/6">
                  نسکافه، هات چاکلت، ماسالا{" "}
                </span>
              </a>
            </div>
          </div>
        </section>

        <section class="products-categories mb-10 md:mb-20">
          <div class="container">
            <div class="flex items-center justify-center flex-wrap gap-y-6 gap-x-[29px] md:gap-x-[65px] ">
              <div class="w-25 md:w-50 text-center">
                <a href="#">
                  <img
                    src="/images/categories/category1.png"
                    loading="lazy"
                    alt=""
                  />
                  <span class="inline-block mt-1.5 md:mt-2.5 font-DanaDemibold text-sm md:text-xl text-zinc-700 dark:text-white">
                    قهوه دمی و اسپرسو
                  </span>
                </a>
              </div>
              <div class="w-25 md:w-50 text-center">
                <a href="#">
                  <img
                    src="/images/categories/category2.png"
                    loading="lazy"
                    alt=""
                  />
                  <span class="inline-block mt-1.5 md:mt-2.5 font-DanaDemibold text-sm md:text-xl text-zinc-700 dark:text-white">
                    اوازم جانبی و تجهیزات
                  </span>
                </a>
              </div>
              <div class="w-25 md:w-50 text-center">
                <a href="#">
                  <img
                    src="/images/categories/category3.png"
                    loading="lazy"
                    alt=""
                  />
                  <span class="inline-block mt-1.5 md:mt-2.5 font-DanaDemibold text-sm md:text-xl text-zinc-700 dark:text-white">
                    اسپرسوساز
                  </span>
                </a>
              </div>
              <div class="w-25 md:w-50 text-center">
                <a href="#">
                  <img
                    src="/images/categories/category4.png"
                    loading="lazy"
                    alt=""
                  />
                  <span class="inline-block mt-1.5 md:mt-2.5 font-DanaDemibold text-sm md:text-xl text-zinc-700 dark:text-white">
                    پک تستر قهوه
                  </span>
                </a>
              </div>
              <div class="w-25 md:w-50 text-center">
                <a href="#">
                  <img
                    src="/images/categories/category5.png"
                    loading="lazy"
                    alt=""
                  />
                  <span class="inline-block mt-1.5 md:mt-2.5 font-DanaDemibold text-sm md:text-xl text-zinc-700 dark:text-white">
                    قهوه ترک
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="best-selling mb-8 md:mb-20">
          <div class="container">
            {/* section Head */}
            <div class="flex items-end justify-between mb-5 md:mb-12 select-none">
              <div>
                <h3 class="section-title">محصولات پرفروش</h3>
                <span class="section-subtitle">پیشنهاد قهوه خورها ... </span>
              </div>
              <div class="flex gap-x-3 md:gap-x-[18px] lg:gap-x-[20px]">
                <div class="swiper-button-prev-custom flex-center w-9 h-9 md:w-10 md:h10 bg-white text-zinc-700 shadow-normal rounded-full hover:bg-gray-300 dark:hover:text-zinc-700 transition-all cursor-pointer">
                  <svg class="w-5 h-5 md:w-[26px] md:h-[26px] rotate-180">
                    <use href="#chevron-left-mini"></use>
                  </svg>
                </div>
                <div class="swiper-button-next-custom flex-center w-9 h-9 md:w-10 md:h10 bg-white text-zinc-700 shadow-normal rounded-full hover:bg-gray-300 dark:hover:text-zinc-700 transition-all cursor-pointer">
                  <svg class="w-5 h-5 md:w-[26px] md:h-[26px]">
                    <use href="#chevron-left-mini"></use>
                  </svg>
                </div>
              </div>
            </div>

            <BestSellingProducts />
          </div>
        </section>

        <section class="coffee-club mb-8 md:mb-20 ">
          <div class="container">
            <div class="flex items-center flex-wrap lg:flex-nowrap md:gap-x-3 xl:gap-x-24 gap-y-9 lg:h-36 py-8 lg:py-0 px-3 lg:px-5 xl:px-11 text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl">
              <div class="flex items-center md:shrink-0 gap-x-3 lg:gap-x-4 xl:gap-x-6 ">
                <Image
                  src="/images/club/diamond.png"
                  width={87}
                  height={77.5}
                  className="w-87 md:w-[110px]"
                />
                <div>
                  <h4 class="font-MorabbaBold text-2xl md:text-5xl mb-2">
                    کافی کلاب
                  </h4>
                  <p class="font-MorabbaLight text-lg md:text-2xl">
                    میدونستی میتونی با امتیازهات قهوه بگیری ؟
                  </p>
                </div>
              </div>

              <div class="flex justify-between w-full">
                <div class="flex items-center gap-x-2 lg:gap-x-3 xl:gap-x-5">
                  <div class="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                    <svg class="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
                      <use href="#activity"></use>
                    </svg>
                    <span class="text-xs md:text-sm">چرخ و بخت</span>
                  </div>

                  <div class="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                    <svg class="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
                      <use href="#discovery"></use>
                    </svg>
                    <span class="text-xs md:text-sm">ماموریت ها</span>
                  </div>

                  <div class="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                    <svg class="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
                      <use href="#ticket-star"></use>
                    </svg>
                    <span class="text-xs md:text-sm">جایزه ها</span>
                  </div>
                </div>

                <div class="flex flex-col">
                  <span class="md:mb-1 font-DanaDemibold text-2xl md:text-3xl">
                    542
                  </span>
                  <span class="text-xs md:text-sm">امتیــاز شما</span>
                  <a
                    href="#"
                    class="flex items-center justify-center w-[90px] h-[26px] md:w-[110px] md:h-8 mt-1 md:mt-2 font-DanaMedium text-xs md:text-sm rounded-full bg-gradient-to-r from-orange-200  to-orange-300"
                  >
                    <span>دریافت جایزه</span>
                    <svg class="w-5 h-5 md:w-6 md:h-6">
                      <use href="#chevron-left-mini"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* blogs */}
        <section class="blogs mb-8 md:mb-28">
          <div class="container">
            {/* section Header */}
            <div class="flex items-end justify-between mb-5 md:mb-12">
              <div>
                <h2 class="section-title">مطالب خواندنی</h2>
              </div>

              <a href="#" class="section-link">
                <span class="hidden md:inline-block">مشاهده همه مطالب</span>
                <span class="inline-block md:hidden">مشاهده همه</span>
                <svg class="w-5 h-5">
                  <use href="#chevron-left-mini"></use>
                </svg>
              </a>
            </div>

            {/* section body */}
            <BlogPostCardList />
          </div>
        </section>

        {/* contact us */}
        <section class="contact-us mb-16 md:mb-28 ">
          <div class="container">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-x-5">
              <img
                src="images/contact.png"
                class="max-w-[296px] w-full shrink-0"
                alt=""
              />
              <div class="text-zinc-700 dark:text-white flex flex-col items-center md:items-start">
                <h3 class="font-MorabbaMedium text-2xl md:text-5xl mb-0.5 md:mb1.5">
                  یکی از بهترین قهوه ها !
                </h3>
                <span class="font-MorabbaLight text-lg md:text-3xl/[48px]">
                  کیفیت قهوه را از ما بخواهید ...
                </span>
                <div class="flex gap-x-2.5 my-5 md:my-6">
                  <span class="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                  <span class="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                  <span class="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                </div>
                <p class="text-lg md:text-2xl text-center md:text-justify">
                  فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه
                  معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ
                  همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش
                  برخورد ما روز شما را می سازد!
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center gap-x-2 mt-5 md:mt-6 text-xl tracking-tightest px-6 h-[50px] md:h-[60px] border md:border-2 border-orange-300 rounded-full text-orange-300"
                >
                  <span>ثبت سفارش تلفنی</span>
                  <svg class="w-5 h-5 md:w-8 md:h-8">
                    <use href="#phone"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
