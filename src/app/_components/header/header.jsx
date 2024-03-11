import React from "react";

const Header = () => {
  return (
    <section className="home h-[200px] bg-header-mobile bg-cover bg-[center_top] bg-no-repeat xs:aspect-[2/1] xs:h-auto md:aspect-auto md:bg-header-desktop">
      <div className="container flex h-full items-center justify-end md:min-h-screen ">
        <div className="text-white">
          <h2 className="mb-0.5 font-MorabbaBold text-2xl md:mb-2 md:text-5xl lg:text-6xl">
            قهوه عربیکا تانزانیا
          </h2>
          <span className="font-MorabbaLight text-xl md:text-4xl lg:text-5xl">
            یک فنجان بالانس!
          </span>
          <span className="my-3 block h-px w-[100px] bg-orange-300 md:my-5 md:h-0.5 lg:my-8"></span>
          <p className="lg:text-2xlg max-w-[210px] text-xs md:max-w-[460px] md:text-lg">
            قطعا نام آشنای عربیکا را شنیده اید. عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت می شود.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
