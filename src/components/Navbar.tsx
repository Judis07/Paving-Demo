import { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          {siteConfig.brandName}<span>{siteConfig.brandSuffix}</span>
        </a>
        
        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#problem" className="nav-link" onClick={() => setMobileMenuOpen(false)}>The Challenge</a></li>
          <li><a href="#solution" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Process</a></li>
          <li><a href="#impact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Impact</a></li>
          <li><a href="#products" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
          <li><a href="#tech" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Technology</a></li>
          <li><a href="#showcase" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Book Consultation</a></li>
        </ul>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
