import { useState, type FormEvent } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'commercial'
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="cta-section">
      <div className="container cta-container">
        <h2 className="cta-title text-gradient-light">Let's Build a Greener Future Together.</h2>
        <p className="cta-desc">Work with {siteConfig.fullName} to replace standard, high-carbon concrete tiles with durable, beautifully-engineered carbon-negative structures.</p>
        
        <div className="cta-form-container">
          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <h3 style={{ color: 'var(--white)', fontSize: '20px', marginBottom: '8px' }}>Consultation Booked</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Thank you, {formData.name}. Our materials science leads will reach out within one business day.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Work Email</label>
                <input 
                  type="email" 
                  className="form-input" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your professional email"
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Sector Type</label>
                <select 
                  className="form-input"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  style={{ appearance: 'none', background: 'rgba(255,255,255,0.08) url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'></polyline></svg>") no-repeat right 16px center/16px' }}
                >
                  <option value="commercial" style={{background: 'var(--primary)'}}>Commercial Developer</option>
                  <option value="public" style={{background: 'var(--primary)'}}>Municipal / Public Agency</option>
                  <option value="architect" style={{background: 'var(--primary)'}}>Architecture Practice</option>
                  <option value="contractor" style={{background: 'var(--primary)'}}>General Contractor</option>
                </select>
              </div>
              <button type="submit" className="form-btn">Book Consultation</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
