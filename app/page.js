// import { AnimatedTooltipPreview } from "./(components)/landing/AnimatedTooltipPreview";
import { AnimatedTooltipPreview } from "./(components)/landing/AnimatedToolTipPreview";
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
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/646a28a5-a701-4134-bf77-50c76083f2f5/webchat/config.js" defer></script>
      <Card_Home/>
      <AnimatedTooltipPreview/>
    </main>
  );
}
