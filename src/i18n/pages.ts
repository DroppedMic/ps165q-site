/* Chrome strings for inner pages (news listing, news post, program detail).
   Kept separate from home.ts so the homepage component dictionary stays
   focused on the tile-stack copy. */

import type { Locale } from './ui';

export type PageStrings = {
  news: {
    listTitle1: string;
    listTitle2: string;
    listEyebrow: string;
    listLead: string;
    readMore: string;
    back: string;
    empty: string;
    eyebrowPost: string;
    byPrefix: string;
  };
  programs: {
    back: string;
    apply: string;
    tour: string;
    cta: string;
    learnMoreOfficial: string;
    footerH: string;
    footerLead: string;
  };
};

const en: PageStrings = {
  news: {
    listTitle1: 'News',
    listTitle2: 'and highlights.',
    listEyebrow: 'From the school',
    listLead:
      "What's happening at 165Q. Subscribe to the weekly Shooting Stars digest via the homepage newsletter.",
    readMore: 'Read story ›',
    back: 'All news',
    empty: 'No posts yet.',
    eyebrowPost: 'News',
    byPrefix: 'by',
  },
  programs: {
    back: 'All programs',
    apply: 'Apply for 2026–27',
    tour: 'Schedule a tour',
    cta: 'Apply on MySchools',
    learnMoreOfficial: 'Official admissions info',
    footerH: 'Ready to learn more?',
    footerLead:
      'Schedule a tour or apply for the 2026–27 school year through the NYC DOE MySchools portal.',
  },
};

const zh: PageStrings = {
  news: {
    listTitle1: '新闻',
    listTitle2: '与亮点。',
    listEyebrow: '校园动态',
    listLead: '165Q 的最新动态。订阅每周流星电子刊。',
    readMore: '阅读全文 ›',
    back: '全部新闻',
    empty: '暂无文章。',
    eyebrowPost: '新闻',
    byPrefix: '作者',
  },
  programs: {
    back: '全部课程',
    apply: '申请 2026–27 学年',
    tour: '预约参观',
    cta: '在 MySchools 申请',
    learnMoreOfficial: '官方招生信息',
    footerH: '想了解更多？',
    footerLead: '预约参观或通过 NYC DOE MySchools 平台申请 2026–27 学年。',
  },
};

const ko: PageStrings = {
  news: {
    listTitle1: '뉴스',
    listTitle2: '와 하이라이트.',
    listEyebrow: '학교 소식',
    listLead: '165Q의 최근 소식. 매주 슈팅 스타 다이제스트를 구독하세요.',
    readMore: '읽기 ›',
    back: '전체 뉴스',
    empty: '게시물이 아직 없습니다.',
    eyebrowPost: '뉴스',
    byPrefix: '작성자',
  },
  programs: {
    back: '전체 프로그램',
    apply: '2026–27학년도 지원',
    tour: '학교 견학 예약',
    cta: 'MySchools에서 지원',
    learnMoreOfficial: '공식 입학 정보',
    footerH: '더 알아보시겠어요?',
    footerLead: '학교 견학을 예약하거나 NYC DOE MySchools 포털에서 2026–27학년도 지원을 진행하세요.',
  },
};

const es: PageStrings = {
  news: {
    listTitle1: 'Noticias',
    listTitle2: 'y momentos.',
    listEyebrow: 'De la escuela',
    listLead:
      'Lo que sucede en 165Q. Suscríbete al resumen semanal de las Shooting Stars desde la página principal.',
    readMore: 'Leer historia ›',
    back: 'Todas las noticias',
    empty: 'Aún no hay publicaciones.',
    eyebrowPost: 'Noticias',
    byPrefix: 'por',
  },
  programs: {
    back: 'Todos los programas',
    apply: 'Solicitar para 2026–27',
    tour: 'Agendar una visita',
    cta: 'Solicitar en MySchools',
    learnMoreOfficial: 'Información oficial de admisiones',
    footerH: '¿Quieres saber más?',
    footerLead:
      'Agenda una visita o solicita el año escolar 2026–27 a través del portal MySchools del NYC DOE.',
  },
};

const dict: Record<Locale, PageStrings> = { en, zh, ko, es };

export function pages(locale: Locale): PageStrings {
  return dict[locale] ?? dict.en;
}
