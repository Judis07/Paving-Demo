import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v8M8 12h8" />
              </svg>
              {siteConfig.fullName}
            </div>
            <p className="footer-desc">Verifiable carbon-negative infrastructure materials designed to divert plastic waste and engineer structural durability.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Product Matrix</h4>
            <ul className="footer-links">
              <li><a href="#products" className="footer-link">PaveEco™ Classic</a></li>
              <li><a href="#products" className="footer-link">HydraPave™ Permeable</a></li>
              <li><a href="#products" className="footer-link">GeoBorder™ Trim</a></li>
              <li><a href="#products" className="footer-link">Urban Path™ Series</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Science & Integrity</h4>
            <ul className="footer-links">
              <li><a href="#tech" className="footer-link">Cold Polymerization</a></li>
              <li><a href="#tech" className="footer-link">LCA Environmental Audit</a></li>
              <li><a href="#showcase" className="footer-link">LEED Point Allocations</a></li>
              <li><a href="#showcase" className="footer-link">Case Studies</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Our Mission</a></li>
              <li><a href="#" className="footer-link">Research Partners</a></li>
              <li><a href="#" className="footer-link">Media Kit</a></li>
              <li><a href="#contact" className="footer-link">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} {siteConfig.companyName} All rights reserved.
          </div>
          <ul className="footer-legal">
            <li><a href="#" className="footer-legal-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-legal-link">Terms of Service</a></li>
            <li><a href="#" className="footer-legal-link">ESG Declarations</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
