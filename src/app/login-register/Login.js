import React from "react";
import Link from "next/link";
const Login = () => {
  return (
    <>
      <div className="grid w-[90%] max-w-[380px] rounded bg-white px-6 py-[10px] text-center font-Dana text-black shadow-md">
        <input
          className="mt-5 rounded border bg-white p-3 text-black"
          type="text"
          placeholder="ایمیل/شماره موبایل"
        />
        <input
          className="mt-5 rounded border bg-white p-3 text-black"
          type="password"
          placeholder="رمز عبور"
        />
        <div className="mx-0 mb-3 mt-5 flex flex-row items-center gap-1.5">
          <input
            className="size-4 -translate-y-[10%] cursor-pointer rounded-sm border border-[#d9d9d9] bg-brown-950 align-sub outline-none checked:accent-brown-950"
            type="checkbox"
            name=""
            id=""
          />
          <label className="text-sm">مرا به یاد داشته باش</label>
        </div>
        <button className="cursor-pointer bg-brown-950 p-3 text-white">
          ورود
        </button>
        <Link href={"/forget-password"} className="my-4 cursor-pointer text-xs">
          رمز عبور را فراموش کرده اید؟
        </Link>
        <button className="cursor-pointer bg-brown-950 p-3 text-white">
          ورود با کد یکبار مصرف
        </button>
        <span className="mb-5 mt-8 text-right text-xs">
          ایا حساب کاربری ندارید؟
        </span>
        <button className="mb-5 cursor-pointer border border-gray-300 bg-gray-100 p-4">
          ثبت نام
        </button>
        <Link
          href={"/"}
          className="mx-auto block w-max cursor-pointer text-xs text-brown-950"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>

      {/* <Sms /> */}
    </>
  );
};

export default Login;
