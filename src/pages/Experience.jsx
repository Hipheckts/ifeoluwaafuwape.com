import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: "Web Development Manager",
      company: "Newcastle University",
      term: "July 2024 - Present",
      description: "Managing team members, project management and workflow planning to ensure the smooth running of the Web Development team. Leading the maintenance of the University's web presence and digital products with emphasis on accessibility (WCAG AA), SEO, performance, and cross-browser/device compatibility."
    },
    {
      title: "Contract Software Engineer",
      company: "Northumbria University",
      term: "May 2023 - Aug 2023",
      description: "Contracted by Northumbria University to develop a web application for energy analysis to improve undergraduate students' study of energy and sustainability."
    },
    {
      title: "Software Engineer",
      company: "Varens Technologies",
      term: "Jul 2021 - Nov 2022",
      description: "Led a team of 8 software developers in the development of flagship web and mobile service applications for MTN Nigeria, supporting a customer base of over 70 million users."
    },
    {
      title: "Software Engineer & IT Manager",
      company: "Africa's Young Entrepreneurs",
      term: "Feb 2018 - Jul 2021",
      description: "Oversaw setup, deployment, and management of organizational technology projects. Led agile engineering team members across South Africa and India."
    },
    {
      title: "Software Engineer",
      company: "LMS Solutions (India) Pvt. Ltd.",
      term: "Jun 2019 - Sep 2019",
      description: "Led development of Entrepreneurs Trust Fund web and mobile applications using ReactJS, Flutter, and Laravel PHP, serving over 300,000 active users across Africa and 20k+ downloads on app stores."
    }
  ];

  const certifications = [
    {
      title: "Google Cloud Platform - Professional Cloud Architect",
      organizer: "Google Cloud",
      when: "January 2026"
    },
    {
      title: "Google Cloud Platform - Cloud Digital Leader",
      organizer: "Google Cloud",
      when: "April 2025"
    },
    {
      title: "DevOps Essentials",
      organizer: "IBM",
      when: "June 2024"
    },
    {
      title: "Flutter Certification",
      organizer: "Testdom",
      when: "February 2024"
    },
    {
      title: "iOS Mobile Application Development",
      organizer: "Meta",
      when: "December 2022"
    }
  ];

  const educations = [
    {
      degree: "MSc. Engineering Management",
      institution: "Northumbria University, Newcastle Upon Tyne, UK",
      term: "2022 - 2024"
    },
    {
      degree: "BEng. Agricultural Engineering",
      institution: "Federal University of Agriculture, Abeokuta",
      term: "2013 - 2018"
    }
  ];

  const skillCategories = [
    {
      name: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "React JS", "VueJS", "NodeJS", ".NET", "Python", "PHP", "Laravel", "Flutter", "React Native", "Dart", "SwiftUI", "GraphQL", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      name: "Tools & Infrastructure",
      skills: ["GCP", "AWS", "Docker", "Kubernetes", "Firebase", "Firestore", "Cloudflare", "Git", "Codemagic CI/CD", "Expo EAS", "Superbase", "Algolia"]
    },
    {
      name: "Management & Architecture",
      skills: ["Cloud Architecture", "Agile Methodologies", "DevOps Essentials", "Web Accessibility (WCAG)", "SEO Strategy", "Software Architecture"]
    }
  ];

  return (
    <div className="container">
      {/* Experience Section */}
      <section className="section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">work_experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="item-header">
                <span className="item-title">{exp.title}</span>
                <span className="item-date">{exp.term}</span>
              </div>
              <span className="item-subtitle">@ {exp.company}</span>
              <p className="item-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">certifications_&_licenses</h2>
        </div>
        <div className="timeline">
          {certifications.map((cert, index) => (
            <div key={index} className="timeline-item">
              <div className="item-header">
                <span className="item-title">{cert.title}</span>
                <span className="item-date">{cert.when}</span>
              </div>
              <span className="item-subtitle">Issued by {cert.organizer}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">skills_&_technologies</h2>
        </div>
        <div>
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-name">// {cat.name}</h3>
              <div className="tags-list">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">education</h2>
        </div>
        <div className="timeline">
          {educations.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="item-header">
                <span className="item-title">{edu.degree}</span>
                <span className="item-date">{edu.term}</span>
              </div>
              <span className="item-subtitle">{edu.institution}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
