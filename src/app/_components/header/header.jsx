import React from "react";

const Header = () => {
  return (
    <section class="home bg-cover h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto md:bg-header-desktop bg-header-mobile bg-no-repeat bg-[center_top]">
      <div class="container h-full md:min-h-screen flex items-center justify-end ">
        <div class="text-white">
          <h2 class="font-MorabbaBold text-2xl md:text-5xl lg:text-6xl mb-0.5 md:mb-2">
            قهوه عربیکا تانزانیا
          </h2>
          <span class="font-MorabbaLight text-xl md:text-4xl lg:text-5xl">
            یک فنجان بالانس!
          </span>
          <span class="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-5 lg:my-8"></span>
          <p class="text-xs md:text-lg lg:text-2xlg max-w-[210px] md:max-w-[460px]">
            قطعا نام آشنای عربیکا را شنیده اید. عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت می شود.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
