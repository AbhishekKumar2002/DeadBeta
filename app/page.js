import From from "./(components)/landing/From";
import HeroSection from "./(components)/landing/HeroSection";

export default function Home() {
  return (
    <main className="bg-primaryBG dark:bg-secondaryBG dark:text-slate-400 min-h-screen">
      <HeroSection />
      <From />
    </main>
  );
}
