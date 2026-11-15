import React, { lazy, Suspense, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Compass, HeartHandshake, Sprout, UsersRound } from "lucide-react";
import { events } from "@/data/events";
import heroImage from "@/images/hero/hero1.jpeg";
import volunteerImage from "@/images/hero/hero3.jpeg";
import CountUp from "@/components/CountUp";
import Magnet from "@/components/Magnet";
import ClickSpark from "@/components/ClickSpark";
import SpotlightCard from "@/components/SpotlightCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServiceOrbit = lazy(() => import("@/component/service-orbit").then((module) => ({ default: module.ServiceOrbit })));

const principles = [
  { icon: HeartHandshake, title: "Show up", body: "Start close to home—with time, attention and a willingness to help." },
  { icon: Compass, title: "Listen first", body: "Understand the need before deciding what action looks like." },
  { icon: Sprout, title: "Leave it stronger", body: "Create work that stays useful long after a single event ends." },
];

const metrics = [
  { number: 250, suffix: "+", label: "active volunteers" },
  { number: 35, suffix: "+", label: "initiatives this year" },
  { number: 5000, suffix: "+", label: "people reached" },
  { number: 12000, suffix: "+", label: "hours in service" },
];

const marqueeMessages = [
  "NOT ME, BUT YOU.",
  "SERVICE IS A VERB.",
  "SMALL ACTS, SHARED FUTURES.",
  "SHOW UP. LISTEN. ACT.",
  "NSS NIT DURGAPUR.",
];

