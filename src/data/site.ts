/**
 * Global, editor-managed site content.
 *
 * Keep navigation, contact details, and metadata-facing copy here so layout
 * components stay concerned only with presentation and interaction.
 */
export const siteConfig = {
  name: 'NSS NIT Durgapur',
  motto: 'Not Me, But You',
  description: 'The National Service Scheme unit at NIT Durgapur, fostering community service and youth development.',
  contact: {
    email: 'nss@nitdgp.ac.in',
    phone: '+91-343-2754587',
    address: 'NIT Durgapur, Durgapur, West Bengal 713209, India',
  },
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Initiatives', href: '/initiatives' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerLinks = navigation.slice(1);

export const relatedLinks = [
  { label: 'NIT Durgapur', href: 'https://nitdgp.ac.in' },
  { label: 'NSS (Govt. of India)', href: 'https://nss.gov.in' },
  { label: 'Ministry of Youth Affairs', href: 'https://nya.gov.in' },
] as const;
