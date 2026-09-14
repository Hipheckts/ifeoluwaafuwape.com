import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "MTN Nigeria High-Scale Ecosystem",
      category: "Enterprise Solution",
      version: "70M+ Subscribers",
      description: "Flagship full-stack web and mobile platform for MTN Nigeria. Architected Docker microservices, real-time location-tracking ingestion, OneSignal notification channels, and C# .NET payment gateway integrations (Stripe, Paystack, PayPal). Serves 70M+ subscriber base.",
      tags: ["TypeScript", "Node.js", "C# .NET", "Docker", "Cloudflare", "React Native"]
    },
    {
      title: "Entrepreneurs Trust Fund (ETF)",
      category: "Enterprise Platform",
      version: "300k+ Active Users",
      description: "Cross-border web and mobile application ecosystem for Africa's Young Entrepreneurs serving 300,000+ active users. Migrated entire mobile application ecosystem from Flutter to React Native, standardizing codebases across iOS and Android.",
      tags: ["React Native", "Laravel PHP", "AWS", "React.js", "MySQL"]
    },
    {
      title: "Lawyers NowNow Mobile App",
      category: "Award-Winning CSR App",
      version: "Headfort Foundation",
      description: "Award-winning CSR mobile application connecting low-income citizens with pro-bono defense lawyers across Nigeria for emergency legal intervention, prison reform, and police brutality advocacy.",
      tags: ["React Native", "Node.js", "Social Impact", "Geolocation"]
    },
    {
      title: "Northumbria Energy Analytics Engine",
      category: "Contract Research App",
      version: "Northumbria Univ",
      description: "Data-driven web application for large-scale energy analysis. Built real-time weather and energy REST/GraphQL API data ingestion pipelines paired with client-side mathematical models to predict energy consumption trends.",
      tags: ["React", "TypeScript", "GraphQL", "Data Engineering", "Web Workers"]
    },
    {
      title: "Flutter 2FA Package",
      category: "Pub.dev Open Source",
      link: "https://pub.dev/packages/flutter_2fa",
      github: "https://github.com/Hipheckts/Flutter-2FA",
      version: "v1.0.4",
      description: "🔐 Open-source Dart package to help developers integrate Two-Factor Authentication (2FA) into any Flutter app with Firebase Auth and Firestore secret encryption.",
      tags: ["Flutter", "Dart", "Firebase", "Firestore", "Authentication"]
    },
    {
      title: "University E-Voting System",
      category: "Civic Tech Platform",
      version: "FUNAAB Student Union",
      description: "First automated digital e-voting system developed for the Federal University of Agriculture Abeokuta student union election during Mozilla Student Ambassador program.",
      tags: ["PHP", "JavaScript", "Security", "MySQL"]
    }
  ];

  return (
    <div className="container">
      <section className="section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">featured_projects</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Key enterprise platforms, open-source packages, and award-winning solutions built across my engineering tenure.
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
                <h3 className="card-title" style={{ fontSize: '1.05rem' }}>
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
