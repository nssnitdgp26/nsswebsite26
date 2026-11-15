import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/component/experience-provider";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Stories", href: "/events" },
  { label: "People", href: "/team" },
  { label: "Connect", href: "/contact" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-slate-900/10 bg-[#f5f4ef]/88 shadow-[0_8px_30px_rgba(16,27,42,.06)] backdrop-blur-xl" : "bg-[#f5f4ef]/72 backdrop-blur-md"}`}>
      <div className="mx-auto flex h-[72px] max-w-[88rem] items-center justify-between px-4 sm:px-7 lg:px-10">
        <Magnetic strength={0.1}>
          <Link to="/" className="group flex items-center gap-3" aria-label="NSS NIT Durgapur home" data-cursor-label="HOME">
            <span className="grid size-10 place-items-center overflow-hidden rounded-full border border-slate-900/10 bg-white shadow-sm transition-transform duration-500 group-hover:rotate-[12deg]">
              <img src="/logo.png" alt="" className="size-8 object-contain" />
            </span>
            <span className="leading-none">
              <strong className="block text-sm font-extrabold tracking-[-.04em] text-slate-900">NSS NIT Durgapur</strong>
              <span className="mt-1 block text-[10px] font-semibold tracking-[.1em] text-slate-500">NOT ME, BUT YOU</span>
            </span>
          </Link>
        </Magnetic>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href);
            return <Link key={item.href} to={item.href} data-cursor-label={item.label} className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? "text-slate-950" : "text-slate-500 hover:text-slate-950"}`}>
              {item.label}
              {active && <motion.span layoutId="nav-current" className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-primary" />}
            </Link>;
          })}
          <Magnetic strength={0.12} className="ml-3">
            <Link to="/contact" data-cursor-label="JOIN" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-primary">
              Volunteer with us <ArrowUpRight className="size-3.5" />
            </Link>
          </Magnetic>
        </nav>

        <button type="button" onClick={() => setIsOpen((open) => !open)} className="grid size-11 place-items-center rounded-full border border-slate-900/10 bg-white text-slate-900 md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-slate-900/10 bg-[#f5f4ef] md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col px-4 py-4">
            {navItems.map((item) => <Link key={item.href} to={item.href} className="flex items-center justify-between border-b border-slate-900/10 py-4 text-xl font-bold tracking-tight text-slate-900"><span>{item.label}</span><ArrowUpRight className="size-5 text-primary" /></Link>)}
          </div>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
