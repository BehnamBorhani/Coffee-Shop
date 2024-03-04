"use client";
import { useAppContext } from "@/contexts/app/app-context";
import { useEffect } from "react";
import Header from "./_components/header/header";
import ProductCard from "./_components/product-card/product-card";
import Link from "next/link";

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
      </main>
    </>
  );
}
