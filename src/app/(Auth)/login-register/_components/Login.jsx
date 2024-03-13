"use client";
import React, { useState } from "react";
import Link from "next/link";
import Sms from "./Sms";

const Login = ({ showRegisterForm }) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);

  const hideOtpForm = () => setIsLoginWithOtp(false);

  return (
    <>
      {isLoginWithOtp ? (
        <Sms hideOtpForm={hideOtpForm} />
      ) : (
        <>
          <div className="grid w-[90%] max-w-[380px] rounded bg-white px-6 py-[10px] text-center font-Dana text-black shadow-xl">
            <input
              className="mt-5 rounded border border-gray-700 bg-white p-3 text-black"
              type="text"
              placeholder="ایمیل/شماره موبایل"
            />
            <input
              className="mt-5 rounded border border-gray-700 bg-white p-3 text-black"
              type="password"
              placeholder="رمز عبور"
            />
            <div class="form-control mx-0 mb-3 mt-5">
              <label class="label cursor-pointer justify-start gap-1.5">
                <input
                  type="checkbox"
                  class="checkbox checkbox-xs rounded-sm border border-gray-700 [--chkbg:theme(colors.brown.950)] [--chkfg:white]"
                />
                <span class="text-xs">مرا به یاد داشته باش</span>
              </label>
            </div>
            <button className="cursor-pointer rounded bg-brown-950 p-3 text-white">
              ورود
            </button>
            <Link
              href={"/forget-password"}
              className="my-4 cursor-pointer text-xs"
            >
              رمز عبور را فراموش کرده اید؟
            </Link>
            <button
              className="cursor-pointer rounded bg-brown-950 p-3 text-white"
              onClick={() => setIsLoginWithOtp(true)}
            >
              ورود با کد یکبار مصرف
            </button>
            <span className="mb-5 mt-8 text-right text-xs">
              ایا حساب کاربری ندارید؟
            </span>
            <button
              className="mb-5 cursor-pointer rounded border border-gray-300 bg-gray-100 p-4"
              onClick={showRegisterForm}
            >
              ثبت نام
            </button>
            <Link
              href={"/"}
              className="mx-auto block w-max cursor-pointer text-xs text-brown-950"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
