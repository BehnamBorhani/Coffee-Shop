"use client";
import { useState } from "react";
import { authTypes } from "@/utils/constants";
import Login from "./_components/Login";
import Register from "./_components/Register";

const login_register = () => {
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showLoginForm = () => setAuthType(authTypes.LOGIN);

  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden md:flex-row">
      <section className="flex-1 bg-brown-950">
        <img
          src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
          className="h-full object-cover"
          alt=""
        />
      </section>
      <div
        className="container flex flex-1 items-center justify-center py-8"
        data-aos="fade-up"
      >
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showLoginForm={showLoginForm} />
        )}
      </div>
    </div>
  );
};

export default login_register;
