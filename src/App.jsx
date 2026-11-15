import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { PageShell } from "@/component/page-shell";

import Home from "@/pages/Home";
import Events from "@/pages/Events";
import EventDetails from "@/pages/event-details";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";



function NotFound() {
  return (
    <PageShell>
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          404
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Return Home
        </Link>

      </main>
    </PageShell>
  );
}

function routeLabel(pathname) {
  if (pathname === "/") return "Home";
  if (pathname === "/events") return "Events";
  if (pathname.startsWith("/events/")) return "Event story";
  if (pathname === "/team") return "Our people";
  if (pathname === "/contact") return "Connect";
  return "NSS NIT Durgapur";
}

function transitionProfile(pathname) {
  if (pathname === "/") {
    return {
      kind: "pulse",
      cover: "circle(150% at 76% 48%)",
      reveal: "circle(0% at 76% 48%)",
      background: "radial-gradient(circle at 76% 48%, #ffc07b 0%, #e55e35 26%, #ba3f30 58%, #101b2a 100%)",
    };
  }
  if (pathname === "/events") {
    return {
      kind: "stripes",
      cover: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      reveal: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      background: "linear-gradient(118deg, #101b2a 0%, #22384e 37%, #bd4431 72%, #f07a45 100%)",
    };
  }
  if (pathname.startsWith("/events/")) {
    return {
      kind: "story",
      cover: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      reveal: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      background: "linear-gradient(125deg, #f09a59 0%, #e55e35 28%, #af392f 57%, #101b2a 100%)",
    };
  }
  if (pathname === "/team") {
    return {
      kind: "people",
      cover: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      reveal: "polygon(0 50%, 0 50%, 0 50%, 0 50%)",
      background: "linear-gradient(125deg, #101b2a 0%, #1e4251 37%, #2d7661 58%, #e55e35 100%)",
    };
  }
  if (pathname === "/contact") {
    return {
      kind: "signal",
      cover: "circle(150% at 50% 50%)",
      reveal: "circle(0% at 50% 50%)",
      background: "radial-gradient(circle at 50% 50%, #f2a45d 0%, #e55e35 26%, #b23c30 59%, #101b2a 100%)",
    };
  }
  return {
    kind: "stripes",
    cover: "inset(0 0 0 0)",
    reveal: "inset(0 0 0 100%)",
    background: "linear-gradient(120deg, #101b2a 0%, #253e53 48%, #e55e35 100%)",
  };
}

