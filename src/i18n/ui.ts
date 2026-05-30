import en from './en.json';
import zh from './zh.json';
import ko from './ko.json';
import es from './es.json';

export const locales = ['en', 'zh', 'ko', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const dict = { en, zh, ko, es } as const;
export type Dict = typeof en;

export function t(locale: Locale): Dict {
  return (dict[locale] ?? dict[defaultLocale]) as Dict;
}

export function localePathPrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith('http') || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return href;
  }
  const prefix = localePathPrefix(locale);
  if (!prefix) return href;
  if (href === '/' || href === '') return `${prefix}/`;
  return `${prefix}${href.startsWith('/') ? href : `/${href}`}`;
}

export function getLocaleFromUrl(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean);
  // pathname may include base URL — peel until we find a locale segment
  for (const s of seg) {
    if ((locales as readonly string[]).includes(s)) return s as Locale;
  }
  return defaultLocale;
}
