// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://we.webioinfo.top',
  vite: {
    plugins: [tailwindcss()],
  },
});
