import { AnimatePresence, motion } from "framer-motion";
import HeroCircles from "./HeroCircles";

export default function HeroRotator({
  heroes,
  activeIndex,
  setActiveIndex,
}) {
  const activeHero = heroes[activeIndex];
motion
  return (
    <div className="relative mt-20 flex  justify-between flex-wrap ">
      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={activeHero.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className=" text-black ml-[60px] text-2xl grid  h-[250px]"
        >
          “{activeHero.quote}” <br />
          <span className="text-2xl">
            “We are  here to fight for truth, and justice! <br/> We find the solution  at our own  way.” 
          </span>
        </motion.p>
      </AnimatePresence>

      {/* Rotating Circles */}
      <div className="sm:block  hidden">
        <HeroCircles
        heroes={heroes}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      </div>
    </div>
  );
}
