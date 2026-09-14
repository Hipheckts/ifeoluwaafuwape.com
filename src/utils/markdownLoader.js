import fm from 'front-matter';

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

    articles.push({
      slug,
      title: parsed.attributes.title || slug,
      date: parsed.attributes.date || '',
      description: parsed.attributes.description || '',
      tags: parsed.attributes.tags || [],
      readTime: parsed.attributes.readTime || '3 min read',
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
