import type { Site, Socials } from './types';

export const SITE: Site = {
  COMPANY_NAME: 'ContractorPro US',
  LEGAL_NAME: 'ContractorPro US, Inc.',
  TITLE: 'Connect With Construction Projects Looking for Subcontractors',
  DESCRIPTION: 'Get early access to residential and commercial construction opportunities from builders seeking reliable roofing, electrical, HVAC, concrete, drywall, framing, painting, carpentry, flooring, and more.',
  CANONICAL_URL: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://contractorspro.us',
  LOCALE: 'en',
  TELEPHONE: '(800) 555-0199',
  EMAIL: 'contact@contractorspro.us',
  ADDRESS: 'United States',

  OG_IMAGE: '/og-image.webp',

  TWITTER: {
    CREATOR: '@contractorpro_us',
    CARD: 'summary_large_image',
  },
};

export const SOCIALS: Socials = [
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    LABEL: `${SITE.COMPANY_NAME} on LinkedIn`,
    HREF: 'https://www.linkedin.com/company/contractorpro-us',
  },
  {
    NAME: 'Twitter',
    ICON: 'twitter',
    LABEL: `${SITE.COMPANY_NAME} on X (Twitter)`,
    HREF: 'https://twitter.com/contractorpro_us',
  },
  {
    NAME: 'Facebook',
    ICON: 'facebook',
    LABEL: `${SITE.COMPANY_NAME} on Facebook`,
    HREF: 'https://www.facebook.com/contractorprous',
  },
  {
    NAME: 'Instagram',
    ICON: 'instagram',
    LABEL: `${SITE.COMPANY_NAME} on Instagram`,
    HREF: 'https://www.instagram.com/contractorpro.us',
  },
];