function Home() {
  const [activePrinciple, setActivePrinciple] = useState(["show-up"]);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 85, damping: 26 });
  const heroScale = useTransform(smoothProgress, [0, 0.18], [1, 1.13]);
  const heroY = useTransform(smoothProgress, [0, 0.18], [0, 100]);
  const recentEvents = useMemo(() => [...events].sort((a, b) => new Date(b.startDate) - new Date(a.startDate)).slice(0, 3), []);

  return (
    <main className="overflow-hidden bg-[#f4f7fb] text-slate-900">
      <section className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-[#071321] text-white">
        <motion.img src={heroImage} alt="NSS NIT Durgapur volunteers" style={{ scale: heroScale, y: heroY }} className="absolute inset-0 -z-30 size-full object-cover opacity-45" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(7,19,33,.96)_4%,rgba(7,19,33,.74)_48%,rgba(7,19,33,.3))]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_42%,rgba(229,94,53,.28),transparent_24%),linear-gradient(0deg,rgba(7,19,33,.9),transparent_60%)]" />
        <Suspense fallback={<div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_75%_45%,rgba(229,94,53,.2),transparent_27%)] xl:block" />}>
          <ServiceOrbit />
        </Suspense>
        <div className="absolute left-0 right-0 top-8 h-px bg-white/15" />
        <div className="pointer-events-none relative mx-auto flex min-h-[calc(100svh-72px)] max-w-[88rem] items-end px-4 pb-16 pt-24 sm:px-7 lg:items-center lg:px-10 lg:pb-0 lg:pt-10">
          <div className="pointer-events-auto w-fit max-w-[min(100%,44rem)]">
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="eyebrow-line text-primary">National Service Scheme · NIT Durgapur</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .1, ease: [0.22, 1, .36, 1] }} className="mt-7 text-balance text-[clamp(4.1rem,10.5vw,10.8rem)] font-black leading-[.84] tracking-[-.045em]">
              SERVICE<br /><span className="text-primary">LEAVES A TRACE.</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .35 }} className="mt-9 flex flex-wrap items-end gap-x-9 gap-y-5">
              <p className="max-w-md text-base leading-7 text-white/72 sm:text-lg">Student-led service that moves between campus, community, and country—turning care into shared, visible action.</p>
              <Magnet padding={80} magnetStrength={3.6} maxOffset={12} tilt={3} scale={1.02}>
                <ClickSpark sparkColor="#e55e35" sparkCount={9} sparkRadius={26} sparkSize={8} duration={430}>
                  <Link to="/events" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-white hover:text-slate-950" data-cursor-label="ENTER ARCHIVE">Explore More<ArrowUpRight className="size-4" /></Link>
                </ClickSpark>
              </Magnet>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900/10 bg-[#e9eff5] py-4 overflow-hidden">
        <div className="home-marquee whitespace-nowrap text-[clamp(1.05rem,2vw,1.8rem)] font-black tracking-[-.045em] text-slate-900">
          {[...marqueeMessages, ...marqueeMessages].map((message, index) => <span key={`${message}-${index}`}>{message}</span>)}
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-7 sm:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[88rem] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow-line text-primary">How we move</p><h2 className="mt-5 max-w-md text-balance text-5xl font-black leading-[.9] tracking-[-.065em] sm:text-6xl">The work starts with a choice.</h2><p className="mt-7 max-w-md leading-8 text-slate-600">A better campus and a stronger community are not abstractions. They are built in small, repeatable acts of attention.</p></div>
          <Accordion value={activePrinciple} onValueChange={setActivePrinciple} className="grid gap-4">
            {principles.map((item, index) => { const Icon = item.icon; const value = item.title.toLowerCase().replaceAll(" ", "-"); return <AccordionItem key={item.title} value={value} onPointerEnter={() => setActivePrinciple([value])} className="service-guide-item group/service overflow-hidden rounded-[1.7rem] border border-slate-900/10 bg-white transition-all duration-300 hover:border-primary/55 data-[open]:border-primary data-[open]:bg-slate-900 data-[open]:text-white data-[open]:shadow-xl data-[open]:shadow-slate-900/20"><AccordionTrigger className="rounded-none px-6 py-6 no-underline hover:no-underline sm:px-8 sm:py-7"><span className="grid grid-cols-[auto_1fr_auto] items-center gap-5"><span className="service-guide-icon grid size-12 place-items-center rounded-full bg-slate-100 text-primary transition-all duration-300 group-data-[open]/accordion-trigger:bg-primary group-data-[open]/accordion-trigger:text-white"><Icon className="size-5 transition-transform duration-300" /></span><span className="text-2xl font-black tracking-[-.04em]">{item.title}</span><span className="text-sm font-bold text-slate-300 transition-colors group-data-[open]/accordion-trigger:text-primary">0{index + 1}</span></span></AccordionTrigger><AccordionContent className="px-6 pb-6 sm:px-8 sm:pb-8"><p className="max-w-lg text-sm leading-6 text-slate-600 group-data-[open]/service:text-white/68">{item.body}</p></AccordionContent></AccordionItem>; })}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 px-4 py-24 text-white sm:px-7 sm:py-32 lg:px-10">
        <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="relative mx-auto max-w-[88rem]"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow-line text-primary">Proof of presence</p><h2 className="mt-5 text-balance text-5xl font-black leading-[.9] tracking-[-.065em] sm:text-6xl">Service you can measure.</h2></div><p className="max-w-sm leading-7 text-white/60">Not metrics for a dashboard. A record of people choosing to make time for each other.</p></div><div className="mt-16 grid border-y border-white/15 md:grid-cols-4">{metrics.map((metric, index) => <div key={metric.label} className="group border-b border-white/15 px-5 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"><p className="text-5xl font-black tracking-[-.07em] text-primary sm:text-6xl"><CountUp to={metric.number} suffix={metric.suffix} mode="roll" duration={1.6} easing="spring" /></p><p className="mt-4 max-w-28 text-sm leading-5 text-white/60">{metric.label}</p><span className="mt-7 block h-px w-10 bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-primary" /></div>)}</div></div>
      </section>

      <section className="px-4 py-24 sm:px-7 sm:py-32 lg:px-10"><div className="mx-auto max-w-[88rem]"><div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow-line text-primary">Field notes</p><h2 className="mt-5 text-balance text-5xl font-black leading-[.9] tracking-[-.065em] sm:text-6xl">What happened when we showed up.</h2></div><Link to="/events" className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-primary">See every story <span className="grid size-10 place-items-center rounded-full border border-slate-900/15"><ArrowUpRight className="size-4" /></span></Link></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{recentEvents.map((event, index) => <SpotlightCard key={event.slug} theme="light" spotlightColor="#e55e35" intensity={.2} grain={.05} className="group min-h-[480px] p-0! rounded-[1.6rem] border border-slate-900/10 bg-white"><Link to={`/events/${event.slug}`} className="flex h-full flex-col" data-cursor-label="READ STORY"><div className="relative h-60 overflow-hidden"><img src={event.image} alt="" className="size-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" /><span className="absolute bottom-4 left-5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[.12em] text-white">0{index + 1} / FIELD NOTE</span></div><div className="flex flex-1 flex-col p-6"><p className="text-xs font-bold tracking-[.13em] text-primary">{event.category}</p><h3 className="mt-4 text-2xl font-black leading-[.95] tracking-[-.05em]">{event.title}</h3><p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{event.description}</p><span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold">Read the story <ArrowUpRight className="size-4 text-primary" /></span></div></Link></SpotlightCard>)}</div></div></section>

      <section className="px-4 pb-24 sm:px-7 sm:pb-32 lg:px-10"><div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2rem] bg-[#e55e35] px-7 py-14 text-white sm:px-12 sm:py-20"><img src={volunteerImage} alt="" className="absolute inset-0 size-full object-cover opacity-15 mix-blend-multiply" /><div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow-line text-white">The next trace is yours</p><h2 className="mt-6 max-w-3xl text-balance text-5xl font-black leading-[.88] tracking-[-.07em] sm:text-7xl">Bring your time.<br />Bring your people.</h2></div><Magnet padding={70} magnetStrength={3.4} maxOffset={12}><Link to="/contact" data-cursor-label="CONNECT" className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-white hover:text-slate-950">Join the conversation <UsersRound className="size-4" /></Link></Magnet></div></div></section>
    </main>
  );
}

export default Home;
