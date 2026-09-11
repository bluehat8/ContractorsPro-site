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

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteTitle,
  siteDescription,
  heroTag,
  heroTitle,
  heroSubtitle,
  heroNotice,
  heroVideoUrl,
  "heroVideoFileUrl": heroVideoFile.asset->url,
  heroVideoPoster,
  contactEmail,
  contactPhone
}`;

