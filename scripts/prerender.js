import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const DIST_DIR = path.resolve('dist');
const ARTICLES_DIR = path.resolve('src/content/articles');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

const DOMAIN_XYZ = 'https://ifeoluwaafuwape.xyz';
const DOMAIN_COM = 'https://ifeoluwaafuwape.com';
const DEFAULT_IMAGE = '/images/default-og-image.jpg';

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseTemplate = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function formatImageUrl(imagePath) {
  if (!imagePath) return `${DOMAIN_XYZ}${DEFAULT_IMAGE}`;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${DOMAIN_XYZ}${cleanPath}`;
}

function generateHtmlWithMeta(template, { title, description, image, url, type = 'article' }) {
  const fullTitle = title.includes('Ifeoluwa Afuwape') ? title : `${title} — Ifeoluwa Afuwape`;
  const fullImageUrl = formatImageUrl(image);
  const fullImageUrlCom = fullImageUrl.replace(DOMAIN_XYZ, DOMAIN_COM);

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${fullTitle}</title>`);

  // Remove existing metadata tags to avoid duplicates
  html = html.replace(/<meta\s+(name|property)=["'](description|og:.*|twitter:.*)["']\s+content=["'].*?["']\s*\/?>/gi, '');

  const metaTags = `
    <meta name="description" content="${description}" />
    
    <!-- Open Graph / LinkedIn / Facebook -->
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${fullImageUrl}" />
    <meta property="og:image:secure_url" content="${fullImageUrl}" />
    <meta property="og:image:alt" content="${title}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${fullImageUrl}" />
  `;

  return html.replace('</head>', `${metaTags}\n</head>`);
}

// 1. Process all markdown articles
console.log('Pre-rendering static HTML previews for articles...');
const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));

let count = 0;
files.forEach(file => {
  const slug = file.replace(/\.md$/, '');
  const filePath = path.join(ARTICLES_DIR, file);
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const parsed = fm(rawContent);

  const title = parsed.attributes.title || slug;
  const description = parsed.attributes.description || 'Technical article by Ifeoluwa Afuwape.';

  // Extract cover/meta preview image
  let image = parsed.attributes.image || '';
  if (!image) {
    const imgMatch = parsed.body.match(/!\[.*?\]\((.*?)\)/);
    if (imgMatch && imgMatch[1]) {
      image = imgMatch[1].split('|')[0].trim();
    }
  }
  if (!image) {
    image = DEFAULT_IMAGE;
  }

  const articleUrl = `${DOMAIN_XYZ}/articles/${slug}`;
  const articleHtml = generateHtmlWithMeta(baseTemplate, {
    title,
    description,
    image,
    url: articleUrl,
    type: 'article'
  });

  const articleDistDir = path.join(DIST_DIR, 'articles', slug);
  ensureDirSync(articleDistDir);
  fs.writeFileSync(path.join(articleDistDir, 'index.html'), articleHtml, 'utf-8');
  count++;
});

console.log(`Successfully pre-rendered static HTML metadata for ${count} articles.`);

// 2. Pre-render main section subpages
const subpages = [
  { pathName: 'articles', title: 'Technical Articles & Writings', description: 'Technical articles, cloud architecture insights, and software engineering practices by Ifeoluwa Afuwape.' },
  { pathName: 'projects', title: 'Featured Projects & Systems', description: 'High-scale enterprise architectures, open-source work, and system design projects by Ifeoluwa Afuwape.' },
  { pathName: 'experience', title: 'Professional Experience & Leadership', description: 'Engineering leadership experience across UK Higher Ed, FinTech, and enterprise domains by Ifeoluwa Afuwape.' },
  { pathName: 'speaking', title: 'Speaking & Keynotes', description: 'Keynotes, technical talks, and panel discussions by Ifeoluwa Afuwape.' },
  { pathName: 'podcast', title: 'Podcasts & Media Appearances', description: 'Podcast episodes and technical discussions featuring Ifeoluwa Afuwape.' }
];

subpages.forEach(({ pathName, title, description }) => {
  const subHtml = generateHtmlWithMeta(baseTemplate, {
    title,
    description,
    image: DEFAULT_IMAGE,
    url: `${DOMAIN_XYZ}/${pathName}`,
    type: 'website'
  });

  const subDistDir = path.join(DIST_DIR, pathName);
  ensureDirSync(subDistDir);
  fs.writeFileSync(path.join(subDistDir, 'index.html'), subHtml, 'utf-8');
});

console.log('Successfully pre-rendered static HTML metadata for all site subpages.');
