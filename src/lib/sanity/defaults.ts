import before1Image from '../../assets/images/before1.png';
import after1Image from '../../assets/images/after1.png';
import before2Image from '../../assets/images/before2.png';
import after2Image from '../../assets/images/after2.png';
import sarahJohnsonImage from '../../assets/images/sarah-johnson.jpg';
import emmaImage from '../../assets/images/emma.jpg';
import consultationImage from '../../assets/images/consultation.jpg';
import designImage from '../../assets/images/design.jpg';
import transformImage from '../../assets/images/transform.jpg';
import twoWomenSittingImage from '../../assets/images/two-women-sitting.png';
import type { SanityProject, SanityTestimonial, SanityFAQItem, SanityHowItWorksStep, SanitySiteSettings, SanityWhyJoin } from './types';


export const defaultProjects: SanityProject[] = [
  {
    id: 1,
    title: 'Residential Builder Seeking Roofing Contractor',
    location: 'Austin, TX',
    scope: 'Architectural shingles, flashing & underlayment',
    challengeTitle: 'Active Project Listings',
    challengeText:
      'Browse residential and commercial projects submitted by verified builders looking for qualified trades. Review location, trade needs, scope of work, and expected timelines before you apply.',
    resultTitle: 'Residential Builder Seeking Roofing Contractor',
    resultText:
      'Austin, TX • Scope: Architectural shingles, flashing & underlayment. Direct applications connecting project managers to licensed subcontracting crews with zero bidding fees.',
    beforeImage: before1Image,
    afterImage: after1Image,
    beforeImageAlt: 'Active residential construction site seeking qualified trade contractors.',
    afterImageAlt: 'Completed architectural build coordinated through verified subcontractors.',
  },
  {
    id: 2,
    title: 'Commercial Builder Seeking Electrical Contractor',
    location: 'Dallas, TX',
    scope: '15,000 sq ft commercial office rough-in, 800A service, and lighting',
    challengeTitle: 'Direct Applications & Relevant Opportunities',
    challengeText:
      'Submit your interest directly when an opportunity fits your crews. Focus on projects aligned with your trade, capacity, and service area without paying for low-quality lead lists.',
    resultTitle: 'Commercial Builder Seeking Electrical Contractor',
    resultText:
      'Dallas, TX • Scope: 15,000 sq ft commercial office rough-in, 800A service, and lighting. Builders review applicants and contact qualified subcontractors directly.',
    beforeImage: before2Image,
    afterImage: after2Image,
    beforeImageAlt: 'Commercial construction interior before electrical rough-in.',
    afterImageAlt: 'Finished modern commercial space with installed electrical systems.',
  },
];

export const defaultTestimonials: SanityTestimonial[] = [
  {
    id: 1,
    type: 'image',
    client: {
      name: 'David Miller',
      location: 'Austin, Texas • Custom Home Builder',
      image: sarahJohnsonImage,
    },
    content:
      'Finding reliable, licensed subcontractors used to take weeks of cold calling. With ContractorPro, we reviewed active local trades, matched with a fantastic framing crew, and stayed on schedule.',
  },
  {
    id: 2,
    type: 'image',
    client: {
      name: 'Carlos Ramirez',
      location: 'Dallas, Texas • Commercial Electrical Contractor',
      image: emmaImage,
    },
    content:
      'Instead of paying upfront for recycled leads where ten competitors bid against each other, ContractorPro connects us directly to builders with real projects ready to award.',
  },
  {
    id: 3,
    type: 'video',
    client: {
      name: 'Marcus Vance',
      location: 'Houston, Texas • Commercial General Contractor',
    },
    video: {
      src: 'https://res.cloudinary.com/dellp9a4z/video/upload/v1774625626/charlotte_iy65kg.webm',
      poster: 'testimonial-video-placeholder.webp',
    },
  },
];

