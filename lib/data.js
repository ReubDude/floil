// All editable site content lives here. Items marked REPLACE need real values.

export const brand = {
  name: 'FLOIL',
  tagline: 'The Future of Hair Foils.',
  // REPLACE with real links before launch
  instagram: '#', // REPLACE: https://instagram.com/...
  linkedin: '#', // REPLACE: https://linkedin.com/company/...
  contactEmail: 'hello@floil.com', // REPLACE
};

export const hero = {
  headline: ['Load Faster.', 'Work Smarter.'],
  sub:
    'A patented professional hair foil designed to streamline highlighting with faster, one-handed loading.',
  primaryCta: { label: 'Become a Distribution Partner', href: '#partner' },
  secondaryCta: { label: 'Request Early Access', href: '#partner' },
  // Drop the real loop here later (e.g. /videos/floil-hero.mp4). Until then the poster shows.
  videoSrc: '', // REPLACE with 30–45s silent loop
  poster: '/images/Floil2.png',
};

export const problem = {
  kicker: 'The Problem',
  lines: [
    'Traditional foils interrupt workflow.',
    'Stylists spend thousands of repetitive motions every year separating, positioning, and loading foils.',
  ],
  punch: 'Those seconds add up.',
};

export const solution = {
  kicker: 'The Solution',
  headline: 'Meet FLOIL.',
  image: '/images/1_Floil_Main.png',
  bullets: [
    'Pre-formed loading lip',
    'Faster foil placement',
    'One-handed operation',
    'Works with standard coloring workflows',
    'Designed by professionals',
  ],
  badge: 'Patent Pending',
};

export const why = {
  kicker: 'Why It Matters',
  cards: [
    { title: 'Save Time', body: 'Reduce unnecessary handling.' },
    { title: 'Reduce Fatigue', body: 'More ergonomic throughout long appointments.' },
    { title: 'Improve Workflow', body: 'Spend more time creating.' },
    { title: 'No Learning Curve', body: 'Works with techniques stylists already know.' },
  ],
};

export const how = {
  kicker: 'How It Works',
  steps: [
    { n: '01', title: 'Grab', body: 'Pick up a single foil — no separating, no fumbling.' },
    { n: '02', title: 'Load', body: 'The pre-formed lip seats the foil one-handed.' },
    { n: '03', title: 'Color', body: 'Place, paint, fold. Back to what you do best.' },
  ],
};

export const gallery = {
  kicker: 'Gallery',
  // Real macro / lifestyle / hands-in-use photography drops in here later. REPLACE captions/images.
  items: [
    { src: '/images/Floil5.png', caption: 'The foil, seated.' },
    { src: '/images/Floil1.png', caption: 'On the station.' },
    { src: '/images/Floil3.png', caption: 'Professional packaging.' },
    { src: '/images/1_Floil_Main.png', caption: 'Open and ready.' },
  ],
};

export const testimonials = {
  kicker: 'Testimonials',
  items: [
    { quote: 'Why didn’t this exist years ago?', who: 'Professional Stylist' },
  ],
};

export const about = {
  kicker: 'About',
  body:
    'FLOIL was created to solve one of the smallest—but most repeated—frustrations in professional hair coloring. Every innovation doesn’t need to reinvent the process. Sometimes it simply makes the process better.',
};

export const partner = {
  kicker: 'Become a Partner',
  headline: 'This isn’t another foil. It’s a better tool.',
  body:
    'Interested in distribution, manufacturing, or bringing FLOIL into your salon?',
  cta: { label: 'Contact Us', href: 'mailto:hello@floil.com' }, // REPLACE email
};
