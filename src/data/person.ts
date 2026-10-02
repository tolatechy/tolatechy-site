// Who Ibraheem is, in the structured format search engines read (schema.org Person).
// Lists every form of the name used on publications and LinkedIn so Google can link them.
import { site } from '../site';

export const fullName = 'Ibraheem Omotolani Obanla';

export const person = (siteUrl?: string) => ({
  '@type': 'Person',
  '@id': siteUrl ? `${siteUrl}#person` : undefined,
  name: site.name,
  givenName: 'Ibraheem',
  additionalName: 'Omotolani',
  familyName: 'Obanla',
  alternateName: [fullName, 'Obanla Ibraheem Omotolani', 'Obanla Ibraheem', 'I. O. Obanla', 'TolaTechy', `@${site.handle}`],
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: siteUrl,
  image: siteUrl ? new URL('/og/default.jpg', siteUrl).href : undefined,
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Ibadan' },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    'Data science',
    'Machine learning',
    'Natural language processing',
    'Academic writing',
    'Referencing styles',
    'Dissertation support',
    'Statistics',
  ],
});
