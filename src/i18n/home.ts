/* Per-page string overrides for the V13 homepage copy.
   These are the strings that live on the homepage tile stack and that
   change visibly when the user picks a language. The broader i18n dict
   in src/i18n/*.json covers nav chrome and shared elements. */

import type { Locale } from './ui';

export type HomeStrings = {
  strip: { body: string; link: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    sub1: string;
    sub2: string;
    learn: string;
    apply: string;
    foot: string;
  };
  gt: {
    eyebrow: string;
    title1: string;
    title2: string;
    sub: string;
    learn: string;
    apply: string;
  };
  nest: {
    eyebrow: string;
    title1: string;
    title2: string;
    sub: string;
    learn: string;
    cta: string;
  };
  arts: {
    eyebrow: string;
    title1: string;
    title2: string;
    sub: string;
    learn: string;
    cta: string;
  };
  apply: {
    eyebrow: string;
    title1: string;
    title2: string;
    sub: string;
    tour: string;
    cta: string;
  };
  programs: { eyebrow: string; title1: string; title2: string; lead: string; learnMore: string };
  news: { eyebrow: string; title: string; readMore: string; all: string };
  calendar: { eyebrow: string; title: string };
  contact: { eyebrow: string; title: string; line: string };
  gallery: {
    eyebrow: string;
    title1: string;
    title2: string;
  };
};

const en: HomeStrings = {
  strip: { body: 'Now enrolling for 2026–27.', link: 'Apply on MySchools ›' },
  hero: {
    eyebrow: 'P.S. 165Q · Edith K. Bergtraum School',
    title1: 'Every child,',
    title2: 'a Shooting Star.',
    sub1: 'An elementary school where curiosity becomes capability.',
    sub2: 'Pre-K through Grade 5 in Flushing, Queens — since 1960.',
    learn: 'Learn more',
    apply: 'Apply for 2026–27',
    foot: 'NYC public school · District 25',
  },
  gt: {
    eyebrow: 'Gifted & Talented',
    title1: 'Where curious minds',
    title2: 'are stretched.',
    sub: 'An accelerated curriculum for students identified through NYC DOE admissions. Advanced problem-solving, independent research, and depth in every core subject.',
    learn: 'Learn more',
    apply: 'Apply',
  },
  nest: {
    eyebrow: 'NEST',
    title1: 'Project-based',
    title2: 'STEM and arts.',
    sub: 'Hands-on builds with integrated technology. Work that travels home.',
    learn: 'See it in action',
    cta: 'Explore',
  },
  arts: {
    eyebrow: 'The Arts',
    title1: 'Music, theater,',
    title2: 'visual art.',
    sub: 'From the Spring Concert to weekly studio time — creative work that stays with them.',
    learn: 'Recent highlights',
    cta: 'See the Arts',
  },
  apply: {
    eyebrow: 'Now Enrolling',
    title1: 'Apply for 2026–27.',
    title2: 'Make this their year.',
    sub: 'Pre-K, Kindergarten, and grade transfers open through the NYC DOE MySchools portal.',
    tour: 'Schedule a tour',
    cta: 'Apply on MySchools',
  },
  programs: {
    eyebrow: 'Academics',
    title1: 'Programs',
    title2: 'that shape the way they think.',
    lead: 'From accelerated G&T to social-emotional learning, every program is built around how children actually grow.',
    learnMore: 'Learn more ›',
  },
  news: { eyebrow: 'From the school', title: 'Latest news.', readMore: 'Read story ›', all: 'All news' },
  calendar: { eyebrow: 'Upcoming', title: 'School calendar.' },
  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch.',
    line: '70-35 150 Street, Flushing, NY 11367 · (718) 263-4004 · Mon–Fri 8:00 AM – 2:20 PM',
  },
  gallery: { eyebrow: 'A day at 165Q', title1: 'Life,', title2: 'in motion.' },
};

