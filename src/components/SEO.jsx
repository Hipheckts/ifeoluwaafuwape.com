import { useEffect } from 'react';

const SITE_DOMAIN = 'https://ifeoluwaafuwape.com';
const DEFAULT_IMAGE = `${SITE_DOMAIN}/images/default-og-image.jpg`;

export default function SEO({
  title = 'Ifeoluwa Afuwape — Engineering Manager & Certified Cloud Architect',
  description = 'Official personal site & technical articles of Ifeoluwa Afuwape (Hipheckts), Engineering Manager & Certified Cloud Architect.',
  image = DEFAULT_IMAGE,
  type = 'website',
  path = ''
}) {
  useEffect(() => {
    const fullTitle = title.includes('Ifeoluwa Afuwape') ? title : `${title} — Ifeoluwa Afuwape`;
    document.title = fullTitle;

    const setMetaTag = (selector, attribute, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    let fullImageUrl = image;
    if (image && !image.startsWith('http')) {
      fullImageUrl = `${SITE_DOMAIN}${image.startsWith('/') ? '' : '/'}${image}`;
    }

    const currentUrl = `${SITE_DOMAIN}${path || window.location.pathname}`;

    // Description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', fullImageUrl);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullImageUrl);
  }, [title, description, image, type, path]);

  return null;
}
