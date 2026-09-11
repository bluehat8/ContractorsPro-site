import { sanityClient, isSanityConfigured, urlForImage } from './client';
import { projectsQuery, testimonialsQuery, faqQuery, siteSettingsQuery, howItWorksQuery } from './queries';
import { defaultProjects, defaultTestimonials, defaultFAQItems, defaultSiteSettings, defaultHowItWorksSteps } from './defaults';
import type { SanityProject, SanityTestimonial, SanityFAQItem, SanitySiteSettings, SanityHowItWorksStep } from './types';


export async function getProjects(): Promise<SanityProject[]> {
  if (!isSanityConfigured || !sanityClient) {
    return defaultProjects;
  }

  try {
    const data = await sanityClient.fetch<SanityProject[]>(projectsQuery);
    if (data && data.length > 0) {
      return data.map((project, index) => {
        const fallback = defaultProjects[index] || defaultProjects[0];
        const beforeImg = project.beforeImage ? urlForImage(project.beforeImage)?.url() : null;
        const afterImg = project.afterImage ? urlForImage(project.afterImage)?.url() : null;

        return {
          ...project,
          beforeImage: beforeImg || fallback?.beforeImage,
          afterImage: afterImg || fallback?.afterImage,
        };
      });
    }
    return defaultProjects;
  } catch (err) {
    console.warn('[Sanity] Error fetching projects, using local fallback:', err);
    return defaultProjects;
  }
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  if (!isSanityConfigured || !sanityClient) {
    return defaultTestimonials;
  }

  try {
    const data = await sanityClient.fetch<SanityTestimonial[]>(testimonialsQuery);
    if (data && data.length > 0) {
      return data.map((testimonial, index) => {
        const fallback = defaultTestimonials[index] || defaultTestimonials[0];
        const clientImg = testimonial.client?.image ? urlForImage(testimonial.client.image)?.url() : null;

        return {
          ...testimonial,
          client: {
            ...testimonial.client,
            image: clientImg || fallback?.client?.image,
          },
        };
      });
    }
    return defaultTestimonials;
  } catch (err) {
    console.warn('[Sanity] Error fetching testimonials, using local fallback:', err);
    return defaultTestimonials;
  }
}

export async function getFAQ(): Promise<SanityFAQItem[]> {
  if (!isSanityConfigured || !sanityClient) {
    return defaultFAQItems;
  }

  try {
    const data = await sanityClient.fetch<SanityFAQItem[]>(faqQuery);
    if (data && data.length > 0) {
      return data;
    }
    return defaultFAQItems;
  } catch (err) {
    console.warn('[Sanity] Error fetching FAQ, using local fallback:', err);
    return defaultFAQItems;
  }
}

export async function getHowItWorksSteps(): Promise<SanityHowItWorksStep[]> {
  if (!isSanityConfigured || !sanityClient) {
    return defaultHowItWorksSteps;
  }

  try {
    const data = await sanityClient.fetch<SanityHowItWorksStep[]>(howItWorksQuery);
    if (data && data.length > 0) {
      return data.map((step, index) => {
        const fallback = defaultHowItWorksSteps[index] || defaultHowItWorksSteps[0];
        const stepImg = step.image ? urlForImage(step.image)?.url() : null;

        return {
          ...step,
          image: stepImg || fallback?.image,
        };
      });
    }
    return defaultHowItWorksSteps;
  } catch (err) {
    console.warn('[Sanity] Error fetching How It Works steps, using local fallback:', err);
    return defaultHowItWorksSteps;
  }
}

export async function getSiteSettings(): Promise<SanitySiteSettings> {
  if (!isSanityConfigured || !sanityClient) {
    return defaultSiteSettings;
  }

  try {
    const data = await sanityClient.fetch<SanitySiteSettings>(siteSettingsQuery);
    if (data) {
      return {
        ...defaultSiteSettings,
        ...data,
        heroVideoUrl:
          data.heroVideoFileUrl ||
          data.heroVideoUrl ||
          defaultSiteSettings.heroVideoUrl,
        heroVideoPoster: data.heroVideoPoster
          ? urlForImage(data.heroVideoPoster)?.url() || data.heroVideoPoster
          : defaultSiteSettings.heroVideoPoster,
      };
    }
    return defaultSiteSettings;
  } catch (err) {
    console.warn('[Sanity] Error fetching site settings, using local fallback:', err);
    return defaultSiteSettings;
  }
}