const zh: HomeStrings = {
  strip: { body: '2026–27 学年招生中。', link: '通过 MySchools 申请 ›' },
  hero: {
    eyebrow: 'P.S. 165Q · Edith K. Bergtraum 小学',
    title1: '每一个孩子，',
    title2: '都是一颗流星。',
    sub1: '让好奇心化为能力的小学。',
    sub2: '位于皇后区法拉盛的学前班至五年级——自 1960 年起。',
    learn: '了解更多',
    apply: '申请 2026–27 学年',
    foot: '纽约市公立学校 · 第25学区',
  },
  gt: {
    eyebrow: '天才班 (G&T)',
    title1: '让好奇心',
    title2: '茁壮成长。',
    sub: '面向通过纽约市教育局录取的学生的加速课程。强调高阶问题解决、独立研究和各核心学科的深度学习。',
    learn: '了解更多',
    apply: '申请',
  },
  nest: {
    eyebrow: 'NEST 项目',
    title1: '项目式 STEM',
    title2: '与艺术。',
    sub: '动手实践与技术深度融合。带回家的作品。',
    learn: '看实例',
    cta: '探索',
  },
  arts: {
    eyebrow: '艺术',
    title1: '音乐、戏剧、',
    title2: '视觉艺术。',
    sub: '从春季音乐会到每周工作室——留在孩子心中的创意。',
    learn: '近期精彩',
    cta: '查看艺术',
  },
  apply: {
    eyebrow: '招生进行中',
    title1: '申请 2026–27 学年。',
    title2: '让这成为他们的一年。',
    sub: '学前班、幼儿园及转校申请通过纽约市教育局 MySchools 平台开放。',
    tour: '预约参观',
    cta: '在 MySchools 申请',
  },
  programs: {
    eyebrow: '学术',
    title1: '塑造思维方式的',
    title2: '课程项目。',
    lead: '从加速 G&T 到社会情感学习，每个项目都围绕孩子真实的成长方式设计。',
    learnMore: '了解更多 ›',
  },
  news: { eyebrow: '校园动态', title: '最新新闻。', readMore: '阅读全文 ›', all: '全部新闻' },
  calendar: { eyebrow: '近期', title: '校历。' },
  contact: {
    eyebrow: '联系',
    title: '联系我们。',
    line: '70-35 150 Street, Flushing, NY 11367 · (718) 263-4004 · 周一至周五 上午 8:00 – 下午 2:20',
  },
  gallery: { eyebrow: '165Q 的一天', title1: '生活，', title2: '在律动中。' },
};

const ko: HomeStrings = {
  strip: { body: '2026–27학년도 신입생 모집 중.', link: 'MySchools에서 지원하기 ›' },
  hero: {
    eyebrow: 'P.S. 165Q · Edith K. Bergtraum 학교',
    title1: '모든 어린이가,',
    title2: '슈팅 스타.',
    sub1: '호기심이 능력이 되는 초등학교.',
    sub2: '퀸즈 플러싱의 Pre-K부터 5학년까지 — 1960년부터.',
    learn: '자세히',
    apply: '2026–27학년도 지원',
    foot: 'NYC 공립학교 · 제25학군',
  },
  gt: {
    eyebrow: '영재 프로그램 (G&T)',
    title1: '호기심이',
    title2: '깊어지는 곳.',
    sub: 'NYC DOE 입학 절차로 선발된 학생을 위한 가속 교육과정. 고급 문제 해결, 독립 연구, 핵심 과목의 심화 학습.',
    learn: '자세히',
    apply: '지원',
  },
  nest: {
    eyebrow: 'NEST',
    title1: '프로젝트 기반',
    title2: 'STEM과 예술.',
    sub: '통합 기술을 활용한 손으로 만드는 학습. 집으로 가져가는 작품.',
    learn: '실제 사례',
    cta: '둘러보기',
  },
  arts: {
    eyebrow: '예술',
    title1: '음악, 연극,',
    title2: '시각 예술.',
    sub: '봄 콘서트부터 매주 스튜디오까지 — 아이들의 마음에 남는 창작.',
    learn: '최근 하이라이트',
    cta: '예술 보기',
  },
  apply: {
    eyebrow: '신입생 모집',
    title1: '2026–27학년도 지원.',
    title2: '올해를 그들의 해로.',
    sub: 'Pre-K, 유치원, 학년 편입은 NYC DOE MySchools 포털에서 진행됩니다.',
    tour: '학교 견학 예약',
    cta: 'MySchools에서 지원',
  },
  programs: {
    eyebrow: '학업',
    title1: '생각하는 방식을',
    title2: '바꾸는 프로그램.',
    lead: '가속 G&T부터 사회정서학습까지, 모든 프로그램은 아이들이 실제로 자라는 방식을 중심으로 설계됩니다.',
    learnMore: '자세히 ›',
  },
  news: { eyebrow: '학교 소식', title: '최신 뉴스.', readMore: '읽기 ›', all: '전체 뉴스' },
  calendar: { eyebrow: '다가오는 일정', title: '학사 일정.' },
  contact: {
    eyebrow: '연락처',
    title: '문의하기.',
    line: '70-35 150 Street, Flushing, NY 11367 · (718) 263-4004 · 월–금 오전 8:00 – 오후 2:20',
  },
  gallery: { eyebrow: '165Q의 하루', title1: '삶,', title2: '움직임 속에.' },
};

