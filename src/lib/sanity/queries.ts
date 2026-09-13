export const projectsQuery = `*[_type == "project"] | order(order asc, _createdAt asc) {
  _id,
  "id": _id,
  title,
  location,
  scope,
  category,
  challengeTitle,
  challengeText,
  resultTitle,
  resultText,
  beforeImage,
  afterImage,
  beforeImageAlt,
  afterImageAlt
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc, _createdAt asc) {
  _id,
  "id": _id,
  type,
  client {
    name,
    location,
    image
  },
  content,
  video {
    src,
    poster
  }
}`;

export const faqQuery = `*[_type == "faqItem"] | order(order asc, _createdAt asc) {
  _id,
  "id": _id,
  question,
  answer,
  order
}`;

export const howItWorksQuery = `*[_type == "howItWorksStep"] | order(order asc, stepNumber asc, _createdAt asc) {
  _id,
  "id": _id,
  stepNumber,
  title,
  description,
  image,
  imageAlt,
  order
}`;

export const whyJoinQuery = `*[_type == "whyJoin"][0] {
  _id,
  tag,
  title,
  image,
  "imageUrl": image.asset->url,
  imageAlt,
  hideSection,
  items[] {
    _key,
    title,
    text
  }
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteTitle,
  siteDescription,
  heroTag,
  heroTitle,
  heroSubtitle,
  heroNotice,
  heroCtaText,
  heroCtaUrl,
  heroSecondaryCtaText,
  heroSecondaryCtaUrl,
  heroVideoUrl,
  "heroVideoFileUrl": heroVideoFile.asset->url,
  heroVideoPoster,
  howItWorksTag,
  howItWorksTitle,
  appLoginUrl,
  contactSectionTag,
  contactSectionTitle,
  contactSectionSubtitle,
  contactEmail,
  contactPhone,
  hideContactForm,
  hideHeaderCta,
  hideContactSection,
  googleScriptUrl
}`;



