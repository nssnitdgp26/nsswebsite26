import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { homeContent } from "@/data/home";
import { AmbientField } from "@/component/ambient-field";
import { Magnetic } from "@/component/experience-provider";
import Magnet from "@/components/Magnet";
import ClickSpark from "@/components/ClickSpark";
import heroOne from "@/images/hero/hero1.jpeg";
import heroTwo from "@/images/hero/hero2.jpeg";
import heroThree from "@/images/hero/hero3.jpeg";

const heroImages = [heroTwo, heroOne, heroThree];

export function HomeHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [pledgeOpen, setPledgeOpen] = useState(false);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 850], [0, 120]);
  const imageScale = useTransform(scrollY, [0, 850], [1.06, 1.2]);
  const contentY = useTransform(scrollY, [0, 650], [0, -80]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentImage((value) => (value + 1) % heroImages.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grain relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-[#0b1624] text-white" onPointerMove={(event) => setPointer({ x: (event.clientX / window.innerWidth - .5) * 18, y: (event.clientY / window.innerHeight - .5) * 12 })}>
      <motion.div style={{ y: imageY, scale: imageScale, x: pointer.x, rotate: pointer.y * -.08 }} className="absolute inset-[-5%] -z-30 will-change-transform">
        <AnimatePresence mode="sync">
          <motion.img key={heroImages[currentImage]} src={heroImages[currentImage]} alt="NSS volunteers serving their community" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, .36, 1] }} className="absolute inset-0 size-full object-cover" />
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(8,19,33,.96)_4%,rgba(8,19,33,.58)_52%,rgba(8,19,33,.22))]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(0deg,rgba(8,19,33,.75),transparent_45%)]" />
      <AmbientField className="absolute inset-0 -z-10 size-full opacity-90 mix-blend-screen" />
      <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/15 lg:block" />
      <div className="absolute right-[22%] top-0 hidden h-full w-px bg-white/10 lg:block" />

      <motion.div style={{ y: contentY }} className="mx-auto flex min-h-[calc(100svh-72px)] max-w-[88rem] items-end px-4 pb-24 pt-32 sm:px-7 lg:px-10 lg:pb-28">
        <div className="max-w-5xl">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="eyebrow-line text-primary">{homeContent.hero.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .08, ease: [0.22, 1, .36, 1] }} className="mt-7 max-w-5xl text-balance text-[clamp(4rem,10vw,10.5rem)] font-black leading-[.78] tracking-[-.085em]">
            NOT ME,<br /><span className="text-primary">BUT YOU.</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .32 }} className="mt-9 flex flex-wrap items-end gap-x-10 gap-y-6">
            <p className="max-w-md text-base leading-7 text-white/75 sm:text-lg">{homeContent.hero.description}</p>
            <div className="flex flex-wrap gap-3">
              <Magnet padding={70} magnetStrength={3.5} maxOffset={12} scale={1.02} tilt={3}>
                <ClickSpark sparkColor="#e55e35" sparkSize={9} sparkRadius={24} sparkCount={10} duration={420}>
                  <a href="#about" data-cursor-label="EXPLORE" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-white hover:text-slate-950"><span>Explore our purpose</span><ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
                </ClickSpark>
              </Magnet>
              <button type="button" onClick={() => setPledgeOpen((open) => !open)} aria-expanded={pledgeOpen} aria-controls="nss-pledge" data-cursor-label="OUR PLEDGE" className="rounded-full border border-white/25 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10">
                {pledgeOpen ? "Close pledge" : "Our pledge"}
              </button>
            </div>
          </motion.div>
          <AnimatePresence initial={false}>
            {pledgeOpen && <motion.aside id="nss-pledge" role="region" aria-label="NSS pledge" initial={{ opacity: 0, height: 0, y: -8 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -8 }} transition={{ duration: .32, ease: [0.22, 1, .36, 1] }} className="mt-6 max-w-xl overflow-hidden border-l-2 border-primary pl-5 text-sm leading-7 text-white/75">
              <strong className="block text-base text-primary">Not me, but you.</strong>
              We learn through service: listening before acting, working with communities, and carrying responsibility beyond campus.
            </motion.aside>}
          </AnimatePresence>
        </div>
      </motion.div>

      <aside className="absolute bottom-7 right-4 flex items-end gap-6 sm:right-7 lg:right-10" aria-label="Hero gallery controls">
        <div className="hidden border-l border-white/30 pl-5 text-right sm:block"><p className="text-3xl font-black tracking-[-.06em]">250+</p><p className="mt-1 max-w-32 text-[10px] font-semibold leading-4 tracking-[.08em] text-white/55">VOLUNTEERS IN MOTION</p></div>
        <div className="flex items-center gap-2">{heroImages.map((image, index) => <button key={image} type="button" onClick={() => setCurrentImage(index)} aria-label={`Show image ${index + 1}`} className={`group grid size-9 place-items-center rounded-full border transition-all ${index === currentImage ? "border-primary bg-primary text-primary-foreground" : "border-white/35 bg-white/5 text-white hover:border-white"}`}><span className="text-[10px] font-bold">0{index + 1}</span></button>)}</div>
      </aside>
      <div className="absolute bottom-8 left-4 flex items-center gap-3 text-[10px] font-bold tracking-[.14em] text-white/55 sm:left-7 lg:left-10"><motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}><ArrowDown className="size-4" /></motion.span> SCROLL TO ENTER</div>
      <span className="absolute right-[calc(8%_-_13px)] top-8 hidden rounded-full bg-primary p-2 text-primary-foreground lg:block"><Play className="size-3 fill-current" /></span>
    </section>
  );
}