function TransitionArtwork({ kind, reducedMotion, duration }) {
  const timing = { duration, ease: [0.76, 0, 0.24, 1] };

  if (kind === "pulse" || kind === "signal") {
    const origin = kind === "pulse" ? "76% 48%" : "50% 50%";
    return (
      <>
        {[1, 0.7, 0.42].map((scale, index) => (
          <motion.span
            key={scale}
            className="absolute aspect-square rounded-full border border-white/25"
            style={{ left: origin.split(" ")[0], top: origin.split(" ")[1], width: "58vmax", translate: "-50% -50%" }}
            initial={{ scale: 0.06, opacity: 0 }}
            animate={{ scale, opacity: 0.7 - index * 0.18 }}
            exit={{ scale: 1.22 + index * 0.18, opacity: 0 }}
            transition={{ ...timing, delay: reducedMotion ? 0 : index * 0.06 }}
          />
        ))}
        <motion.span
          className="absolute aspect-square rounded-full bg-[#152334]"
          style={{ left: origin.split(" ")[0], top: origin.split(" ")[1], width: "24vmax", translate: "-50% -50%" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.8, opacity: 0 }}
          transition={timing}
        />
      </>
    );
  }

  if (kind === "people") {
    return (
      <div className="absolute inset-0 grid grid-cols-4 gap-px bg-white/20">
        {[0, 1, 2, 3].map((index) => (
          <motion.span
            key={index}
            className={index % 2 ? "bg-[#101b2a]" : "bg-[#e55e35]"}
            initial={{ y: index % 2 ? "-105%" : "105%" }}
            animate={{ y: index % 2 ? "-105%" : "105%" }}
            exit={{ y: "0%" }}
            transition={{ ...timing, delay: reducedMotion ? 0 : index * 0.055 }}
          />
        ))}
      </div>
    );
  }

  if (kind === "story") {
    return (
      <>
        {["-15%", "22%", "59%"].map((left, index) => (
          <motion.span
            key={left}
            className={index === 1 ? "absolute -inset-y-10 w-[42%] -skew-x-12 bg-[#152334]" : "absolute -inset-y-10 w-[35%] -skew-x-12 bg-white/18"}
            style={{ left }}
            initial={{ x: "-120%" }}
            animate={{ x: "145%" }}
            exit={{ x: "0%" }}
            transition={{ ...timing, delay: reducedMotion ? 0 : index * 0.06 }}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {["#101b2a", "rgba(255,253,248,.86)", "#e55e35"].map((color, index) => (
        <motion.span
          key={color + index}
          className="absolute inset-y-0 w-[31%] -skew-x-12"
          style={{ left: `${index * 30 - 11}%`, background: color }}
          initial={{ x: "-135%" }}
          animate={{ x: "410%" }}
          exit={{ x: "0%" }}
          transition={{ ...timing, delay: reducedMotion ? 0 : index * 0.055 }}
        />
      ))}
    </>
  );
}

function RouteTransition({ children, pathname }) {
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0 : 0.54;
  const kineticDuration = reducedMotion ? 0 : 0.7;
  const profile = transitionProfile(pathname);
  const curtain = {
    initial: { clipPath: profile.cover },
    animate: {
      clipPath: profile.reveal,
      transition: { duration, delay: reducedMotion ? 0 : 0.08, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      clipPath: profile.cover,
      transition: { duration, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0.98 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.98 }}
      transition={{ duration: reducedMotion ? 0 : 0.18 }}
    >
      {children}
      <motion.div
        aria-hidden="true"
        variants={curtain}
        initial="initial"
        animate="animate"
        exit="exit"
        className="route-curtain pointer-events-none fixed inset-0 z-[100] overflow-hidden text-white"
        style={{ background: profile.background }}
      >
        <TransitionArtwork kind={profile.kind} reducedMotion={reducedMotion} duration={kineticDuration} />
        <div className="absolute inset-y-0 left-[18%] w-px bg-white/20" />
        <div className="absolute inset-y-0 left-[48%] w-px bg-white/10" />
        <div className="absolute inset-y-0 right-[16%] w-px bg-white/20" />
        <div className="absolute inset-0 overflow-hidden">
          {[
            ["16%", "22%", 0],
            ["68%", "17%", 0.04],
            ["76%", "72%", 0.08],
            ["31%", "79%", 0.12],
            ["55%", "49%", 0.16],
          ].map(([left, top, delay], index) => (
            <motion.i
              key={index}
              className="absolute block size-1 rounded-full bg-white/80"
              style={{ left, top }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.95, 0], scale: [0, 1.5, 0], x: [0, 34, 82] }}
              exit={{ opacity: [0, 0.9, 0], scale: [0, 1.6, 0], x: [-82, -34, 0] }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : delay, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 items-center justify-between gap-5 sm:inset-x-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reducedMotion ? 0 : 0.32, delay: reducedMotion ? 0 : 0.12 }}
            className="text-[10px] font-bold uppercase tracking-[0.28em] sm:text-xs"
          >
            NSS / NIT DURGAPUR
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 32, skewX: -8 }}
            animate={{ opacity: 1, y: 0, skewX: 0 }}
            exit={{ opacity: 0, y: -32, skewX: 8 }}
            transition={{ duration: reducedMotion ? 0 : 0.38, delay: reducedMotion ? 0 : 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="text-right text-3xl font-black uppercase tracking-[-0.06em] sm:text-5xl"
          >
            {routeLabel(pathname)}
          </motion.span>
        </div>
        <span className="absolute bottom-7 left-5 text-[9px] font-bold uppercase tracking-[0.24em] text-white/70 sm:bottom-10 sm:left-10">
          Not me, but you
        </span>
      </motion.div>
    </motion.div>
  );
}


function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
      <RouteTransition
        key={location.pathname}
        pathname={location.pathname}
      >
      <Routes location={location}>

        <Route
          path="/"
          element={
            <PageShell>
              <Home />
            </PageShell>
          }
        />


        <Route
          path="/events"
          element={
            <PageShell>
              <Events />
            </PageShell>
          }
        />


        <Route
          path="/events/:slug"
          element={
            <PageShell>
              <EventDetails />
            </PageShell>
          }
        />


        <Route
          path="/team"
          element={
            <PageShell>
              <Team />
            </PageShell>
          }
        />


        <Route
          path="/contact"
          element={
            <PageShell>
              <Contact />
            </PageShell>
          }
        />


        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
      </RouteTransition>
      </AnimatePresence>
    </>
  );
}


export default App;
