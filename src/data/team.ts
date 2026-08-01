import type { TeamMember } from '@/types/content';

export const team: TeamMember[] = [
  { id: 'programme-officer', name: 'Dr. Shri Krishan Rai', role: 'Programme Officer', department: 'NIT Durgapur', term: '2025-2026' },
  { id: 'arjun-mehta', name: 'Arjun Mehta', role: 'Student Coordinator', department: 'Computer Science & Engineering', term: '2025-2026' },
  { id: 'priya-sharma', name: 'Priya Sharma', role: 'Student Coordinator', department: 'Electronics & Communication Engineering', term: '2025-2026' },
  { id: 'rahul-verma', name: 'Rahul Verma', role: 'Volunteer Lead', department: 'Mechanical Engineering', term: '2025-2026' },
  { id: 'ananya-gupta', name: 'Ananya Gupta', role: 'Media Coordinator', department: 'Civil Engineering', term: '2025-2026' },
  { id: 'karthik-iyer', name: 'Karthik Iyer', role: 'Events Coordinator', department: 'Electrical Engineering', term: '2025-2026' },
];

export const teamSectionContent = { eyebrow: 'People', title: 'Our Team', description: 'The dedicated faculty and student coordinators who drive NSS activities at NIT Durgapur.' } as const;
