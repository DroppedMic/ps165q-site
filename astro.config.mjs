// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://droppedmic.github.io';
const BASE = '/ps165q-site';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      zh: 'en',
      ko: 'en',
      es: 'en',
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', zh: 'zh-CN', ko: 'ko-KR', es: 'es-US' },
      },
    }),
  ],
  image: {
    responsiveStyles: true,
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
