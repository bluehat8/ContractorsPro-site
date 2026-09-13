export interface SanityProject {
  _id?: string;
  id: number | string;
  title: string;
  location: string;
  scope: string;
  category?: string;
  challengeTitle?: string;
  challengeText?: string;
  resultTitle?: string;
  resultText?: string;
  beforeImage?: any;
  afterImage?: any;
  beforeImageAlt?: string;
  afterImageAlt?: string;
}

export interface SanityTestimonial {
  _id?: string;
  id: number | string;
  type: 'image' | 'video';
  client: {
    name: string;
    location: string;
    image?: any;
  };
  content?: string;
  video?: {
    src: string;
    poster?: string;
  };
}

export interface SanityFAQItem {
  _id?: string;
  id: number | string;
  question: string;
  answer: string;
  order?: number;
}

export interface SanityHowItWorksStep {
  _id?: string;
  id: number | string;
  stepNumber?: number;
  title: string;
  description: string;
  image?: any;
  imageAlt?: string;
  order?: number;
}

export interface SanityWhyJoinItem {
  _key?: string;
  title: string;
  text: string;
}

export interface SanityWhyJoin {
  _id?: string;
  tag?: string;
  title?: string;
  image?: any;
  imageUrl?: string;
  imageAlt?: string;
  items?: SanityWhyJoinItem[];
  hideSection?: boolean;
}

export interface SanitySiteSettings {
  siteTitle?: string;
  siteDescription?: string;
  heroTag?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroNotice?: string;
  heroCtaText?: string;
  heroCtaUrl?: string;
  heroSecondaryCtaText?: string;
  heroSecondaryCtaUrl?: string;
  heroVideoUrl?: string;
  heroVideoFile?: any;
  heroVideoFileUrl?: string;
  heroVideoPoster?: any;
  howItWorksTag?: string;
  howItWorksTitle?: string;
  appLoginUrl?: string;
  contactSectionTag?: string;
  contactSectionTitle?: string;
  contactSectionSubtitle?: string;
  contactEmail?: string;
  contactPhone?: string;
  hideContactForm?: boolean;
  hideContactSection?: boolean;
  googleScriptUrl?: string;
}



