import React from 'react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <span>© {new Date().getFullYear()} Ifeoluwa Afuwape • ifeoluwaafuwape.xyz</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="https://github.com/hipheckts" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/ifeoluwa-afuwape" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="https://www.youtube.com/@if_heckt" target="_blank" rel="noreferrer" aria-label="YouTube Channel">
            <Youtube size={16} />
          </a>
          <a href="mailto:hipheckt@gmail.com" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