export const defaultFAQItems: SanityFAQItem[] = [
  {
    id: 1,
    question: 'Is ContractorPro really free for founding subcontractors?',
    answer:
      'Yes! During our beta launch, founding subcontractors get 100% free access to the platform. There are zero subscription fees, zero bidding platform fees, and no commissions taken from your project earnings.',
    order: 1,
  },
  {
    id: 2,
    question: 'What types of construction projects are posted?',
    answer:
      'Our network features both residential and commercial opportunities submitted by verified builders — including single-family home developments, multi-family construction, tenant improvements, and commercial build-outs.',
    order: 2,
  },
  {
    id: 3,
    question: 'How do builders contact my company after I apply?',
    answer:
      'When you express interest in an active project, the builder reviews your company credentials, trade specializations, and service area. If you are a match, they reach out directly via phone or email to discuss details and contracts.',
    order: 3,
  },
  {
    id: 4,
    question: 'What trades and specialties can join the beta?',
    answer:
      'We welcome all qualified construction trades: roofing, electrical, HVAC, concrete, drywall, framing, painting, plumbing, remodeling, carpentry, flooring, tile, and more.',
    order: 4,
  },
  {
    id: 5,
    question: 'What qualifications are required to join?',
    answer:
      'We prioritize licensed and insured trade contractors (General Liability Insurance and active trade licenses where mandated by state and local regulations) with reliable crews.',
    order: 5,
  },
  {
    id: 6,
    question: 'How does ContractorPro compare to traditional lead services?',
    answer:
      'Traditional lead services charge expensive fees for recycled leads that are sold to dozens of competitors at once. ContractorPro connects you directly to builders who have real, scheduled projects looking for reliable subcontracting crews.',
    order: 6,
  },
];

export const defaultHowItWorksSteps: SanityHowItWorksStep[] = [
  {
    id: 1,
    stepNumber: 1,
    title: '1. Join the Network',
    description:
      'Tell us what trades you cover and where your crews can work. Founding subcontractors receive early access to residential and commercial construction opportunities.',
    image: consultationImage,
    imageAlt: 'Subcontractor registering specialties in ContractorPro',
    order: 1,
  },
  {
    id: 2,
    stepNumber: 2,
    title: '2. Browse & Review Projects',
    description:
      'Review residential and commercial construction opportunities that match your expertise. Check the trade needs, scope of work, budget indications, and expected timelines before you apply.',
    image: designImage,
    imageAlt: 'Reviewing active construction project details and blueprints',
    order: 2,
  },
  {
    id: 3,
    stepNumber: 3,
    title: '3. Connect with Builders Directly',
    description:
      'Submit your interest directly when an opportunity fits your business. Builders and homeowners review qualified subcontractors and reach out to discuss bids and contracts.',
    image: transformImage,
    imageAlt: 'Subcontractor and general contractor working on site',
    order: 3,
  },
];

export const defaultWhyJoin: SanityWhyJoin = {
  tag: 'WHY CONTRACTORS JOIN',
  title: 'Finding consistent, quality projects is still one of the hardest parts.',
  image: twoWomenSittingImage,
  imageAlt: 'Contractors discussing construction project blueprint.',
  hideSection: false,
  items: [
    {
      title: 'Our goal is simple:',
      text: 'Help subcontractors find new construction opportunities faster. Spend less time searching for leads and more time pursuing projects that fit your crews.',
    },
    {
      title: 'Direct builder demand you can act on',
      text: 'Most contractors depend on word-of-mouth referrals, cold outreach, existing relationships, or expensive lead generation. ContractorPro connects you directly with builders and project owners seeking reliable roofing, electrical, HVAC, concrete, drywall, framing, painting, plumbing, carpentry, flooring, and more.',
    },
  ],
};

export const defaultSiteSettings: SanitySiteSettings = {
  siteTitle: 'ContractorPro US',
  siteDescription: 'Connecting construction projects with qualified subcontractors.',
  heroTag: 'SUBCONTRACTOR PROJECT ACCESS',
  heroTitle: 'Connect With Construction Projects Looking for Subcontractors.',
  heroSubtitle:
    'Get early access to residential and commercial construction opportunities from builders seeking reliable roofing, electrical, HVAC, concrete, drywall, framing, painting, carpentry, flooring, and more.',
  heroNotice: 'Founding contractors get free access while we launch the beta.',
  heroCtaText: 'GET EARLY ACCESS',
  heroCtaUrl: '#contact',
  heroSecondaryCtaText: 'How It Works?',
  heroSecondaryCtaUrl: '#how-it-works',
  heroVideoUrl: 'https://res.cloudinary.com/dellp9a4z/video/upload/f_mp4,q_auto,w_1080/v1774623099/ik-video_esc1gl.mp4',
  heroVideoPoster: 'hero-video-poster.webp',
  howItWorksTag: 'HOW IT WORKS',
  howItWorksTitle: 'A simple path from joining the network to connecting with builders.',
  appLoginUrl: 'https://app.contractorspro.us/',
  contactSectionTag: 'FOUNDING ACCESS',
  contactSectionTitle: 'Become a Founding Contractor.',
  contactSectionSubtitle: "We're onboarding a limited group of subcontractors before public launch. Tell us about your services, crew capacity, and the compliance details builders typically need.",
  contactEmail: 'contact@contractorspro.us',
  contactPhone: '(888) 555-0199',
  hideContactForm: false,
  hideContactSection: false,
  googleScriptUrl: '',
};


