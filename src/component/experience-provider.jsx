import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

const canUseFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export function ExperienceProvider({ children }) {
  const location = useLocation();
  const frame = useRef();
  const lenisRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return undefined;

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.78,
      touchMultiplier: 1.25,
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      frame.current = requestAnimationFrame(raf);
    };
    frame.current = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Lenis keeps its own scroll state, so reset both it and the browser when
    // a route changes. This makes each new page begin at its actual top.
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    children
  );
}

export function Magnetic({ children, className = "", strength = 0.18 }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handlePointerMove(event) {
    if (!canUseFinePointer() || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    setOffset({
      x: (event.clientX - bounds.left - bounds.width / 2) * strength,
      y: (event.clientY - bounds.top - bounds.height / 2) * strength,
    });
  }

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </span>
  );
}
