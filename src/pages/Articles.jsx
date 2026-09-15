import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag } from 'lucide-react';
import { getAllArticles } from '../utils/markdownLoader';

export default function Articles() {
  const articles = getAllArticles();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  // Extract all unique tags across articles
  const allTags = Array.from(
    new Set(articles.flatMap((article) => article.tags || []))
  );

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag ? article.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="container">
      <section className="section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">articles_&_writing</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          Thoughts, technical tutorials, and insights on cloud architecture, software engineering, mobile development, and web accessibility.
        </p>

        {/* Search & Tag Filters */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              padding: '0.6rem 0.85rem',
              borderRadius: '6px',
              marginBottom: '1rem',
            }}
          >
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                width: '100%',
              }}
            />
          </div>

          <div className="tags-list">
            <button
              onClick={() => setSelectedTag(null)}
              className="tag"
              style={{
                cursor: 'pointer',
                backgroundColor: selectedTag === null ? 'var(--accent)' : 'var(--tag-bg)',
                color: selectedTag === null ? 'var(--accent-inverse)' : 'var(--text-secondary)',
              }}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className="tag"
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedTag === tag ? 'var(--accent)' : 'var(--tag-bg)',
                  color: selectedTag === tag ? 'var(--accent-inverse)' : 'var(--text-secondary)',
                }}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="articles-list">
          {filteredArticles.length === 0 ? (
            <div style={{ padding: '2rem 0', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              No articles found matching your criteria.
            </div>
          ) : (
            filteredArticles.map((article) => (
              <Link key={article.slug} to={`/articles/${article.slug}`} className="article-card">
                <div className="article-meta">
                  <span>{article.formattedDate || article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.description}</p>
                <div className="tags-list" style={{ marginTop: '0.75rem' }}>
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
