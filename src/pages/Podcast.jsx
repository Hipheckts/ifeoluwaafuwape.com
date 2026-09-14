import React, { useState } from 'react';
import { Youtube, ExternalLink, Play, Radio, Clock, User } from 'lucide-react';

export default function Podcast() {
  const playlistId = "PLE1d6q-CHei7ryhzDE6vhtlhC0vAzqoCE";
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0);

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
      guest: "Patrick Nwafor",
      duration: "1:21:35",
      index: 7,
      description: "Masterclass on personal branding, digital leverage, content strategy, and maximizing social platforms for tech professionals."
    },
    {
      title: "TechChat with Ife: Dream Big, Put in the Work",
      guest: "Yetunde Shopeju",
      duration: "33:13",
      index: 8,
      description: "Inspiring conversation on grit, execution, discipline, and building high-impact tech careers."
    }
  ];

  const totalEpisodes = episodes.length;
  const currentEpisode = episodes[activeEpisodeIndex] || episodes[0];
  const currentEpisodeNumber = totalEpisodes - currentEpisode.index;

  const playEpisode = (index) => {
    setActiveEpisodeIndex(index);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <section className="section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">
            <Radio size={20} style={{ color: 'var(--accent)' }} /> techchat_with_ife
          </h2>
          <a
            href={`https://www.youtube.com/playlist?list=${playlistId}`}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
          >
            <Youtube size={16} /> Open YouTube Playlist <ExternalLink size={12} />
          </a>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          <strong>TechChat with Ife</strong> is a video podcast series hosted by <strong>Ifeoluwa Afuwape</strong> exploring software architecture, AI transformation, cybersecurity, global tech careers, and engineering leadership.
        </p>

        {/* Master Interactive Player */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '0.75rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span className="developer-tag">// Currently Loaded: Episode #{currentEpisodeNumber}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {currentEpisode.guest} ({currentEpisode.duration})
            </span>
          </div>

          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              border: '1px solid var(--border-focus)',
              backgroundColor: '#000',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <iframe
              key={activeEpisodeIndex}
              title={currentEpisode.title}
              src={`https://www.youtube.com/embed/videoseries?list=${playlistId}&index=${activeEpisodeIndex}&autoplay=1`}
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

          <div
            style={{
              marginTop: '0.85rem',
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
            }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              Episode #{currentEpisodeNumber}: {currentEpisode.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {currentEpisode.description}
            </p>
          </div>
        </div>

        {/* Episodes Directory */}
        <div className="section-header">
          <h3 className="section-title">all_episodes ({totalEpisodes})</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {episodes.map((ep) => {
            const isActive = ep.index === activeEpisodeIndex;
            const episodeNumber = totalEpisodes - ep.index;

            return (
              <div
                key={ep.index}
                style={{
                  backgroundColor: isActive ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                  border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-color)'}`,
                  borderRadius: '10px',
                  padding: '1.25rem',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span className="tag" style={{ fontSize: '0.75rem', fontWeight: 600, backgroundColor: isActive ? 'var(--accent)' : 'var(--tag-bg)', color: isActive ? 'var(--accent-inverse)' : 'var(--text-secondary)' }}>
                    Episode #{episodeNumber} {isActive ? '• Active' : ''}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <User size={13} /> {ep.guest}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={13} /> {ep.duration}
                    </span>
                  </div>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {ep.title}
                </h4>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1rem' }}>
                  {ep.description}
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => playEpisode(ep.index)}
                    className="social-btn"
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.85rem',
                      backgroundColor: isActive ? 'var(--accent)' : 'var(--bg-primary)',
                      color: isActive ? 'var(--accent-inverse)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      border: '1px solid var(--border-focus)',
                    }}
                  >
                    <Play size={14} /> {isActive ? 'Now Playing' : `Play Episode #${episodeNumber}`}
                  </button>

                  <a
                    href={`https://www.youtube.com/watch?v=playlist&list=${playlistId}&index=${ep.index}`}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                  >
                    <Youtube size={14} /> Watch on YouTube <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
