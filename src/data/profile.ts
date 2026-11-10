import type { Lang } from '../i18n/ui';

type Localized<T> = Record<Lang, T>;

export const profile = {
  name: 'Thiago Fuganti',
  email: 'fuganti@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tfuganti',
  github: 'https://github.com/aversvs',
  photo: '/foto.webp',
  formEndpoint: '',
  resume: { it: '/cv.pdf', en: '/cv.pdf' } as Localized<string>,
};

export const content: Localized<{
  role: string;
  headline: string;
  intro: string[];
  seoDescription: string;
  skills: { group: string; items: string[] }[];
  experience: { company: string; role: string; period: string; location?: string; highlights: string[] }[];
}> = {
  it: {
    role: 'Senior Front-End Developer · React / JavaScript',
    headline: 'Interfacce web veloci, accessibili e ben costruite. =) ',
    intro: [
      'Senior Front-End Developer con oltre 20 anni di esperienza maturata in contesti di agenzia, collaborando con designer, sviluppatori back-end e project manager. Ho realizzato siti e piattaforme web per clienti di diversi settori, principalmente con Drupal e WordPress, con particolare attenzione a HTML semantico, accessibilità (WCAG) e performance.',
      'Oggi sviluppo anche applicazioni con React, Next.js, TypeScript e Astro, portando in questo ecosistema la stessa cura per la qualità del codice, alla progettazione dei componenti e agli standard web.',
      'Vivo in Italia.',

    ],
    seoDescription:
      'Thiago Fuganti, Senior Front-End Developer (React, TypeScript) con oltre 20 anni di esperienza in interfacce accessibili e performanti. Progetti e contatti.',
    skills: [
      {
        group: 'Front-end',
        items: ['HTML5 semantico', 'CSS3 / SCSS (Sass)', 'Tailwind CSS', 'JavaScript (ES6+)', 'jQuery', 'Responsive design'],
      },
      {
        group: 'React',
        items: ['React (hooks, Context, useReducer)', 'TypeScript', 'Next.js', 'React Router', 'Vite', 'Web Workers', 'ESLint'],
      },
      {
        group: 'Astro',
        items: ['Astro', 'Content Collections', 'Siti multilingua (i18n)', 'Siti statici'],
      },
      {
        group: 'Drupal & CMS',
        items: ['Drupal 8 / 9 / 10', 'Temi custom', 'Twig', 'Paragraphs', 'Blocchi', 'PHP', 'WordPress (temi custom)'],
      },
      {
        group: 'Qualità',
        items: ['Accessibilità web (WCAG 2.1)', 'Ottimizzazione delle performance', 'Lighthouse', 'SEO tecnico', 'Standard web'],
      },
      {
        group: 'Tooling & workflow',
        items: ['Git (GitHub)', 'Node.js / npm', 'Docker', 'Lando', 'Composer', 'Drush', 'Vercel', 'Figma', 'Deploy multi-ambiente', 'MySQL / MariaDB', 'Stack LAMP'],
      },
    ],
    experience: [
      {
        company: 'F5 Web Design e Tecnologia Atualizada',
        role: 'Front-end Developer',
        period: 'Settembre 2018 — oggi',
        location: 'Da remoto dall’Italia',
        highlights: [
          'Sviluppo di siti Drupal con focus sul front-end e sull’integrazione con il CMS.',
          'Temi custom realizzati a partire dai design forniti, su progetti ricchi di contenuti, con attenzione ad accessibilità e standard web.',
          'Ottimizzazione delle performance e manutenzione evolutiva, in collaborazione continua con il team back-end.',
          'Node.js per l’ambiente di sviluppo locale e il build tooling.',
        ],
      },
      {
        company: 'VitaminaWeb',
        role: 'Front-end Developer',
        period: 'Gennaio 2017 — Settembre 2018',
        highlights: [
          'Sviluppo di numerosi progetti WordPress, con creazione e manutenzione di temi custom.',
          'Applicazione delle best practice di responsive design e accessibilità.',
          'Collaborazione con designer e project manager su più progetti in parallelo.',
        ],
      },
      {
        company: 'Sabbre’//AG',
        role: 'Front-end Developer',
        period: 'Aprile 2015 — Aprile 2016',
        highlights: [
          'Sviluppo front-end per siti istituzionali e aziendali.',
          'Integrazione CMS e supporto alla pubblicazione dei contenuti.',
        ],
      },
      {
        company: 'Itelios do Brasil',
        role: 'Front-end Developer',
        period: 'Dicembre 2013 — Febbraio 2015',
        highlights: [
          'Sviluppo continuativo di progetti enterprise basati su Drupal.',
          'Collaborazione con team multidisciplinari su piattaforme CMS complesse, di media e grande scala.',
        ],
      },
      {
        company: 'Agenzie digitali, São Paulo',
        role: 'Front-end Developer',
        period: '2005 — 2013',
        highlights: ['Sviluppo front-end di siti web basati su CMS e layout custom.'],
      },
    ],
  },
  en: {
    role: 'Senior Front-End Developer · React / JavaScript',
    headline: 'Fast, accessible, well-built web interfaces. =)',
    intro: [
      'Senior Front-End Developer with over 20 years of experience in agency settings, working alongside designers, back-end developers and project managers. I have built websites and web platforms for clients across many industries, mainly with Drupal and WordPress, with a strong focus on semantic HTML, accessibility (WCAG) and performance.',
      'Today I also build applications with React, Next.js, TypeScript and Astro, bringing to this ecosystem the same care for code quality, component design and web standards.',
      'I live in Italy.',
    ],
    seoDescription:
      'Thiago Fuganti, Senior Front-End Developer (React, TypeScript) with over 20 years of experience building accessible, high-performance interfaces. Projects and contact.',
    skills: [
      {
        group: 'Front-end',
        items: ['Semantic HTML5', 'CSS3 / SCSS (Sass)', 'Tailwind CSS', 'JavaScript (ES6+)', 'jQuery', 'Responsive design'],
      },
      {
        group: 'React',
        items: ['React (hooks, Context, useReducer)', 'TypeScript', 'Next.js', 'React Router', 'Vite', 'Web Workers', 'ESLint'],
      },
      {
        group: 'Astro',
        items: ['Astro', 'Content Collections', 'Multilingual sites (i18n)', 'Static sites'],
      },
      {
        group: 'Drupal & CMS',
        items: ['Drupal 8 / 9 / 10', 'Custom themes', 'Twig', 'Paragraphs', 'Blocks', 'PHP', 'WordPress (custom themes)'],
      },
      {
        group: 'Quality',
        items: ['Web accessibility (WCAG 2.1)', 'Performance optimization', 'Lighthouse', 'Technical SEO', 'Web standards'],
      },
      {
        group: 'Tooling & workflow',
        items: ['Git (GitHub)', 'Node.js / npm', 'Docker', 'Lando', 'Composer', 'Drush', 'Vercel', 'Figma', 'Multi-environment deploys', 'MySQL / MariaDB', 'LAMP stack'],
      },
    ],
    experience: [
      {
        company: 'F5 Web Design e Tecnologia Atualizada',
        role: 'Front-end Developer',
        period: 'September 2018 — present',
        location: 'Remote from Italy',
        highlights: [
          'Building Drupal websites with a focus on the front end and CMS integration.',
          'Custom themes built from provided designs, on content-heavy projects, with attention to accessibility and web standards.',
          'Performance optimization and ongoing maintenance, in close collaboration with the back-end team.',
          'Node.js for the local development environment and build tooling.',
        ],
      },
      {
        company: 'VitaminaWeb',
        role: 'Front-end Developer',
        period: 'January 2017 — September 2018',
        highlights: [
          'Built many WordPress projects, creating and maintaining custom themes.',
          'Applied responsive design and accessibility best practices.',
          'Worked with designers and project managers on several projects in parallel.',
        ],
      },
      {
        company: 'Sabbre’//AG',
        role: 'Front-end Developer',
        period: 'April 2015 — April 2016',
        highlights: [
          'Front-end development for corporate and institutional websites.',
          'CMS integration and content publishing support.',
        ],
      },
      {
        company: 'Itelios do Brasil',
        role: 'Front-end Developer',
        period: 'December 2013 — February 2015',
        highlights: [
          'Ongoing development of enterprise projects built on Drupal.',
          'Worked with multidisciplinary teams on complex, mid- to large-scale CMS platforms.',
        ],
      },
      {
        company: 'Digital agencies, São Paulo',
        role: 'Front-end Developer',
        period: '2005 — 2013',
        highlights: ['Front-end development of CMS-based websites and custom layouts.'],
      },
    ],
  },
};
