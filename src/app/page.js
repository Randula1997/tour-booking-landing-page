"use client";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-[4%] md:px-[10%] pb-2">
        <Banner />
        <Footer />
      </div>
    </>
  );
}
