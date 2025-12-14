import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "./slides";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import Navigation from "../../components/mountain/Navigation";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const slide = slides[index];

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.background})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="absolute top-6 left-6 z-30 lg:hidden"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-40 flex flex-col p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-10"
            >
              <X size={32} />
            </button>
            <Navigation mobile onClose={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-24">
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navigation />
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight lg:mt-[-80px]">
                {slide.title}
              </h1>

              <p className="mt-6 sm:mt-10 max-w-xl text-sm lg:text-base text-white/90">
                {slide.description}
              </p>

              <button className="mt-10 sm:mt-16 lg:ml-[140px] lg:mt-[103px] rounded-full border border-blue-400 px-8 py-3 font-semibold hover:bg-blue-400 hover:text-black transition">
                GET STARTED
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Right Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.images[0]}
              className="hidden md:flex lg:flex gap-8 lg:gap-40 justify-center lg:justify-end lg:mt-[220px] lg:mr-[-50px]"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-[280px] sm:w-[334px] h-[200px] sm:h-[238px] object-cover rounded-xl shadow-lg"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-8 left-6 sm:left-10 lg:bottom-[100px] lg:left-1/13 flex items-center gap-6 z-20">
        <Facebook size={24} />
        <Twitter size={24} />
        <Instagram size={24} />
      </div>

      {/* Arrows */}
      <div className="absolute bottom-8 right-6 sm:right-10 lg:bottom-[100px] lg:left-[1020px] flex items-center gap-6 z-20">
        <button onClick={prev} className="rounded-full border">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="rounded-full border">
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Progress (Desktop Only) */}
      <div className="absolute bottom-[110px] right-40 hidden lg:flex items-center gap-4">
        <div className="h-[4px] w-[582px] bg-white/30">
          <div
            className="h-full bg-yellow-400 transition-all"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="text-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
