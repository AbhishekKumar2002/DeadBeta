"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
// import { AnimatedTooltipPreview } from "./(components)/landing/AnimatedTooltipPreview";
import { AnimatedTooltipPreview } from "./(components)/landing/AnimatedToolTipPreview";
import Card_Home from "./(components)/landing/Card_Home";
import Footer from "./(components)/landing/Footer";
import From from "./(components)/landing/From";
import HeroSection from "./(components)/landing/HeroSection";
import Price from "./(components)/price-comparison/page";
import ProfileForm from "./(components)/signup/page";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";
import StarSky from "react-star-sky";
import Faq from "./(components)/landing/Faq";
import HeroSection1 from "./(components)/landing/HeroSection1";

// import "react-star-sky/dist/index.css";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className="bg-slate-200 dark:bg-slate-900 text-black dark:text-slate-200">
      {/* {theme === "dark" && <BackgroundBeams />} */}
      <HeroSection />
<<<<<<< HEAD
      <HeroSection1/>
      <Card_Home />
      
      <Faq/>
      <AnimatedTooltipPreview />
      
=======
     <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
     <script src="https://mediafiles.botpress.cloud/9da1583c-9e9c-45ff-908c-dd21beee74d1/webchat/config.js" defer></script>
      <Card_Home/>
      <AnimatedTooltipPreview/>
>>>>>>> de8eef30e0be9dc52a64c30859583ac2567cf1bf
    </main>
  );
}
