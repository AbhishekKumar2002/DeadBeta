import Footer from "./components/landing/Footer";
import From from "./components/landing/From";
import HeroSection from "./components/landing/HeroSection";
import Price from "./components/price-comparison/page";
import ProfileForm from "./components/signup/page";

export default function Home() {
  return (
    <main className="bg-primaryBG dark:bg-secondaryBG dark:text-slate-400 min-h-screen">
      <HeroSection />
      <From />
    </main>
  );
}
