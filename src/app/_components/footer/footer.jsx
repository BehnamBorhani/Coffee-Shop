import React from "react";

const Footer = () => {
  return (
    <footer class="relative bg-zinc-700 py-8 md:pb-11 md:pt-[62px] ">
      <svg className="absolute -top-[1px] right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
        <use href="#curve-footer"></use>
      </svg>
      <div className="absolute -top-[1px] right-0 left-0 mx-auto -translate-y-2/4 hidden md:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full">
        <svg className="size-5 text-zinc-700 dark:text-white rotate-180">
          <use href="#chevron-down"></use>
        </svg>
      </div>

      <div class="px-4 md:px-0 sm:w-[94%] lg:w-[90%] mx-auto text-gray-300">
        <div class="flex justify-between flex-wrap ">
          {/* footer - right */}
          <div>
            <div class="flex gap-x-5 text-gray-300 mb-6 md:mb-4.5">
              <svg class="w-[57px] h-[54px]">
                <use href="#logo"></use>
              </svg>
              <svg class="w-[138px] h-[54px]">
                <use href="#logo-type"></use>
              </svg>
            </div>

            <p class="xl:max-w-[570px] text-lg md:text-xl/[48px] ">
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
              خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
              فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
              منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
              اشتیاق می‌کوشیم.
            </p>
          </div>

          {/* foter - center */}
          <div class="mt-10 md:mt-[26px]">
            <h4 class="mb-6 md:mb-7 font-DanaDemibold text-2xl text-white">
              دسترسی سریع
            </h4>

            <div class="grid grid-cols-2 gap-x-10 md:gap-x-0 gap-y-2.5 mb-6 md:mb-7">
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-all"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                <span>حریم خصوصی</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-all"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                <span>پرسش های متداول</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-all"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                <span>عودت کالا</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-all"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                <span>فرصت های شغلی</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-all"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                <span>شرایط استفاده</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-all"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                <span>ضمانت نامه ها</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-all"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                <span>ثبت سفارش</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-all"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                <span>ارتباط با ما</span>
              </a>
            </div>
          </div>

          {/* footer - left */}
          <div class="mt-10 md:mt26">
            {/* Address */}
            <h4 class="mb-6 md:mb-7 font-DanaDemibold text-2xl text-white">
              در تماس باشیم
            </h4>
            <div>
              {/* email & Phone */}
              <div class="text-xl mb-6 md:mb-10">
                <span class="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                  <svg class="shrink-0 w-5 h-5 md:w-6 md:h-6">
                    <use href="#map-pin"></use>
                  </svg>
                  <span>
                    بلوار میرداماد ، خیابان البرز، کوچه قبادیان شرقی، پلاک 33
                  </span>
                </span>
                <div class="flex flex-wrap gap-x-5 gap-y-4 font-DanaMedium">
                  <a
                    href="mailto:info@Coffee.com"
                    class="flex items-center gap-x-2 md:gap-x-3 text-orange-300"
                  >
                    <svg class="w-5 h-5 md:w-6 md:h-6">
                      <use href="#envelop"></use>
                    </svg>
                    <span>info@Coffee.com</span>
                  </a>
                  <div class="flex items-center gap-x-2 md:gap-x-3">
                    <svg class="w-5 h-5 md:w-6 md:h-6">
                      <use href="#phone"></use>
                    </svg>
                    <span>0936-504-1466</span>
                    <span>021-88229012</span>
                  </div>
                </div>
              </div>
              {/* buttons */}
              <div class="flex gap-x-1.5 md:gap-x-6 font-DanaMedium md:text-2xl ">
                <a
                  href="#"
                  class="flex items-center justify-center gap-x-2 flex-grow h-12 border border-orange-200 text-orange-200 rounded-xl"
                >
                  <svg class="w-[26px] h-[26px] md:w-[38px] md:h-[38px]">
                    <use href="#instagram"></use>
                  </svg>
                  <span class="ltr-text">@golden_coffee</span>
                </a>
                <a
                  href="#"
                  class="flex items-center justify-center gap-x-2 flex-grow h-12 bg-gradient-to-r from-orange-200 to-orange-300 text-zinc-700 rounded-xl"
                >
                  <svg class="w-[26px] h-[26px] md:w-[38px] md:h-[38px]">
                    <use href="#telegram"></use>
                  </svg>
                  <span class="ltr-text">@golden_coffee</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copy rights */}
        <div class="flex flex-wrap justify-between items-center gap-x-4 mt-10 md:mt-11 pt-10 md:pt-11 border-t border-white/10 font-DanaMedium text-xs/5 md:text-base ">
          <div class="flex items-center gap-x-2.5">
            <div class=" flex-center w-[30px] h-[30px] border border-white/10 rounded-full flex-shrink-0">
              <div class=" flex-center w-5 h-5 border border-white/20 rounded-full">
                <div class="w-2.5 h-2.5 bg-gradient-to-t from-orange-200 to-orange-300 rounded-full"></div>
              </div>
            </div>
            <p>
              تمام حقوق این رابط کاربری متعلق به{" "}
              <span class="text-orange-300">سبزلرن</span> می‌باشد.
              {/* و دانشجوی این
              دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد. */}
            </p>
          </div>
          <span class="ltr-text mr-auto">
            Copyright © 2023 Golden Coffee. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
