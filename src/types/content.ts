export type EventStatus = 'completed' | 'registration_open';

export interface InitiativeRecord {
  slug: string;
  title: string;
  purpose: string;
  period: string;
  context: string;
  activities: string;
  evidence: string;
}

export interface EventRecord {
  slug: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  venue: string;
  status: EventStatus;
  registrationLink?: string;
  outcome?: string;
  initiativeSlug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  term: string;
}

export interface ImpactMetric {
  label: string;
  value: string;
  reportingPeriod: string;
}

export interface GalleryImage {
  id: string;
  alt: string;
  caption: string;
  category: string;
}
