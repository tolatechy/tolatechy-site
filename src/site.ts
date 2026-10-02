// Site-wide details, used by the header, footer and contact links.
// Change contact details here and they update everywhere.

export const site = {
  name: 'Ibraheem Obanla',
  role: 'Data Scientist & Research Writer',
  location: 'Lagos, Nigeria',
  email: 'ibraheemobanla44@gmail.com',
  whatsapp: 'https://wa.me/2349020660127',
  linkedin: 'https://www.linkedin.com/in/ibraheemobanla',
  github: 'https://github.com/tolatechy',
  resumePdf: '/resume/Ibraheem_Obanla_Resume.pdf',
  resumeDocx: '/resume/Ibraheem_Obanla_Resume.docx',
};

// Main navigation. Set `ready: true` when a page is built, and it appears in the menu.
export const nav = [
  { label: 'Research & Writing Support', href: '/research-support', ready: false },
  { label: 'Research', href: '/research', ready: false },
  { label: 'Projects', href: '/projects', ready: false },
  { label: 'Resume', href: '/resume', ready: false },
  { label: 'About', href: '/about', ready: true },
  { label: 'Contact', href: '/contact', ready: true },
];
