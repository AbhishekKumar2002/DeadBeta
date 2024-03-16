import { AnimatedTooltipPreview } from "./(components)/landing/AnimatedTooltipPreview";
import Card_Home from "./(components)/landing/Card_Home";
import Footer from "./(components)/landing/Footer";
import From from "./(components)/landing/From";
import HeroSection from "./(components)/landing/HeroSection";
import Price from "./(components)/price-comparison/page";
import ProfileForm from "./(components)/signup/page";

export default function Home() {
  return (
    <main className="bg-slate-200 dark:bg-slate-900 text-black dark:text-slate-200">
      <HeroSection />
      <Card_Home/>
      <AnimatedTooltipPreview/>
    </main>
  );
}
