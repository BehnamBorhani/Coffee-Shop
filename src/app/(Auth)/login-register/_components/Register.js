import Link from "next/link";

const Register = ({ showLoginForm }) => {
  return (
    <>
      <div className="grid w-[90%] max-w-[380px] rounded bg-white px-6 py-[10px] text-center font-Dana text-black shadow-xl">
        <input
          className="mt-5 rounded border bg-white p-3 text-black"
          type="text"
          placeholder="نام"
        />
        <input
          className="mt-5 rounded border bg-white p-3 text-black"
          type="text"
          placeholder="شماره موبایل  "
        />
        <input
          className="mt-5 rounded border bg-white p-3 text-black"
          type="email"
          placeholder="ایمیل (دلخواه)"
        />
        {/* {registerWithPass && (
          <input
            className="mt-5 rounded border bg-white p-3 text-black"
            type="password"
            placeholder="رمز عبور"
          />
        )} */}
        <p className="mt-4 cursor-pointer rounded bg-brown-950 p-3 text-white">
          ثبت نام با کد تایید
        </p>
        <button className="mt-3 cursor-pointer rounded bg-brown-950 p-3 text-white">
          ثبت نام با رمزعبور
        </button>

        <span className="mb-5 mt-8 text-right text-xs">
          ایا حساب کاربری دارید؟
        </span>
        <button
          className="mb-5 cursor-pointer rounded border border-gray-300 bg-gray-100 p-4"
          onClick={showLoginForm}
        >
          ورود
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

export default Register;
