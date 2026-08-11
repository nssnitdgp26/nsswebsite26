/**
 * Global site configuration and navigation content.
 */

export const siteConfig = {
  name: "NSS NIT Durgapur",
  motto: "Not Me, But You",
  description:
    "The National Service Scheme unit at NIT Durgapur, fostering community service and youth development.",

  contact: {
    email: "nss@nitdgp.ac.in",
    phone: "",
    address: "NSS Cabin, MAB, NIT Durgapur, Durgapur, West Bengal, India - 713209",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = navigation.slice(0);

export const relatedLinks = [
  {
    label: "NIT Durgapur",
    href: "https://nitdgp.ac.in",
  },
  {
    label: "NSS (Government of India)",
    href: "https://nss.gov.in",
  },
  {
    label: "Ministry of Youth Affairs & Sports",
    href: "https://yas.nic.in",
  },
];
