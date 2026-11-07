export const languages = { it: 'Italiano', en: 'English' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'it';

export const htmlLang: Record<Lang, string> = { it: 'it', en: 'en' };

export const ogLocale: Record<Lang, string> = { it: 'it_IT', en: 'en_US' };

export const ui = {
  it: {
    skip: 'Vai al contenuto',
    nav: {
      main: 'Principale',
      projects: 'Progetti',
      skills: 'Competenze',
      experience: 'Esperienza',
      contact: 'Contatti',
      menu: 'Menu',
    },
    theme: 'Cambia tema chiaro/scuro',
    switchLang: 'Read in English',
    hero: {
      viewProjects: 'Vedi i progetti',
      resume: 'Scarica il CV',
    },
    projects: {
      title: 'Progetti selezionati',
      subtitle: 'Da Drupal a React: una selezione di ciò che ho realizzato e imparato lungo il percorso.',
      demo: 'Demo live',
      code: 'Codice',
      caseStudy: 'Leggi il case study',
    },
    background: { languages: 'Lingue', education: 'Formazione' },
    skills: { title: 'Competenze' },
    experience: { title: 'Esperienza' },
    contact: {
      title: 'Ci parliamo?',
      text: 'Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Scrivimi.',
      emailMe: "Inviami un'email",
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia messaggio',
    },
    project: {
      back: 'Torna ai progetti',
      role: 'Ruolo',
      year: 'Anno',
      stack: 'Tecnologie',
      next: 'Progetto successivo',
    },
    footer: 'Realizzato con Astro e Tailwind CSS.',
  },
  en: {
    skip: 'Skip to content',
    nav: {
      main: 'Main',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      menu: 'Menu',
    },
    theme: 'Toggle light/dark theme',
    switchLang: 'Leggi in italiano',
    hero: {
      viewProjects: 'View projects',
      resume: 'Download résumé',
    },
    projects: {
      title: 'Selected projects',
      subtitle: 'From Drupal to React: a selection of what I have built and learned along the way.',
      demo: 'Live demo',
      code: 'Code',
      caseStudy: 'Read case study',
    },
    background: { languages: 'Languages', education: 'Education' },
    skills: { title: 'Skills' },
    experience: { title: 'Experience' },
    contact: {
      title: "Shall we talk?",
      text: 'Have a project in mind or just want to chat? Drop me a line.',
      emailMe: 'Send an email',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
    },
    project: {
      back: 'Back to projects',
      role: 'Role',
      year: 'Year',
      stack: 'Tech stack',
      next: 'Next project',
    },
    footer: 'Built with Astro and Tailwind CSS.',
  },
} as const;

export function homePath(lang: Lang) {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

export function projectPath(lang: Lang, slug: string) {
  return lang === 'it' ? `/progetti/${slug}/` : `/en/projects/${slug}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'it' ? 'en' : 'it';
}
