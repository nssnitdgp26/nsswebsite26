export const contactContent = {
  eyebrow: 'Reach Out',
  title: 'Contact Us',
  description: 'Have questions about NSS or want to collaborate? Get in touch through the channels below.',
  cards: [
    { key: 'address', title: 'Address', lines: ['NIT Durgapur', 'Durgapur, West Bengal', '713209, India'] },
    { key: 'email', title: 'Email', value: 'nss@nitdgp.ac.in', href: 'mailto:nss@nitdgp.ac.in', note: 'For general enquiries and collaborations' },
    { key: 'phone', title: 'Phone', value: '+91-343-2754587', note: 'Institute main line; ask for NSS Unit' },
    { key: 'hours', title: 'Office Hours', lines: ['Monday - Friday', '10:00 AM - 5:00 PM IST', '(Academic session)'] },
  ],
  map: { label: 'NIT Durgapur, Durgapur, West Bengal 713209', href: 'https://maps.google.com/?q=NIT+Durgapur', action: 'Open in Google Maps' },
} as const;
