import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import { homeContent } from "@/data/home";

const heroImages = [
  "src/images/hero/hero2.jpeg",
  "src/images/hero/hero1.jpeg",
  "src/images/hero/hero3.jpeg",
];

export function HomeHero() {
  const [currentImage, setCurrentImage] = useState(0);

  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 700], [0, 140]);
  const imageScale = useTransform(scrollY, [0, 700], [1.05, 1.18]);
  const contentY = useTransform(scrollY, [0, 500], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  useEffect(() => {
    if (heroImages.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % heroImages.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activeImage = heroImages[currentImage];

  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
      
      {/* Background Image */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute inset-0 -z-20"
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      {/* Blue Tint */}
      <div className="absolute inset-0 -z-10 bg-[#082b5c]/45" />

      {/* Dark Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/10" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[35%] border-l border-white/10 lg:block" />

      <div className="pointer-events-none absolute right-[12%] top-0 hidden h-full border-l border-white/5 lg:block" />

      {/* Main Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="w-full">

          {/* Hero Text */}
          <div className="max-w-5xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-[22px] font-semibold uppercase tracking-[0.25em] text-blue-200"
            >
              {homeContent.hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl -translate-x-[10px] text-[3.5rem] font-bold leading-[0.95] sm:text-[4.5rem] lg:text-[8.2rem]"
            >
              NOT ME,
              <span className="block text-blue-200">BUT YOU.</span>
            </motion.h1>

          </div>

          {/* Blue Line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "5rem" }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 h-1 bg-blue-300"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl"
          >
            {homeContent.hero.description}
          </motion.p>

          {/* Explore Events Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9"
          >
            <a
              href={homeContent.hero.primaryAction.href}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100"
            >
              {homeContent.hero.primaryAction.label}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Information Panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="absolute bottom-24 right-6 hidden w-64 lg:block xl:right-12"
      >
        <div className="border-l border-white/30 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            NSS NIT Durgapur
          </p>

          <p className="mt-3 text-3xl font-bold tracking-tight">
            250+
          </p>

          <p className="mt-1 text-sm leading-6 text-white/60">
            Active volunteers contributing through service and community
            engagement.
          </p>
        </div>
      </motion.div>

      {/* Image Indicators */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-8 left-6 flex items-center gap-2 sm:left-8 lg:left-12">
          {heroImages.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`Show hero image ${index + 1}`}
              onClick={() => setCurrentImage(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImage
                  ? "w-10 bg-white"
                  : "w-5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 right-6 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/50 sm:flex lg:right-12"
      >
        <span>Scroll to explore</span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}