// Shared content for the Research & Writing Support pages.

export const referencingStyles = ['Harvard', 'APA', 'Chicago', 'MLA', 'OSCOLA', 'IEEE', 'Vancouver', 'MHRA'];

export const process = [
  {
    icon: 'Send',
    title: 'Send your details',
    text: 'Your course, level, referencing style, deadline and what you need help with, by email or WhatsApp.',
  },
  {
    icon: 'Receipt',
    title: 'Get a quote',
    text: 'Based on the length of the work, the deadline and the kind of help you need.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Work through it together',
    text: 'Edits, comments and guidance you can see, understand and act on.',
  },
  {
    icon: 'CircleCheck',
    title: 'Submit with confidence',
    text: 'Work that meets the conventions your markers expect.',
  },
] as const;

export const faqs = [
  {
    q: 'Which referencing styles do you work with?',
    a: `${referencingStyles.join(', ')}, and others on request. Tell me which one your department uses, or send me your module handbook.`,
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the length of the work, your deadline and the kind of help you need. Send me those details and I will give you a quote.',
  },
  {
    q: "I'm a Nigerian student new to the UK. Is this for me?",
    a: 'Yes. Many of the students I work with studied in Nigeria and are meeting UK academic conventions for the first time, from referencing to how a dissertation is structured.',
  },
  {
    q: 'Which levels do you support?',
    a: "Undergraduate, Master's and PhD students.",
  },
  {
    q: 'How do I send my work?',
    a: 'By email, ideally as a Word document. WhatsApp is fine for quick questions.',
  },
];
