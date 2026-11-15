import React, { useEffect, useRef } from "react";

export function AmbientField({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const context = canvas.getContext("2d", { alpha: true });
    const particles = Array.from({ length: 38 }, (_, index) => ({
      x: Math.random(), y: Math.random(), r: 0.6 + Math.random() * 1.9,
      speed: 0.000045 + Math.random() * 0.00013, phase: index * 0.73,
    }));
    let width = 0, height = 0, animation;
    const resize = () => {
      const box = canvas.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      width = box.width; height = box.height;
      canvas.width = width * scale; canvas.height = height * scale;
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };
    const render = (time) => {
      context.clearRect(0, 0, width, height);
      particles.forEach((dot) => {
        const y = ((dot.y + time * dot.speed) % 1) * height;
        const x = dot.x * width + Math.sin(time * 0.00032 + dot.phase) * 22;
        context.beginPath();
        context.arc(x, y, dot.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 188, 83, ${0.13 + Math.sin(time * 0.001 + dot.phase) * 0.07})`;
        context.fill();
      });
      animation = requestAnimationFrame(render);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    animation = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(animation); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`ambient-field ${className}`} />;
}
