import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Mail, ShieldCheck, Radio, Mic, ArrowRight, ExternalLink } from 'lucide-react';
import { getAllArticles } from '../utils/markdownLoader';

export default function Home() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="profile-header">
        <div className="developer-tag">whoami</div>
        <h1 className="hero-name">Ifeoluwa Afuwape</h1>
        <p className="hero-title">
          Engineering Manager & Certified Cloud Architect (GCP / AWS)
        </p>
        <p className="hero-bio">
          UK-qualified engineering manager and technology leader with about ten years of experience specializing in designing and deploying high-scale, mission-critical systems across regulated financial services, FinTech, Higher Ed, and enterprise domains.
        </p>

        <div>
          <span className="status-badge">
            <span className="status-indicator"></span>
            <span>Web Development Manager @ Newcastle University • Newcastle upon Tyne, UK</span>
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
          <a href="https://www.youtube.com/@if_heckt" target="_blank" rel="noreferrer" className="social-btn">
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
          <h2 className="section-title">certifications_&_architecture</h2>
        </div>
        <div className="grid-cards">
          <div className="card">
            <div>
              <div className="card-title">
                <span>Google Cloud Professional Cloud Architect</span>
                <ShieldCheck size={18} />
              </div>
              <p className="card-desc" style={{ marginTop: '0.5rem' }}>
                Google Cloud Platform • Issued Jan 2026
              </p>
            </div>
            <div className="tags-list">
              <span className="tag">Distributed Systems</span>
              <span className="tag">GCP</span>
              <span className="tag">IaC</span>
            </div>
          </div>

          <div className="card">
            <div>
              <div className="card-title">
                <span>Google Cloud Digital Leader</span>
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

      {/* TechChat Podcast Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Radio size={18} style={{ color: 'var(--accent)' }} /> techchat_podcast
          </h2>
          <Link to="/podcast" className="see-all-link">
            all_episodes →
          </Link>
        </div>

        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            backgroundColor: '#000',
          }}
        >
          <iframe
            title="TechChat with Ife Latest"
            src="https://www.youtube.com/embed?listType=user_uploads&list=if_heckt"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Conference Speaking Highlight */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Mic size={18} style={{ color: 'var(--accent)' }} /> conference_speaking
          </h2>
          <Link to="/speaking" className="see-all-link">
            view_talks →
          </Link>
        </div>

        <div className="card">
          <div className="item-header">
            <span className="item-title" style={{ fontSize: '1.05rem' }}>
              AI Adoption & Enterprise Technology Strategy in the UK North East
            </span>
            <span className="item-date">TechNExt 2026</span>
          </div>
          <p className="card-desc" style={{ marginTop: '0.5rem' }}>
            Panel discussion on deploying AI tools and advanced analytics within heavily regulated enterprise domains, bridging business requirements with distributed systems design.
          </p>
          <div className="tags-list" style={{ marginTop: '0.75rem' }}>
            <span className="tag">#AI Transformation</span>
            <span className="tag">#TechNExt 2026</span>
            <span className="tag">#Enterprise Architecture</span>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">articles_&_writing</h2>
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
    </div>
  );
}
