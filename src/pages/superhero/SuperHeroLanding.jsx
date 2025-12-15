import { useEffect, useState } from "react";
import { superHeroes } from "./superHeroes";
import SuperHeroNavigation from './../../components/superhero/SuperHeroNavigation';
import HeroRotator from './../../components/superhero/HeroRotator';


export default function SuperHeroLanding() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % superHeroes.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white text-black overflow-hidden">
      <SuperHeroNavigation />

      <h1 className="mt-[265px]  ml-[60px] text-4xl lg:text-6xl font-bold">
        Our Super Heroes
      </h1>

      <HeroRotator
        heroes={superHeroes}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
}
