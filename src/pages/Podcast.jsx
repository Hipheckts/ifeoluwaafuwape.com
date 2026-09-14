import React from 'react';
import { Youtube, ExternalLink, Play, Radio } from 'lucide-react';

export default function Podcast() {
  const episodes = [
    {
      title: "Self-Taught: From One Room in Lagos to UK Tech Leader | A Father's Legacy",
      id: "HAoHfqRWkO1MWhhKdUhg3GzPoWA1_4N7Jn3mkk1ZY3RA", // video ID / embed
      embedUrl: "https://www.youtube.com/embed/videoseries?list=PL4n4tM-nL4rF2kZ5Y_M-s7z2qZ_5z5z5z", // fallback playlist embed
      fallbackUrl: "https://www.youtube.com/@if_heckt",
      description: "In this deeply personal episode of TechChat with Ife, I share my journey from learning to code in a single room in Lagos to becoming an Engineering Manager & Certified Cloud Architect in the UK."
    },
    {
      title: "Innovating the Future: Becoming an Innovator & Technology Strategist",
      id: "innovating-future-techchat",
      embedUrl: "https://www.youtube.com/embed?listType=user_uploads&list=if_heckt",
      fallbackUrl: "https://www.youtube.com/@if_heckt",
      description: "Exploring enterprise technology trends, microservices, cloud migrations, and advice for engineers aspiring to step into technical leadership roles."
    },
    {
      title: "TechChat with Ife: AI Transformation & Modern Engineering Stacks",
      id: "ai-transformation-techchat",
      embedUrl: "https://www.youtube.com/embed?listType=user_uploads&list=if_heckt",
      fallbackUrl: "https://www.youtube.com/@if_heckt",
      description: "Deep dive into real-world AI integration in regulated industries, Cloudflare edge compute, and high-concurrency microservices design."
    }
  ];

  return (
    <div className="container">
      <section className="section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">
            <Radio size={20} style={{ color: 'var(--accent)' }} /> techchat_with_ife
          </h2>
          <a
            href="https://www.youtube.com/@if_heckt"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
          >
            <Youtube size={16} /> Subscribe on YouTube <ExternalLink size={12} />
          </a>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95 realm' }}>
          <strong>TechChat with Ife</strong> is my podcast and video series exploring software architecture, engineering leadership, cloud computing, career growth, and emerging technologies.
        </p>

        {/* Featured YouTube Channel Embed Player Container */}
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            backgroundColor: '#000',
            marginBottom: '3rem',
          }}
        >
          <iframe
            title="TechChat with Ife - Latest Videos"
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

        {/* Episode List */}
        <div className="section-header">
          <h3 className="section-title">episodes_&_discussions</h3>
        </div>

        <div className="articles-list">
          {episodes.map((ep, index) => (
            <div key={index} className="article-card" style={{ cursor: 'default' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="tag" style={{ fontSize: '0.7rem' }}>
                  Episode #{index + 1}
                </span>
                <span className="article-meta">• YouTube Video</span>
              </div>

              <h4 className="article-title">{ep.title}</h4>
              <p className="article-excerpt" style={{ marginTop: '0.5rem' }}>
                {ep.description}
              </p>

              <div style={{ marginTop: '1rem' }}>
                <a
                  href="https://www.youtube.com/@if_heckt"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  style={{ display: 'inline-flex', padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                >
                  <Play size={14} /> Watch Episode on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
