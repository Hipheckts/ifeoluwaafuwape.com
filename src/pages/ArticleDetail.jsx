import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { getArticleBySlug } from '../utils/markdownLoader';

import 'highlight.js/styles/github-dark.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <Link to="/articles" className="back-btn">
          <ArrowLeft size={16} /> back to articles
        </Link>
        <h1 style={{ fontFamily: 'var(--font-mono)', marginTop: '2rem' }}>404 — Article Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          The requested article standard could not be located.
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <article style={{ marginTop: '1.5rem' }}>
        <Link to="/articles" className="back-btn">
          <ArrowLeft size={16} /> back to /articles
        </Link>

        <header className="article-header">
          <div className="article-meta" style={{ marginBottom: '1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={14} /> {article.formattedDate || article.date}
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 className="article-full-title">{article.title}</h1>

          <div className="tags-list">
            {article.tags.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {article.body}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
