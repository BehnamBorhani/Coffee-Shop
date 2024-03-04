"use client";
import { useAppContext } from "@/contexts/app/app-context";
import { useEffect } from "react";
import Header from "./_components/header/header";

export default function Home() {
  const { theme } = useAppContext();
  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [theme]);

  return (
    <>
      <Header />
      <main className=""></main>
    </>
  );
}
