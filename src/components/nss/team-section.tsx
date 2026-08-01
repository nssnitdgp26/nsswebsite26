'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { team, teamSectionContent } from '@/data/team';
import type { TeamMember } from '@/types/content';

const roleColors: Record<string, string> = { 'Programme Officer': 'bg-primary text-primary-foreground', 'Student Coordinator': 'bg-brand-service/10 text-brand-service', 'Volunteer Lead': 'bg-brand-nature/10 text-brand-nature', 'Media Coordinator': 'bg-purple-50 text-purple-600', 'Events Coordinator': 'bg-amber-50 text-amber-600' };
const avatarGradients = ['from-primary/80 to-blue-700/80', 'from-brand-service/80 to-orange-700/80', 'from-brand-nature/80 to-green-700/80', 'from-purple-500/80 to-purple-700/80', 'from-amber-500/80 to-amber-700/80', 'from-teal-500/80 to-teal-700/80'];

function MemberCard({ member, index, inView }: { member: TeamMember; index: number; inView: boolean }) {
  const initials = member.name.split(' ').map((name) => name[0]).join('').slice(0, 2).toUpperCase();
  return <motion.article initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.08 }} className="flex flex-col items-center rounded-2xl border bg-card p-6 text-center hover:shadow-medium">
    <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} text-2xl font-bold text-white`}>{initials}</div>
    <h3 className="text-lg font-semibold">{member.name}</h3><span className={`mt-1.5 rounded-full px-3 py-0.5 text-xs font-semibold ${roleColors[member.role] ?? 'bg-muted text-muted-foreground'}`}>{member.role}</span><p className="mt-2 text-sm text-muted-foreground">{member.department}</p><p className="text-xs text-muted-foreground/70">{member.term}</p>
  </motion.article>;
}

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null); const inView = useInView(ref, { once: true, margin: '-80px' });
  return <section id="team" className="py-16 sm:py-24" aria-label="Our team"><div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 text-center"><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-service">{teamSectionContent.eyebrow}</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{teamSectionContent.title}</h2><p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{teamSectionContent.description}</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{team.map((member, index) => <MemberCard key={member.id} member={member} index={index} inView={inView} />)}</div></div></section>;
}
