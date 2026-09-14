import React from 'react';

export default function Experience() {
  const capabilities = [
    {
      title: "Solution Architecture",
      details: "Enterprise System Design, Microservices/Distributed Systems, High-Throughput Data Pipelines (Kafka/PubSub), Resilience Engineering, Cloud Migration Strategy (Lift & Shift to Modernization)."
    },
    {
      title: "Cloud Computing",
      details: "GCP/AWS (GKE, EKS, Serverless Compute, IAM, VPC), Infrastructure as Code (IaC - Terraform), Cloud Security & Compliance."
    },
    {
      title: "Engineering Stacks",
      details: "Full-Stack Development (TypeScript, JavaScript, Python, PHP, Swift, C# .NET), Modern Frameworks (Node.js, NextJS, React Native, Flutter, Laravel, Vue.js)."
    },
    {
      title: "DevOps & Operations",
      details: "CI/CD Automation (GitHub Actions, Codemagic), Observability (Monitoring/Logging), Capacity Planning, Cost Optimization, High Availability Deployment."
    }
  ];

  const experiences = [
    {
      title: "Web Development Manager",
      company: "Newcastle University, Newcastle",
      term: "July 2024 – Till date",
      highlights: [
        "Strategic Architecture & Modernization: Led the architectural overhaul and migration of high-traffic legacy on-premises web estates to scalable, hybrid cloud environments (AWS/Azure), significantly improving global latency, operational resilience, and long-term cost.",
        "Event-Driven Ecosystem Delivery: Designed and implemented modern, containerized (Docker/K8s) application ecosystems using React Native/Laravel stacks. These high-availability deployments underpinned critical university operations (e.g., admissions, event management).",
        "Technical Leadership & Governance: Directed multidisciplinary engineering team, establishing comprehensive architectural blueprints, quality gates, automated testing strategies, and technical roadmaps.",
        "DevOps & Deployment Pipeline Excellence: Instituted and standardized end-to-end DevOps pipelines (CI/CD, IaC, Observability), shifting the deployment model from manual processes to fully automated, zero-downtime workflows across production environments."
      ]
    },
    {
      title: "Software Engineer (Contract)",
      company: "Northumbria University, Newcastle",
      term: "May 2023 – July 2023",
      highlights: [
        "Data Ingestion & Analytics Architecture: Designed and built a data-driven web application dedicated to large-scale energy analysis, establishing the solution design from problem statement to production to modernize research capabilities.",
        "API Integration & Predictive Modelling: Engineered real-time data ingestion pipelines by integrating external, high-throughput weather and energy-related REST/GraphQL APIs with client-side mathematical forecasting models.",
        "Technical Decision-Making: Formulated technical strategies and led architectural decision-making in close collaboration with the engineering faculty."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Varens Technologies",
      term: "July 2021 – April 2024",
      highlights: [
        "High-Scale Distributed Systems: Directed an engineering team of 8 developers in designing and scaling a flagship full-stack web and mobile ecosystem for MTN Nigeria, architecting Docker containerised microservices to support a 70-million user customer base.",
        "Event-Driven Services & Real-Time Ingestion: Spearheaded the engineering of a React Native mobile platform featuring real-time location-tracking pipelines and OneSignal asynchronous notification systems.",
        "Enterprise Backend & Payment Gateways: Led architectural design of backend services in C# .NET and TypeScript, integrating multi-gateway payment processing (Stripe, Paystack, PayPal).",
        "Performance & Edge Optimization: Architected image processing workflows using the Cloudflare Images API at network edge, drastically reducing content delivery latency and bandwidth overhead."
      ]
    },
    {
      title: "Software Engineer & IT Manager",
      company: "Africa’s Young Entrepreneurs",
      term: "February 2019 – July 2021",
      subRoles: "IT Manager (Sep 2019 – Jul 2021) | Software Developer (Feb 2019 – Sep 2019)",
      highlights: [
        "Global Project Delivery: Oversaw the architectural design and SDLC for greenfield digital platforms targeted at international entrepreneurs.",
        "AWS Cloud Architecture & Edge Security: Masterminded end-to-end setup and operational monitoring of enterprise AWS cloud infrastructure, integrating Cloudflare WAF and advanced DDoS protection.",
        "Cross-Border Engineering Leadership: Directed software engineering teams distributed across South Africa and India within an Agile framework.",
        "Mobile Platform Migration: Led the strategic engineering initiative to migrate the Entrepreneurs Trust Fund mobile ecosystem (300k+ active users) from Flutter to React Native, improving runtime performance across diverse hardware.",
        "API Design & Enterprise Integration: Architected internal CRM and automated template engines utilizing Laravel PHP and React.js microservices."
      ]
    },
    {
      title: "Software Developer",
      company: "Reel and Rith Limited",
      term: "June 2017 – November 2017",
      highlights: [
        "Cross-Functional & Global Delivery: Collaborated within an agile team delivering high-impact web ecosystems for local and international clients.",
        "Full-Stack Implementation: Developed client-side responsive interfaces using React.js and Vue.js, with Node.js and Laravel PHP backends."
      ]
    }
  ];

  const volunteering = [
    {
      role: "Technical Writer",
      organization: "SEEGOCLOUD",
      term: "April 2023 – July 2024",
      description: "Published tutorial videos and technical guides to educate developers on Segocloud infrastructure products."
    },
    {
      role: "IT Manager",
      organization: "Headfort Foundation for Justice",
      term: "2018 – 2022",
      description: "Developed the foundation website and CSR mobile application 'Lawyers NowNow' which won multiple awards for interventions on police brutality, human rights advocacy, and prison reforms."
    },
    {
      role: "Master Trainer (Python)",
      organization: "CODELAGOS, Ready, Set, Work",
      term: "2017 – 2018",
      description: "Trained and supported over 200 developers and public-school teachers towards training up to 1 million Lagos residents in public schools on how to code."
    },
    {
      role: "Facilitator (Python & Web Design)",
      organization: "Innovation Hub, Lekki, Lagos",
      term: "2016 – 2018",
      description: "Facilitated web design and Python programming workshops for teens and youths."
    },
    {
      role: "Facilitator (Web Design)",
      organization: "GIZ (German Embassy Program, Nigeria)",
      term: "2016 – 2018",
      description: "Volunteered as a facilitator training sponsored youths on web development and computing."
    },
    {
      role: "ICT Manager",
      organization: "College of Engineering, FUNAAB",
      term: "2016 – 2018",
      description: "Organized university-wide computer skills and programming trainings."
    },
    {
      role: "Google Developers Group (FUNAAB) Lead",
      organization: "Google Developers Group",
      term: "2015 – 2017",
      description: "Trained students on Google technologies and organized events like Google Summer of Code and Google I/O Extended."
    },
    {
      role: "Mozilla Student Ambassador",
      organization: "Mozilla Community",
      term: "2015 – 2017",
      description: "Promoted open web awareness and developed the first e-voting system for the university student union."
    }
  ];

  return (
    <div className="container">
      {/* Profile Overview */}
      <section className="section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">professional_capabilities</h2>
        </div>
        <div className="grid-cards">
          {capabilities.map((cap, index) => (
            <div key={index} className="card">
              <h3 className="card-title" style={{ fontSize: '1.05rem' }}>{cap.title}</h3>
              <p className="card-desc" style={{ marginTop: '0.4rem', fontSize: '0.85rem' }}>{cap.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Work Experience */}
      <section className="section">
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
              {exp.subRoles && (
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {exp.subRoles}
                </span>
              )}
              <ul style={{ marginTop: '0.65rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {exp.highlights.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem', lineHeight: '1.6' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteering & Community Leadership */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">volunteering_&_community</h2>
        </div>
        <div className="grid-cards">
          {volunteering.map((item, index) => (
            <div key={index} className="card">
              <div>
                <div className="item-header" style={{ marginBottom: '0.35rem' }}>
                  <span className="card-title" style={{ fontSize: '0.95rem' }}>{item.role}</span>
                  <span className="item-date">{item.term}</span>
                </div>
                <span className="item-subtitle" style={{ fontSize: '0.85rem' }}>{item.organization}</span>
                <p className="card-desc" style={{ marginTop: '0.5rem' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">education_&_certifications</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="item-header">
              <span className="item-title">Google Cloud Professional Cloud Architect Certification</span>
              <span className="item-date">January 2026</span>
            </div>
            <span className="item-subtitle">Issued by Google Cloud</span>
          </div>

          <div className="timeline-item">
            <div className="item-header">
              <span className="item-title">Google Cloud Digital Leader Professional Certification</span>
              <span className="item-date">April 2025</span>
            </div>
            <span className="item-subtitle">Issued by Google Cloud</span>
          </div>

          <div className="timeline-item">
            <div className="item-header">
              <span className="item-title">MSc. Engineering Management</span>
              <span className="item-date">Sep 2022 – Jun 2024</span>
            </div>
            <span className="item-subtitle">Northumbria University, Newcastle upon Tyne, UK</span>
          </div>

          <div className="timeline-item">
            <div className="item-header">
              <span className="item-title">BEng. Agricultural Engineering</span>
              <span className="item-date">Nov 2013 – Apr 2018</span>
            </div>
            <span className="item-subtitle">Federal University of Agriculture, Abeokuta</span>
          </div>
        </div>
      </section>
    </div>
  );
}
