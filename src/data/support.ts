// Shared content for the Research & Writing Support pages.

export const referencingStyles = ['Harvard', 'APA', 'Chicago', 'MLA', 'OSCOLA', 'IEEE', 'Vancouver', 'MHRA'];

export const process = [
  {
    icon: 'Send',
    title: 'Send your details',
    text: 'Tell me your course, level, referencing style and deadline, and what you’re stuck on. Email or WhatsApp is fine.',
  },
  {
    icon: 'Receipt',
    title: 'Get a quote',
    text: 'I look at how long the work is and how soon you need it, then send you a price.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Work through it together',
    text: 'You see every edit and comment, and you can ask me about any of them.',
  },
  {
    icon: 'CircleCheck',
    title: 'Submit with confidence',
    text: 'Hand it in knowing it’s done the way your markers expect.',
  },
] as const;

export const faqs = [
  {
    q: 'Which referencing styles do you work with?',
    a: `${referencingStyles.join(', ')}, and others if you need them. Tell me which one your department uses, or just send me your module handbook.`,
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on how long the work is, when it’s due and what kind of help you need. Send me those details and I’ll come back to you with a quote.',
  },
  {
    q: "I'm a Nigerian student new to the UK. Is this for me?",
    a: 'Yes. A lot of the students I work with did their first degree in Nigeria and are still getting used to how things are done in the UK, especially referencing and how a dissertation is put together.',
  },
  {
    q: 'Which levels do you support?',
    a: "Undergraduates, Master's students and PhD candidates.",
  },
  {
    q: 'How do I send my work?',
    a: 'Email is best, ideally with a Word document attached. WhatsApp works for quick questions.',
  },
];
