import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'kisr0owh';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-03-01';
const useCdn = false;

export const isSanityConfigured = Boolean(projectId && projectId.trim() !== '');

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    })
  : null;

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function urlForImage(source: any) {
  if (!builder || !source) return null;
  return builder.image(source);
}
