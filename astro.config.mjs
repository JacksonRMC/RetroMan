import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [react()],
});