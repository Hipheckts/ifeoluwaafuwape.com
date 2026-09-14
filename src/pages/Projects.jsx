import React from 'react';
import { ExternalLink, Github, Package } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Flutter 2FA",
      category: "Pub.dev Package",
      link: "https://pub.dev/packages/flutter_2fa",
      github: "https://github.com/Hipheckts/Flutter-2FA",
      version: "v1.0.4",
      description: "🔐 Open-source Dart package to help developers add Two-Factor Authentication (2FA) in any Flutter project with ease. Uses Firebase Auth and Firestore to encrypt and store 2FA secrets and generate QR codes.",
      tags: ["Flutter", "Dart", "Firebase", "Firestore", "Authentication"]
    },
    {
      title: "Energy Analysis Web Platform",
      category: "Client Application",
      version: "Northumbria Univ",
      description: "Web application developed for Northumbria University to facilitate energy analysis for undergraduate students studying energy and environmental engineering.",
      tags: ["React", "JavaScript", "Data Visualization", "Energy Analysis"]
    },
    {
      title: "Entrepreneurs Trust Fund (ETF)",
      category: "Enterprise Web & Mobile",
      version: "300k+ Users",
      description: "Web & mobile apps platform for Africa's Young Entrepreneurs, serving over 300,000 active users across Africa with mobile app downloads on Google Play Store and Apple App Store.",
      tags: ["ReactJS", "Flutter", "Laravel PHP", "MySQL", "AWS"]
    },
    {
      title: "MTN Nigeria Service Web Apps",
      category: "Enterprise Solution",
      version: "70M+ User Base",
      description: "Flagship web and mobile service applications for MTN Nigeria, optimizing digital customer experience for up to 70 million subscribers.",
      tags: ["JavaScript", "TypeScript", "NodeJS", "PHP", "Microservices"]
    }
  ];

  return (
    <div className="container">
      <section className="section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">projects_&_packages</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Selected open-source packages, client platforms, and enterprise applications built throughout my engineering career.
        </p>

        <div className="grid-cards">
          {projects.map((proj, index) => (
            <div key={index} className="card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span className="tag" style={{ fontSize: '0.7rem' }}>
                    {proj.category}
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="GitHub Repository">
                        <Github size={16} />
                      </a>
                    )}
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="External Link">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>
                  <span>{proj.title}</span>
                  {proj.version && (
                    <span className="item-date" style={{ fontSize: '0.75rem' }}>
                      {proj.version}
                    </span>
                  )}
                </h3>
                <p className="card-desc" style={{ marginTop: '0.65rem' }}>
                  {proj.description}
                </p>
              </div>

              <div className="tags-list">
                {proj.tags.map((tag) => (
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
