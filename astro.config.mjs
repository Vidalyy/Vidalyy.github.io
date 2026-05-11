import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vidalyy.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
