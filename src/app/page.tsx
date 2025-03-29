import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Tutorial from '@/components/sections/Tutorial';
import Pricing from '@/components/sections/Pricing';
import Support from '@/components/sections/Support';

export default function Home() {
  return (
    <main className="flex flex-col gap-24 md:gap-20 lg:gap-32">
      <Hero />
      <Features />
      <Tutorial />
      <Pricing />
      <Support />
      <div></div>
    </main>
  );
}
