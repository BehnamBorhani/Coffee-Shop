import Link from "next/link";

const Sms = ({ hideOtpForm }) => {
  return (
    <>
      <div className="grid w-[90%] max-w-[380px] rounded bg-white px-6 py-8 text-center font-Dana text-black shadow-xl">
        <p>کد تایید</p>
        <span className="mt-4.5 text-xs text-zinc-700">
          لطفاً کد تأیید ارسال شده را وارد کنید
        </span>
        <span className="mt-1 text-xs text-zinc-700">09921558293</span>
        <input
          className="mt-5 rounded border border-gray-700 bg-white p-3 text-black"
          type="text"
        />
        <button className="my-4 cursor-pointer rounded bg-brown-950 p-3 text-white">
          ثبت کد تایید
        </button>
        <button className="mb-5 cursor-pointer rounded border border-gray-300 bg-gray-100 p-3">
          ارسال مجدد کد یکبار مصرف
        </button>
        <div className="flex items-center justify-center">
          <button
            className="mx-auto block w-max cursor-pointer text-xs text-brown-950"
            onClick={hideOtpForm}
          >
            بازگشت به مرحله قبل
          </button>
          <Link
            href={"/"}
            className="mx-auto block w-max cursor-pointer text-xs text-brown-950"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sms;
