import React from "react";
import ScrollToTopBtn from "../scroll-to-top-btn/scroll-to-top-btn";

const Footer = () => {
  return (
    <footer className="relative bg-zinc-700 py-8 md:pb-11 md:pt-[62px] ">
      <ScrollToTopBtn />

      <div className="mx-auto px-4 text-gray-300 sm:w-[94%] md:px-0 lg:w-[90%]">
        <div className="flex flex-wrap justify-between ">
          {/* footer - right */}
          <div>
            <div className="mb-6 flex gap-x-5 text-gray-300 md:mb-4.5">
              <svg className="h-[54px] w-[57px]">
                <use href="#logo"></use>
              </svg>
              <svg className="h-[54px] w-[138px]">
                <use href="#logo-type"></use>
              </svg>
            </div>

            <p className="text-lg md:text-xl/[48px] xl:max-w-[570px] ">
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
              خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
              فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
              منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
              اشتیاق می‌کوشیم.
            </p>
          </div>

          {/* foter - center */}
          <div className="mt-10 md:mt-[26px]">
            <h4 className="mb-6 font-DanaDemibold text-2xl text-white md:mb-7">
              دسترسی سریع
            </h4>

            <div className="mb-6 grid grid-cols-2 gap-x-10 gap-y-2.5 md:mb-7 md:gap-x-0">
              <a
                href="#"
                className="flex items-center gap-x-2 transition-all hover:text-orange-300 md:gap-x-3 md:text-xl"
              >
                <span className="inline-block h-1 w-2 rounded-full bg-current md:w-2.5"></span>
                <span>حریم خصوصی</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 transition-all hover:text-orange-300 md:gap-x-3 md:text-xl"
              >
                <span className="inline-block h-1 w-2 rounded-full bg-current md:w-2.5"></span>
                <span>پرسش های متداول</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 transition-all hover:text-orange-300 md:gap-x-3 md:text-xl"
              >
                <span className="inline-block h-1 w-2 rounded-full bg-current md:w-2.5"></span>
                <span>عودت کالا</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 transition-all hover:text-orange-300 md:gap-x-3 md:text-xl"
              >
                <span className="inline-block h-1 w-2 rounded-full bg-current md:w-2.5"></span>
                <span>فرصت های شغلی</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 transition-all hover:text-orange-300 md:gap-x-3 md:text-xl"
              >
                <span className="inline-block h-1 w-2 rounded-full bg-current md:w-2.5"></span>
                <span>شرایط استفاده</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 transition-all hover:text-orange-300 md:gap-x-3 md:text-xl"
              >
                <span className="inline-block h-1 w-2 rounded-full bg-current md:w-2.5"></span>
                <span>ضمانت نامه ها</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 transition-all hover:text-orange-300 md:gap-x-3 md:text-xl"
              >
                <span className="inline-block h-1 w-2 rounded-full bg-current md:w-2.5"></span>
                <span>ثبت سفارش</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 transition-all hover:text-orange-300 md:gap-x-3 md:text-xl"
              >
                <span className="inline-block h-1 w-2 rounded-full bg-current md:w-2.5"></span>
                <span>ارتباط با ما</span>
              </a>
            </div>
          </div>

          {/* footer - left */}
          <div className="md:mt26 mt-10">
            {/* Address */}
            <h4 className="mb-6 font-DanaDemibold text-2xl text-white md:mb-7">
              در تماس باشیم
            </h4>
            <div>
              {/* email & Phone */}
              <div className="mb-6 text-xl md:mb-10">
                <span className="mb-4 flex items-center gap-x-2 md:mb-5 md:gap-x-3">
                  <svg className="h-5 w-5 shrink-0 md:h-6 md:w-6">
                    <use href="#map-pin"></use>
                  </svg>
                  <span>
                    بلوار میرداماد ، خیابان البرز، کوچه قبادیان شرقی، پلاک 33
                  </span>
                </span>
                <div className="flex flex-wrap gap-x-5 gap-y-4 font-DanaMedium">
                  <a
                    href="mailto:info@Coffee.com"
                    className="flex items-center gap-x-2 text-orange-300 md:gap-x-3"
                  >
                    <svg className="h-5 w-5 md:h-6 md:w-6">
                      <use href="#envelop"></use>
                    </svg>
                    <span>info@Coffee.com</span>
                  </a>
                  <div className="flex items-center gap-x-2 md:gap-x-3">
                    <svg className="h-5 w-5 md:h-6 md:w-6">
                      <use href="#phone"></use>
                    </svg>
                    <span>0936-504-1466</span>
                    <span>021-88229012</span>
                  </div>
                </div>
              </div>
              {/* buttons */}
              <div className="flex gap-x-1.5 font-DanaMedium md:gap-x-6 md:text-2xl ">
                <a
                  href="#"
                  className="flex h-12 flex-grow items-center justify-center gap-x-2 rounded-xl border border-orange-200 text-orange-200"
                >
                  <svg className="h-[26px] w-[26px] md:h-[38px] md:w-[38px]">
                    <use href="#instagram"></use>
                  </svg>
                  <span className="ltr-text">@golden_coffee</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 flex-grow items-center justify-center gap-x-2 rounded-xl bg-gradient-to-r from-orange-200 to-orange-300 text-zinc-700"
                >
                  <svg className="h-[26px] w-[26px] md:h-[38px] md:w-[38px]">
                    <use href="#telegram"></use>
                  </svg>
                  <span className="ltr-text">@golden_coffee</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copy rights */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-4 border-t border-white/10 pt-10 font-DanaMedium text-xs/5 md:mt-11 md:pt-11 md:text-base ">
          <div className="flex items-center gap-x-2.5">
            <div className=" flex-center h-[30px] w-[30px] flex-shrink-0 rounded-full border border-white/10">
              <div className=" flex-center h-5 w-5 rounded-full border border-white/20">
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-t from-orange-200 to-orange-300"></div>
              </div>
            </div>
            <p>
              تمام حقوق این رابط کاربری متعلق به{" "}
              <span className="text-orange-300">سبزلرن</span> می‌باشد.
              {/* و دانشجوی این
              دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد. */}
            </p>
          </div>
          <span className="ltr-text mr-auto">
            Copyright © 2023 Golden Coffee. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
