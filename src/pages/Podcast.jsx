import React from 'react';
import { Youtube, ExternalLink, Play, Radio, Clock } from 'lucide-react';

export default function Podcast() {
  const playlistId = "PLE1d6q-CHei7ryhzDE6vhtlhC0vAzqoCE";
  const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;

  const episodes = [
    {
      title: "TechChat with Ife: Agentic AI - Game changer for Engineers",
      guest: "Adewale Abati (Ace)",
      duration: "43:25",
      index: 0,
      description: "Exploring the evolution of Agentic AI, its impact on software engineering jobs, data security, and maintaining foundational engineering skills alongside AI automation."
    },
    {
      title: "TechChat with Ife: Shaping your journey into global TECH",
      guest: "Uzoma James",
      duration: "38:26",
      index: 1,
      description: "Actionable guidance and career strategies for navigating transitions and building a successful career in the global technology industry."
    },
    {
      title: "TechChat with Ife: Tech Talent Opportunities",
      guest: "Ademulegun (Ade') Olowojoba",
      duration: "44:42",
      index: 2,
      description: "Unpacking emerging tech talent opportunities, skill demand in international markets, and strategies for career advancement."
    },
    {
      title: "TechChat with Ife: Your Security is Your Responsibility",
      guest: "Dr Iretioluwa Akerele",
      duration: "41:16",
      index: 3,
      description: "Essential cybersecurity practices, personal security responsibilities, data privacy, and shielding digital platforms from threats."
    },
    {
      title: "TechChat with Ife: Redefining the HUMAN role in an AI-POWERED World",
      guest: "Rob McCargow",
      duration: "30:59",
      index: 4,
      description: "Discussing human-AI collaboration, ethics, leadership, and how tech professionals can position themselves in an increasingly automated workforce."
    },
    {
      title: "Innovating the Future: Becoming an Innovator",
      guest: "Romano Pravdic",
      duration: "42:34",
      index: 5,
      description: "Insights into innovation mindset, building scalable tech products from scratch, and driving digital transformation."
    },
    {
      title: "Innovating the Future: Becoming an Innovator (Highlight Teaser)",
      guest: "Romano Pravdic",
      duration: "0:58",
      index: 6,
      description: "Key highlight and teaser on the innovation mindset and product strategy."
    },
    {
      title: "Maximising Social Media",
      guest: "Expert Panel",
      duration: "1:21:35",
      index: 7,
      description: "Masterclass on personal branding, digital leverage, content strategy, and maximizing social platforms for tech professionals."
    },
    {
      title: "TechChat with Ife: Dream Big, Put in the Work",
      guest: "Yetunde Shopeju & Panel",
      duration: "33:13",
      index: 8,
      description: "Inspiring conversation on grit, execution, discipline, and building high-impact tech careers."
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
            href={playlistUrl}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
          >
            <Youtube size={16} /> Open Full Playlist <ExternalLink size={12} />
          </a>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <strong>TechChat with Ife</strong> is a video podcast series hosted by <strong>Ifeoluwa Afuwape</strong> exploring software architecture, AI transformation, cybersecurity, global tech careers, and engineering leadership.
        </p>

        {/* Master Playlist Player */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="developer-tag" style={{ marginBottom: '0.75rem' }}>// Full Playlist Stream</div>
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              backgroundColor: '#000',
            }}
          >
            <iframe
              title="TechChat with Ife Master Playlist"
              src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
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
        </div>

        {/* Individual Episode iFrames Grid */}
        <div className="section-header">
          <h3 className="section-title">all_episodes ({episodes.length})</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {episodes.map((ep) => (
            <div
              key={ep.index}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="tag" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  Episode #{ep.index + 1}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} /> {ep.duration}
                  </span>
                  <span>•</span>
                  <span>Guest: {ep.guest}</span>
                </div>
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {ep.title}
              </h4>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                {ep.description}
              </p>

              {/* Individual Episode iframe Embed */}
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: '#000',
                  marginBottom: '1rem',
                }}
              >
                <iframe
                  title={ep.title}
                  src={`https://www.youtube.com/embed/videoseries?list=${playlistId}&index=${ep.index}`}
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

              <div>
                <a
                  href={`${playlistUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                >
                  <Play size={14} /> Watch Episode #{ep.index + 1} on YouTube <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
