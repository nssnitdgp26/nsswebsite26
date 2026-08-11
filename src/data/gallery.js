export const galleryCategories = [
  { value: "all", label: "All" },
  { value: "plantation", label: "Plantation" },
  { value: "blood-donation", label: "Blood Donation" },
  { value: "swachh-bharat", label: "Swachh Bharat" },
  { value: "medical-camp", label: "Medical Camp" },
  { value: "education", label: "Education" },
  { value: "clothing", label: "Clothing Drive" },
  { value: "national-day", label: "National Days" },
];

const galleryDetails = [
  [
    "plantation",
    "Volunteers planting saplings during the monsoon plantation drive",
    "Monsoon Plantation Drive - NIT Durgapur Campus, July 2025",
  ],
  [
    "blood-donation",
    "Blood donation camp with donors and medical staff",
    "Blood Donation Camp - Student Activity Centre, February 2026",
  ],
  [
    "swachh-bharat",
    "Volunteers during a village cleanliness drive",
    "Swachh Bharat Drive - Bidhannagar Village, January 2026",
  ],
  [
    "medical-camp",
    "Doctor examining a patient during the annual medical camp",
    "Annual Medical Camp - Community Hall, March 2026",
  ],
  [
    "education",
    "NSS volunteers tutoring schoolchildren",
    "Education Support Session - Village Learning Centre, October 2025",
  ],
  [
    "national-day",
    "Republic Day flag hoisting ceremony",
    "Republic Day Celebration - NIT Durgapur, January 2026",
  ],
  [
    "clothing",
    "Volunteers distributing warm clothing to community members",
    "Winter Clothing Distribution - Durgapur Community, December 2025",
  ],
  [
    "plantation",
    "World Environment Day sustainability exhibition",
    "World Environment Day Exhibition - NIT Durgapur, June 2026",
  ],
];

export const gallery = galleryDetails.map(
  ([category, alt, caption], index) => ({
    id: `gallery-${index + 1}`,
    category,
    alt,
    caption,
  })
);

export const gallerySectionContent = {
  eyebrow: "Moments",
  title: "Gallery",
  description:
    "Visual stories from our activities and events.",
};
