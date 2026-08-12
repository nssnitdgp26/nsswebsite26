import React from "react";
import { motion } from "framer-motion";

import {
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUpRight,
  Send,
  ExternalLink,
} from "lucide-react";

import { siteConfig } from "@/data/site";

/* =========================================================
   Floating Contact Icon
========================================================= */

function FloatingIcon({
  children,
  className = "",
  delay = 0,
  duration = 5,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [0, 4, 0, -4, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   Contact Hero
========================================================= */

function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950">
      {/* Animated Grid */}

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Moving Glow */}

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 100, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-primary/20 blur-[140px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]"
      />

      {/* Moving Horizontal Light */}

      <motion.div
        aria-hidden="true"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[25%] h-px w-[45%] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] h-px w-[35%] bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-20">
          {/* =================================================
              Hero Content
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-white " />

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary text-white">
                NSS NIT Durgapur
              </p>
            </motion.div>

            <h1 className="text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Every connection
              <br />
              starts with a{" "}
              <span className="relative inline-block text-[#BFD7EA]">
                hello.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                  }}
                  className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-[#BFD7EA]"
                />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              Have a question, an idea, or a collaboration in mind? Reach out
              to NSS NIT Durgapur and connect with us through our official
              channels.
            </p>

            {/* Animated Tags */}

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Questions",
                "Collaborations",
                "Enquiries",
                "Ideas",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              Animated Light Connection Panel
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            {/* Floating Icons */}

            <FloatingIcon
              className="-left-3 top-12 sm:-left-7"
              delay={0}
              duration={5}
            >
              <Mail className="h-5 w-5 text-primary" />
            </FloatingIcon>

            <FloatingIcon
              className="-right-2 top-8 sm:-right-6"
              delay={1}
              duration={6}
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </FloatingIcon>

            <FloatingIcon
              className="-bottom-5 left-10"
              delay={0.5}
              duration={5.5}
            >
              <Instagram className="h-5 w-5 text-primary" />
            </FloatingIcon>

            {/* Light Main Card */}

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-50 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-10">
              {/* Moving Accent Line */}

              <motion.div
                animate={{
                  x: ["-100%", "220%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 h-1 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              />

              {/* Background Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
              />

              <div className="relative">
                {/* Animated Icon */}

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Let's Connect
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Your message has somewhere to go.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Reach out, share an idea, ask a question, or explore a
                  collaboration with NSS NIT Durgapur.
                </p>

                {/* Animated Status */}

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                    </span>

                    <p className="text-sm font-semibold text-slate-700">
                      We're always open to connect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Contact Card
========================================================= */

function ContactCard({
  icon,
  title,
  description,
  action,
  href,
  index,
  external = false,
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>

      <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <span className="max-w-[190px] truncate">{action}</span>

        {external ? (
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        ) : (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        )}
      </div>
    </motion.a>
  );
}

/* =========================================================
   Main Contact Page
========================================================= */

export default function Contact() {
  const contactOptions = [
    {
      title: "Email Us",
      description:
        "For questions, enquiries, event-related communication, and general information.",
      action: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      icon: <Mail className="h-5 w-5" />,
      external: false,
    },
    {
      title: "LinkedIn",
      description:
        "Connect with NSS NIT Durgapur and stay updated through our professional network.",
      action: "Connect on LinkedIn",
      href: siteConfig.social.linkedin,
      icon: <Linkedin className="h-5 w-5" />,
      external: true,
    },
    {
      title: "Instagram",
      description:
        "Follow our initiatives, events, volunteers, and moments from NSS activities.",
      action: "Follow on Instagram",
      href: siteConfig.social.instagram,
      icon: <Instagram className="h-5 w-5" />,
      external: true,
    },
    {
      title: "Facebook",
      description:
        "Stay connected with our activities, announcements, and community initiatives.",
      action: "Follow on Facebook",
      href: siteConfig.social.facebook,
      icon: <Facebook className="h-5 w-5" />,
      external: true,
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* Animated Hero */}

      <ContactHero />

      {/* =================================================
          Contact Channels
      ================================================= */}

      <section className="relative border-b border-slate-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Contact Channels
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find us wherever you connect.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Choose the channel that works best for you.
            </p>
          </motion.div>

          {/* 4 cards in the same row on large screens */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((option, index) => (
              <ContactCard
                key={option.title}
                {...option}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          Visit Us Section
      ================================================= */}

      <section className="relative isolate overflow-hidden bg-[#151d30] py-20 sm:py-24 lg:py-28">

        {/* Background Grid */}

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />


        {/* Large Animated Glow */}

        <motion.div
          aria-hidden="true"
          animate={{
            x: [-100, 120, -100],
            y: [-30, 40, -30],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [100, -80, 100],
            y: [40, -40, 40],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-[-200px] h-[550px] w-[550px] rounded-full bg-blue-400/10 blur-[170px]"
        />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">


            {/* =============================================
                LEFT CONTENT
            ============================================= */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="relative z-10"
            >

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-white/50" />

                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                  Visit Us
                </p>
              </div>


              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find us at the
                <br />

                <span className="text-[#BFD7EA]">
                  heart of campus.
                </span>
              </h2>


              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Drop by the NSS Cabin at NIT Durgapur. Whether you want to know
                more about our initiatives, get involved, or simply connect with
                the team, you are always welcome.
              </p>


              <div className="mt-10 flex flex-wrap items-center gap-5">

                <motion.a
                  href={siteConfig.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-shadow hover:shadow-2xl"
                >
                  Open in Maps

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </motion.a>


                <div className="flex items-center gap-3 text-sm text-white/55">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BFD7EA] opacity-60" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#BFD7EA]" />
                  </span>

                  NIT Durgapur Campus
                </div>

              </div>

            </motion.div>


            {/* =============================================
                LIVE LOCATION VISUAL
            ============================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="relative mx-auto w-full max-w-[650px]"
            >


              {/* Main Visual Area */}

              <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">


                {/* Inner Grid */}

                <div
                  className="absolute inset-0 opacity-[0.3]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />


                {/* Animated Route Lines */}

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 650 430"
                  fill="none"
                  preserveAspectRatio="none"
                >

                  {/* Left route */}

                  <path
                    d="M 20 320 C 140 320, 150 180, 320 215"
                    stroke="rgba(191,215,234,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="8 8"
                  />

                  {/* Top route */}

                  <path
                    d="M 280 20 C 280 100, 390 100, 335 210"
                    stroke="rgba(191,215,234,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="8 8"
                  />

                  {/* Right route */}

                  <path
                    d="M 630 110 C 500 110, 510 240, 340 220"
                    stroke="rgba(191,215,234,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="8 8"
                  />

                  {/* Bottom route */}

                  <path
                    d="M 520 410 C 450 330, 430 280, 340 225"
                    stroke="rgba(191,215,234,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="8 8"
                  />

                </svg>


                {/* Moving Signal 1 */}

                <motion.div
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath:
                      "path('M 20 320 C 140 320, 150 180, 320 215')",
                  }}
                  className="absolute left-0 top-0 h-3 w-3 rounded-full bg-[#BFD7EA] shadow-[0_0_18px_rgba(191,215,234,0.9)]"
                />


                {/* Moving Signal 2 */}

                <motion.div
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 6,
                    delay: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath:
                      "path('M 630 110 C 500 110, 510 240, 340 220')",
                  }}
                  className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />


                {/* Moving Signal 3 */}

                <motion.div
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 7,
                    delay: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath:
                      "path('M 520 410 C 450 330, 430 280, 340 225')",
                  }}
                  className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(59,130,246,0.8)]"
                />


                {/* Small Location Nodes */}

                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[8%] top-[72%]"
                >
                  <div className="h-3 w-3 rounded-full border border-[#BFD7EA]/50 bg-[#BFD7EA]/20" />
                </motion.div>


                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[7%] top-[23%]"
                >
                  <div className="h-3 w-3 rounded-full border border-[#BFD7EA]/50 bg-[#BFD7EA]/20" />
                </motion.div>


                <motion.div
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 3.5,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[18%] bottom-[9%]"
                >
                  <div className="h-2.5 w-2.5 rounded-full border border-white/50 bg-white/20" />
                </motion.div>


                {/* =========================================
                    CENTRAL NSS LOCATION
                ========================================= */}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">


                  {/* Expanding Location Rings */}

                  <motion.span
                    animate={{
                      scale: [0.8, 2.2],
                      opacity: [0.45, 0],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#BFD7EA]/40"
                  />

                  <motion.span
                    animate={{
                      scale: [0.8, 2.2],
                      opacity: [0.35, 0],
                    }}
                    transition={{
                      duration: 2.8,
                      delay: 1.4,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40"
                  />


                  {/* Pin */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[1.8rem] border border-white/15 bg-[#243655] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  >
                    <MapPin className="h-10 w-10 text-[#D7E6F2]" />
                  </motion.div>

                </div>


                {/* NSS Cabin Label */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-md sm:left-8 sm:right-auto sm:w-[310px]"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-[#BFD7EA]">
                      <MapPin className="h-5 w-5" />
                    </div>


                    <div>
                      <p className="text-sm font-semibold text-white">
                        NSS Cabin, Main Academic Buiding
                      </p>

                      <p className="mt-0.5 text-xs text-white/50">
                        NIT Durgapur
                      </p>
                    </div>

                  </div>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =================================================
          Institutional Affiliation
      ================================================= */}

      <section className="border-t border-slate-200 bg-slate-100/70 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Institutional Affiliation
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                National Service Scheme
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                National Service Scheme, NIT Durgapur, under the Ministry of
                Youth Affairs & Sports, Government of India.
              </p>
            </div>

            <a
              href="https://nitdgp.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
            >
              Visit NIT Durgapur
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}