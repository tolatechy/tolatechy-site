// Site-wide details, used by the header, footer and contact links.
// Change contact details here and they update everywhere.

export const site = {
  name: 'Ibraheem Obanla',
  /** Long-standing tech nickname, shown as a handle next to the name. */
  handle: 'tolatechy',
  role: 'Data Scientist & Research Analyst',
  location: 'Lagos, Nigeria',
  email: 'info@ibraheemobanla.com',
  whatsapp: 'https://wa.me/2349020660127',
  linkedin: 'https://www.linkedin.com/in/ibraheemobanla',
  github: 'https://github.com/tolatechy',
  resumePdf: '/resume/Ibraheem_Obanla_Resume.pdf',
  resumeDocx: '/resume/Ibraheem_Obanla_Resume.docx',
  hire: '/contact#hire',
  quote: '/contact#quote',
};

// Main navigation. Set `ready: true` when a page is built, and it appears in the menu.
export const nav = [
  { label: 'Projects', href: '/projects', ready: true },
  { label: 'Research', href: '/research', ready: true },
  { label: 'Writing Support', href: '/research-support', ready: true },
  { label: 'Resume', href: '/resume', ready: true },
  { label: 'About', href: '/about', ready: true },
  { label: 'Contact', href: '/contact', ready: true },
];
