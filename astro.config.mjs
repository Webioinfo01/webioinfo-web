// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.webioinfo.top',
  vite: {
    plugins: [tailwindcss()],
  },
});
