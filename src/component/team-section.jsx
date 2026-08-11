import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  currentTeam,
  previousTeams,
  facultyAdvisor,
} from "@/data/team";

/* =========================================================
   Team Category Configuration
========================================================= */

const teamConfig = {
  management: {
    title: "Management Team",
    description:
      "",
  },

  technical: {
    title: "Technical Team",
    description:
      "",
  },

  executive: {
    title: "Executive Team",
    description:
      "",
  },
};

/* =========================================================
   Member Card
========================================================= */

function MemberCard({ member, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      className="
        group
        w-full
        max-w-[180px]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-slate-800
        text-center
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-xl
      "
    >
      {/* Photo Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-[1.03]
            "
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900 text-3xl font-bold text-white/80">
            {member.name
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
        )}
      </div>

      {/* Member Information */}
      <div className="flex min-h-[92px] flex-col justify-center px-3 py-4">
        <h4 className="break-words text-sm font-semibold leading-snug text-white sm:text-base">
          {member.name}
        </h4>

        {member.role && (
          <p className="mt-1.5 break-words text-sm font-medium text-primary-foreground/90">
            {member.role}
          </p>
        )}

        {member.department && (
          <p className="mt-2 break-words text-xs text-white/60">
            {member.department}
          </p>
        )}
      </div>
    </motion.article>
  );
}

/* =========================================================
   Team Category
========================================================= */

function TeamCategory({ type, members }) {
  const config = teamConfig[type];

  if (!config || !members?.length) {
    return null;
  }

  return (
    <section className="mb-16 last:mb-0">
      {/* Category Header */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          {config.title}
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {config.description}
        </p>
      </div>

      {/* Members */}

      {/*
        Fixed card widths prevent long names from changing
        the size of individual cards.

        Desktop:
        - 5 members -> centered in one row
        - 6 members -> centered in one row

        Smaller screens:
        - Cards wrap naturally while remaining centered.
      */}
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-wrap
          justify-center
          gap-4
          sm:gap-5
          lg:gap-6
        "
      >
        {members.map((member, index) => (
          <MemberCard
            key={`${member.name}-${member.role}-${index}`}
            member={member}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   Faculty Advisor
========================================================= */

function FacultyAdvisor() {
  return (
    <section className="border-b border-border bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[minmax(280px,420px)_1fr]
            lg:gap-16
          "
        >
          {/* Faculty Photo */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-md"
          >
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-slate-800
                p-2
                shadow-2xl
              "
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-950">
                {facultyAdvisor.photo ? (
                  <img
                    src={facultyAdvisor.photo}
                    alt={facultyAdvisor.name}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-5xl font-bold text-white/80">
                    {facultyAdvisor.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Faculty Message */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Faculty Coordinator
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {facultyAdvisor.name}
            </h2>

            {facultyAdvisor.designation && (
              <p className="mt-2 text-sm font-medium text-primary-foreground/80">
                {facultyAdvisor.designation}
              </p>
            )}

            <div className="mt-7 h-px w-16 bg-primary/60" />

            <p className="mt-7 text-lg font-medium leading-8 text-white/90 sm:text-xl">
              A pillar of NSS NIT Durgapur and a constant source of guidance,
              encouragement, and support for our volunteers.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              His continued dedication to the National Service Scheme has
              played an invaluable role in shaping the work, spirit, and
              community of NSS at NIT Durgapur. His guidance inspires students
              to serve with responsibility, compassion, and purpose.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Team Content
========================================================= */

function TeamContent({ team }) {
  if (!team) {
    return null;
  }

  return (
    <motion.div
      key={team.year}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Management */}
      <TeamCategory
        type="management"
        members={team.management}
      />

      {/* Technical */}
      <TeamCategory
        type="technical"
        members={team.technical}
      />

      {/* Executive */}
      <TeamCategory
        type="executive"
        members={team.executive}
      />
    </motion.div>
  );
}

/* =========================================================
   Main Team Section
========================================================= */

export function TeamSection() {
  /*
    previousTeams is ordered newest -> oldest.

    Example:

    previousTeams = [
      { year: "2026", ... },
      { year: "2025", ... },
      { year: "2024", ... },
    ];

    The newest previous batch is automatically selected.
  */

  const [selectedPreviousYear, setSelectedPreviousYear] = useState(
    previousTeams[0]?.year ?? ""
  );

  const selectedPreviousTeam =
    previousTeams.find(
      (team) => team.year === selectedPreviousYear
    ) ?? previousTeams[0];

  return (
    <>
      {/* =====================================================
          Faculty Advisor
      ====================================================== */}

      <FacultyAdvisor />

      {/* =====================================================
          Current Unit Leaders
      ====================================================== */}

      <section
        id="team"
        className="py-16 sm:py-24"
        aria-label="Current NSS unit leaders"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Unit Leaders
            </h2>
          </div>

          {/* Current Team */}
          <TeamContent team={currentTeam} />
        </div>
      </section>

      {/* =====================================================
          Previous Unit Leaders
      ====================================================== */}

      {previousTeams.length > 0 && (
        <section
          className="border-t bg-surface py-16 sm:py-24"
          aria-label="Previous NSS unit leaders"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-10 text-center">

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Previous Unit Leaders
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Explore the student leaders who served NSS in previous
                batches.
              </p>
            </div>

            {/* Previous Year Buttons */}
            <div
              className="mb-14 flex flex-wrap justify-center gap-2"
              role="tablist"
              aria-label="Select previous NSS batch"
            >
              {previousTeams.map((team) => {
                const isSelected =
                  selectedPreviousYear === team.year;

                return (
                  <button
                    key={team.year}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`previous-team-${team.year}`}
                    onClick={() =>
                      setSelectedPreviousYear(team.year)
                    }
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    {team.year}
                  </button>
                );
              })}
            </div>

            {/* Selected Previous Team */}
            {selectedPreviousTeam && (
              <div
                id={`previous-team-${selectedPreviousTeam.year}`}
              >
                <TeamContent team={selectedPreviousTeam} />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}