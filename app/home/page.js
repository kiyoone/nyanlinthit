'use client'
import HeroSection from "@/components/HomePageComponent/HeroSection";
import Publication from "@/components/HomePageComponent/Publication";
import Statement from "@/components/HomePageComponent/Statement";
import WeeklyHighlights from "@/components/HomePageComponent/WeeklyHighlights";
import WhatWeDo from "@/components/HomePageComponent/WhatWeDo";
import React from "react";


// import Advocacy from "../Components/HomePageComponent/Advocacy";

const Home = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <HeroSection />
      <WeeklyHighlights />
      <WhatWeDo />
      <Publication />
      <Statement />
      {/* <Advocacy /> */}
    </div>
  );
};

export default Home;