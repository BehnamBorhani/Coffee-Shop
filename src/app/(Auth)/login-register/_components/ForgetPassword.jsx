import Link from "next/link";

const ForgetPassword = ({ hideForgetPassForm }) => {
  return (
    <>
      <div className="grid w-[90%] max-w-[380px] rounded bg-white px-6 py-8 text-center font-Dana text-black shadow-xl">
        <input
          className="rounded border border-gray-700 bg-white p-3 text-black"
          type="text"
          placeholder="ایمیل/شماره موبایل"
        />

        <button className="my-4 cursor-pointer rounded bg-brown-950 p-3 text-white">
          بازنشانی رمز عبور
        </button>

        <div className="flex items-center justify-center">
          <button
            className="mx-auto block w-max cursor-pointer text-xs text-brown-950"
            onClick={hideForgetPassForm}
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

export default ForgetPassword;
