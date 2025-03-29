import Hero from '@/app/components/sections/Hero';
import Features from '@/app/components/sections/Features';
import Tutorial from '@/app/components/sections/Tutorial';
import Pricing from '@/app/components/sections/Pricing';
import Support from '@/app/components/sections/Support';

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
