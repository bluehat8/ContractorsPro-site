// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { SITE } from "./src/consts";

import sitemap from "@astrojs/sitemap";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: SITE.CANONICAL_URL,
  output: "static",

  build: {
    inlineStylesheets: "always",
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "DMSans",
      cssVariable: "--font-dm-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/DMSans.woff2"],
            weight: "normal",
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],

  integrations: [sitemap(), favicons()],

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "object-src 'self'",
        "connect-src 'self' https://*.sanity.io https://cdn.sanity.io",
        "base-uri 'self'",
        "img-src 'self' https: data: blob: https://cdn.sanity.io",
        "media-src 'self' https: data: blob:",
        "font-src 'self' data:",
        "frame-src 'self' https://www.google.com/",
        "worker-src 'self'",
        "manifest-src 'none'",
        "form-action 'self'",
      ],
      styleDirective: {
        resources: ["'self'", "'unsafe-inline'"],
      },
    },
  },
});
