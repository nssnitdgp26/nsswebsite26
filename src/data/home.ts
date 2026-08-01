export const homeContent = {
  hero: {
    eyebrow: 'National Service Scheme',
    title: 'Not Me, But You',
    description: 'The official NSS unit of NIT Durgapur - building community through service, one initiative at a time. Discover our work, join our mission, and make a difference.',
    primaryAction: { label: 'Express Interest', href: '/join' },
    secondaryAction: { label: 'Explore Our Work', href: '/initiatives' },
    highlights: ['Community-first', 'Student-led impact'],
  },
  impact: { title: 'Our Impact', description: 'Verified figures from the NSS unit at NIT Durgapur' },
  join: {
    eyebrow: 'Express your interest',
    title: 'Join NSS NIT Durgapur',
    description: 'To volunteer, email the NSS unit with your name, department, year of study, and a short note about how you would like to contribute. Official programme enrolment follows the institute induction process.',
    action: 'Email the NSS unit',
  },
} as const;
