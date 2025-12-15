import { motion } from "framer-motion";

const RADIUS = 400; 
const CENTER = 300;

export default function HeroCircles({
  heroes,
  activeIndex,
  setActiveIndex,
}) {
  const total = heroes.length;
  const angleStep = (2 * Math.PI) / total;
motion
  return (
    <div className="relative w-[600px] h-[580px] bg-[#D9D9D9] rounded-[290px]  mt-[-57px] mr-[-180px] mb-[-200px] ">
      {heroes.map((hero, index) => {
        // Rotate relative to active index
        const angle = angleStep * (index - activeIndex) - Math.PI / 2;

        const x = CENTER + RADIUS * Math.cos(angle);
        const y = CENTER + RADIUS * Math.sin(angle);

        const isActive = index === activeIndex;

        return (
          <motion.img
            key={hero.id}
            src={hero.image}
            alt={hero.name}
            onClick={() => setActiveIndex(index)}
             className="absolute w-50 h-50 rounded-full "
            animate={{
              x: x - 40, // center image (half width)
              y: y - 40, // center image (half height)
              scale: isActive ? 1.4 : 1,
              zIndex: isActive ? 20 : 10,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
