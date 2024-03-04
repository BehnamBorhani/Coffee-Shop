"use client";
import { useAppContext } from "@/contexts/app/app-context";
import { useEffect } from "react";
import Header from "./_components/header/header";
import ProductCard from "./_components/product-card/product-card";

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

              <a href="#" class="section-link">
                <span class="hidden md:inline-block">مشاهده همه محصولات</span>
                <span class="inline-block md:hidden">مشاهده همه</span>
                <svg class="w-5 h-5">
                  <use href="#chevron-left-mini"></use>
                </svg>
              </a>
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
      </main>
    </>
  );
}
