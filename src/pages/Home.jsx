import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Mail, FileText, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { getAllArticles } from '../utils/markdownLoader';

export default function Home() {
  const articles = getAllArticles().slice(0, 2);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="profile-header">
        <div className="developer-tag">whoami</div>
        <h1 className="hero-name">Ifeoluwa Afuwape</h1>
        <p className="hero-title">
          Senior Software Engineer & Web Development Manager at Newcastle University
        </p>
        <p className="hero-bio">
          I build resilient cloud infrastructures, accessible web platforms, and mobile solutions. 
          GCP Certified Professional Cloud Architect with extensive experience leading engineering teams and building scalable web & mobile apps.
        </p>

        <div>
          <span className="status-badge">
            <span className="status-indicator"></span>
            <span>Based in Newcastle upon Tyne, UK</span>
          </span>
        </div>

        <div className="social-links">
          <a href="https://github.com/hipheckts" target="_blank" rel="noreferrer" className="social-btn">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ifeoluwa-afuwape" target="_blank" rel="noreferrer" className="social-btn">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.youtube.com/@hipheckt" target="_blank" rel="noreferrer" className="social-btn">
            <Youtube size={16} />
            <span>YouTube</span>
          </a>
          <a href="mailto:hipheckt@gmail.com" className="social-btn">
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="section" style={{ marginTop: '2.5rem' }}>
        <div className="section-header">
          <h2 className="section-title">certifications</h2>
        </div>
        <div className="grid-cards">
          <div className="card">
            <div>
              <div className="card-title">
                <span>GCP Professional Cloud Architect</span>
                <ShieldCheck size={18} />
              </div>
              <p className="card-desc" style={{ marginTop: '0.5rem' }}>
                Google Cloud Platform • Issued Jan 2026
              </p>
            </div>
            <div className="tags-list">
              <span className="tag">Cloud Architecture</span>
              <span className="tag">GCP</span>
              <span className="tag">DevOps</span>
            </div>
          </div>

          <div className="card">
            <div>
              <div className="card-title">
                <span>GCP Cloud Digital Leader</span>
                <ShieldCheck size={18} />
              </div>
              <p className="card-desc" style={{ marginTop: '0.5rem' }}>
                Google Cloud Platform • Issued Apr 2025
              </p>
            </div>
            <div className="tags-list">
              <span className="tag">Cloud Leadership</span>
              <span className="tag">Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">latest_articles</h2>
          <Link to="/articles" className="see-all-link">
            view_all →
          </Link>
        </div>

        <div className="articles-list">
          {articles.map((article) => (
            <Link key={article.slug} to={`/articles/${article.slug}`} className="article-card">
              <div className="article-meta">
                <span>{article.date}</span>
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
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">featured_projects</h2>
          <Link to="/projects" className="see-all-link">
            all_projects →
          </Link>
        </div>

        <div className="grid-cards">
          <div className="card">
            <div>
              <div className="card-title">
                <span>Flutter 2FA</span>
                <a href="https://pub.dev/packages/flutter_2fa" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="card-desc" style={{ marginTop: '0.5rem' }}>
                🔐 Open-source Dart package to add Two-Factor Authentication (2FA) in Flutter projects with ease via Firebase Auth and Firestore.
              </p>
            </div>
            <div className="tags-list">
              <span className="tag">Flutter</span>
              <span className="tag">Dart</span>
              <span className="tag">Firebase</span>
              <span className="tag">Firestore</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
