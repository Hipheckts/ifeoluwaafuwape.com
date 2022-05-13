export const tags = [
  'finance',
  'hiring',
  'career',
  'software',
  'design',
  'interview',
  'speaking',
  'design-system',
  'accessibility',
  'state-machine',
  'react',
  'jest',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
];

const shared = {
  name: 'Ifeoluwa Afuwape',
  repo: 'https://github.com/segunadebayo/adebayosegun.com',
  editUrl: 'https://github.com/segunadebayo/adebayosegun.com/edit/main/data/',
  website: 'https://ifeoluwaafuwape.com',
  title:
    'Ifeoluwa Afuwape - Engineer (Software Systems), Mobile Developer and Product Designer',
  description:
    'Software Engineer with a niche for Mobile, Web and Cross Platform Applications. Ex-Python Dev.',
  image: 'https://adebayosegun.com/static/images/banner.png',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - Ifeoluwa Afuwape',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/hipheckts',
    twitter: 'https://twitter.com/hipheckt',
    linkedin: 'https://www.linkedin.com/in/afuwape-ifeoluwa/',
    resume: 'https://docs.google.com/document/d/e/2PACX-1vTlYVfLglbfdmN8NRrc-pAUuGXKEPAyOWKh3OQkZAUdpLhkQk2Qz8oR68wC8ZVlSK0x3vE87n117e3R/pub',
    email: 'mailto:hipheckt@gmail.com',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@hipheckt',
    site: '@hipheckt',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: 'https://adebayosegun.com/static/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Ifeoluwa Afuwape - Engineer (Software Systems), Mobile Developer and Product Designer',
      },
    ],
  },
};

export default siteConfig;
