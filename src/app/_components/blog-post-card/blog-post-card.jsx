import Image from "next/image";
import React from "react";

const BlogPostCard = () => {
  return (
    <div className="group flex gap-x-2.5 rounded-2xl bg-white p-2.5 shadow-normal dark:bg-zinc-700 sm:block md:pb-2" data-aos="flip-left">
      <div className="relative h-[130px] w-[130px] shrink-0 overflow-hidden rounded-2xl rounded-bl-4xl sm:mb-4 sm:h-auto sm:w-auto">
        <Image
          width={285}
          height={189.32}
          src="/images/blogs/blog-1.png"
          className="h-full object-cover sm:h-auto"
          alt=""
        />
        <div className="md:flex-center invisible absolute inset-0 hidden h-full w-full bg-gradient-to-r from-orange-200/80 to-orange-300/80  opacity-0 transition-all delay-100 group-hover:visible group-hover:opacity-100">
          <svg className="h-[54px] w-[138px] text-amber-900">
            <use href="#logo-type"></use>
          </svg>
        </div>
      </div>

      <div className=" flex w-full flex-col items-start justify-between sm:flex-row">
        <a
          href="#"
          className="ml-1.5 mt-2.5 line-clamp-2 font-DanaMedium text-sm/7 text-zinc-700 dark:text-white sm:ml-0 sm:mt-0 md:font-Dana md:text-lg lg:max-w-[193px]"
        >
          طرز تهیه قهوه دمی با دستگاه اروپرس
        </a>
        <div className="hidden gap-5 sm:flex">
          <span className="hidden h-[61px] w-px bg-gray-100 dark:bg-white/10 lg:block"></span>
          <div className="ml-[12px ] flex flex-col text-left text-sm text-teal-600 dark:text-emerald-500 lg:ml-[18px]">
            <span className="font-DanaDemibold md:text-lg lg:text-2xl">28</span>
            <span>مرداد</span>
            <span>1402</span>
          </div>
        </div>
        <div className="flex w-full items-end justify-between border-t border-t-gray-100 pb-1.5 pt-[18px] dark:border-t-white/10 sm:hidden">
          <span className="text-xs text-teal-600 dark:text-emerald-500">
            28 مرداد 1402
          </span>
          <a
            href="#"
            className="ml-1.5 flex h-5 items-center gap-x-1 rounded-md bg-orange-200/20 pl-2 pr-2.5 font-DanaMedium text-xs text-orange-300"
          >
            <span>مطالعه</span>
            <svg className="h-3.5 w-3.5 ">
              <use href="#arrow-left2"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
