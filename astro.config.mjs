// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://math.mkabumattar.com',
  integrations: [
    AutoImport({
      imports: [
        '@/components/shortcodes/Math.tsx',
        '@/components/shortcodes/Notice.tsx',
        '@/components/shortcodes/Card.tsx',
        '@/components/shortcodes/Badge.tsx',
        '@/components/shortcodes/Kbd.tsx',
        '@/components/shortcodes/Accordion.tsx',
        '@/components/shortcodes/Spoiler.tsx',
        '@/components/shortcodes/Steps.tsx',
        '@/components/shortcodes/Quote.tsx',
        '@/components/shortcodes/Tooltip.tsx',
        '@/components/shortcodes/Diagram.astro',
      ],
    }),
    react(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
