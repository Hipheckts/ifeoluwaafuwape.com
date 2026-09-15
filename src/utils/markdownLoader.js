import fm from 'front-matter';

export function formatDate(dateString) {
  if (!dateString) return '';
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const date = new Date(year, month, day);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    }
  }
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

// Dynamically import all markdown files in content/articles directory as raw text
const articleFiles = import.meta.glob('../content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function getAllArticles() {
  const articles = [];

  for (const path in articleFiles) {
    const rawContent = articleFiles[path];
    const parsed = fm(rawContent);
    
    // Extract slug from filename (e.g. ../content/articles/building-flutter-2fa.md -> building-flutter-2fa)
    const slug = path.split('/').pop().replace(/\.md$/, '');
    const rawDate = parsed.attributes.date || '';

    // Extract cover/meta image (frontmatter image OR first inline markdown image)
    let articleImage = parsed.attributes.image || '';
    if (!articleImage) {
      const match = parsed.body.match(/!\[.*?\]\((.*?)\)/);
      if (match && match[1]) {
        articleImage = match[1].split('|')[0].trim();
      }
    }
    if (!articleImage) {
      articleImage = '/images/default-og-image.jpg';
    }

    articles.push({
      slug,
      title: parsed.attributes.title || slug,
      date: rawDate,
      formattedDate: formatDate(rawDate),
      description: parsed.attributes.description || '',
      tags: parsed.attributes.tags || [],
      readTime: parsed.attributes.readTime || '3 min read',
      image: articleImage,
      body: parsed.body,
    });
  }

  // Sort articles by date descending
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug);
}

