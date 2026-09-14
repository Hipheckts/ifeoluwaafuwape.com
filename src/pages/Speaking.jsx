import React from 'react';
import { Mic, Calendar, MapPin, ExternalLink, Video } from 'lucide-react';

export default function Speaking() {
  const talks = [
    {
      title: "AI Adoption & Enterprise Technology Strategy in the UK North East",
      event: "TechNExt 2026",
      role: "Panelist & Keynote Speaker",
      date: "June 2026",
      location: "Newcastle upon Tyne, UK",
      description: "Discussed practical strategies for deploying AI tools and advanced analytics within heavily regulated enterprise sectors, bridging executive strategy with executable cloud-native architectures.",
      tags: ["AI Strategy", "Enterprise Architecture", "Cloud Transformation"]
    },
    {
      title: "Self-Taught: From One Room in Lagos to UK Tech Leader | A Father's Legacy",
      event: "TechChat Keynote Series",
      role: "Featured Speaker",
      date: "March 2025",
      location: "Newcastle upon Tyne, UK",
      description: "Inspiring talk detailing my career journey from self-taught developer in Lagos to UK-qualified Engineering Manager and GCP Certified Professional Cloud Architect.",
      link: "https://www.youtube.com/@if_heckt",
      tags: ["Tech Leadership", "Career Journey", "Engineering Strategy"]
    },
    {
      title: "Building Scalable Web Applications & Cloud Architecture",
      event: "Google Developers Group (GDG) & Google I/O Extended",
      role: "Lead Speaker & Facilitator",
      date: "2016 – 2017",
      location: "Abeokuta, Nigeria",
      description: "Delivered hands-on sessions for university students and developers on Google Cloud Platform primitives, web performance optimization, and modern JavaScript frameworks.",
      tags: ["GCP", "Google Developers Group", "Web Engineering"]
    },
    {
      title: "Democratizing Code: Training 1 Million Lagos Residents",
      event: "CodeLagos Tech Summit",
      role: "Master Trainer (Python)",
      date: "2017 – 2018",
      location: "Lagos, Nigeria",
      description: "Trained over 200 developers and public-school teachers to facilitate Python programming education across public schools in Lagos State.",
      tags: ["Python", "Education", "Community Leadership"]
    },
    {
      title: "Youth Tech Empowerment & Web Development Stacks",
      event: "GIZ (German Embassy Program) & Innovation Hub",
      role: "Volunteering Workshop Lead",
      date: "2016 – 2018",
      location: "Lagos, Nigeria",
      description: "Led web development training sessions sponsored by GIZ to empower sponsored youths with modern computing skills.",
      tags: ["Web Design", "Python", "Social Impact"]
    }
  ];

  return (
    <div className="container">
      <section className="section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">speaking_&_conferences</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Keynotes, panel discussions, and technical workshops on cloud architecture, engineering leadership, web accessibility, and AI transformation.
        </p>

        <div className="timeline">
          {talks.map((talk, index) => (
            <div key={index} className="timeline-item">
              <div className="item-header">
                <span className="item-title" style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mic size={18} style={{ color: 'var(--accent)' }} />
                  {talk.title}
                </span>
                <span className="item-date">{talk.date}</span>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{talk.event}</span>
                <span>•</span>
                <span>{talk.role}</span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={12} /> {talk.location}
                </span>
              </div>

              <p className="item-description" style={{ marginTop: '0.65rem' }}>
                {talk.description}
              </p>

              {talk.link && (
                <div style={{ marginTop: '0.75rem' }}>
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    style={{ padding: '0.35rem 0.65rem', fontSize: '0.775rem' }}
                  >
                    <Video size={14} />
                    <span>Watch Talk on YouTube</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}

              <div className="tags-list" style={{ marginTop: '0.75rem' }}>
                {talk.tags.map((tag) => (
                  <span key={tag} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
