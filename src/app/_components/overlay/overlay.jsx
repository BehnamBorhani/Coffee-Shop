"use client";
import { useAppContext } from "@/contexts/app/app-context";
import React from "react";

const Overlay = () => {
  const { isOverlayShow, changeOverlayShow } = useAppContext();
  const changeOverlayShowHandler = () => {
    changeOverlayShow(isOverlayShow ? false : true);
  };

  return (
    <>
      {/* overlay for hamburger menu */}
      <div
        className={`overlay ${isOverlayShow ? "overlay--visible" : ""}`}
        onClick={changeOverlayShowHandler}
      ></div>
    </>
  );
};

export default Overlay;