const es: HomeStrings = {
  strip: { body: 'Inscripciones abiertas 2026–27.', link: 'Solicita en MySchools ›' },
  hero: {
    eyebrow: 'P.S. 165Q · Edith K. Bergtraum School',
    title1: 'Cada niño,',
    title2: 'una Shooting Star.',
    sub1: 'Una escuela elemental donde la curiosidad se vuelve capacidad.',
    sub2: 'Pre-K a 5.º grado en Flushing, Queens — desde 1960.',
    learn: 'Saber más',
    apply: 'Solicitar para 2026–27',
    foot: 'Escuela pública de NYC · Distrito 25',
  },
  gt: {
    eyebrow: 'Talentosos y Dotados (G&T)',
    title1: 'Donde las mentes',
    title2: 'se estiran.',
    sub: 'Un currículo acelerado para estudiantes identificados por el NYC DOE. Resolución avanzada, investigación independiente y profundidad en cada materia.',
    learn: 'Saber más',
    apply: 'Solicitar',
  },
  nest: {
    eyebrow: 'NEST',
    title1: 'STEM y artes por',
    title2: 'proyectos.',
    sub: 'Trabajo manual con tecnología integrada. Proyectos que viajan a casa.',
    learn: 'Ver en acción',
    cta: 'Explorar',
  },
  arts: {
    eyebrow: 'Las Artes',
    title1: 'Música, teatro,',
    title2: 'artes visuales.',
    sub: 'Del Concierto de Primavera al estudio semanal — creatividad que se queda con ellos.',
    learn: 'Aspectos destacados',
    cta: 'Ver las Artes',
  },
  apply: {
    eyebrow: 'Inscripciones Abiertas',
    title1: 'Solicita para 2026–27.',
    title2: 'Haz que sea su año.',
    sub: 'Pre-K, Kindergarten y traslados de grado abiertos a través del portal MySchools del NYC DOE.',
    tour: 'Agendar una visita',
    cta: 'Solicitar en MySchools',
  },
  programs: {
    eyebrow: 'Académicos',
    title1: 'Programas',
    title2: 'que moldean cómo piensan.',
    lead: 'Desde G&T acelerado hasta aprendizaje socioemocional, cada programa se diseña alrededor de cómo los niños realmente crecen.',
    learnMore: 'Saber más ›',
  },
  news: { eyebrow: 'De la escuela', title: 'Últimas noticias.', readMore: 'Leer historia ›', all: 'Todas las noticias' },
  calendar: { eyebrow: 'Próximos', title: 'Calendario escolar.' },
  contact: {
    eyebrow: 'Contacto',
    title: 'Comunícate.',
    line: '70-35 150 Street, Flushing, NY 11367 · (718) 263-4004 · Lun–Vie 8:00 AM – 2:20 PM',
  },
  gallery: { eyebrow: 'Un día en 165Q', title1: 'La vida,', title2: 'en movimiento.' },
};

const dict: Record<Locale, HomeStrings> = { en, zh, ko, es };

export function home(locale: Locale): HomeStrings {
  return dict[locale] ?? dict.en;
}

export function dateLocaleFor(locale: Locale): string {
  switch (locale) {
    case 'zh': return 'zh-CN';
    case 'ko': return 'ko-KR';
    case 'es': return 'es-US';
    default: return 'en-US';
  }
}
