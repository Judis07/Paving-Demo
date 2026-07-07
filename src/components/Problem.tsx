import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export default function Problem() {
  const [problemTab, setProblemTab] = useState<'traditional' | 'innovative'>('innovative');

  return (
    <section id="problem">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gradient">The Infrastructure Paradox</h2>
          <p>Traditional concrete and asphalt are climate disasters, producing over 8% of global CO2 emissions. Meanwhile, municipal plastic landfills are overflowing. Here is the contrast:</p>
        </motion.div>

        <motion.div 
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{ display: 'inline-flex', background: 'var(--bg-slate)', borderRadius: '100px', padding: '6px' }}>
            <button 
              className={`filter-btn ${problemTab === 'traditional' ? 'active' : ''}`}
              onClick={() => setProblemTab('traditional')}
              style={{ padding: '8px 20px', borderRadius: '100px', fontSize: '13px' }}
            >
              Traditional Concrete
            </button>
            <button 
              className={`filter-btn ${problemTab === 'innovative' ? 'active' : ''}`}
              onClick={() => setProblemTab('innovative')}
              style={{ padding: '8px 20px', borderRadius: '100px', fontSize: '13px' }}
            >
              {siteConfig.fullName} Technology
            </button>
          </div>
        </motion.div>

        <div className="problem-grid">
          <motion.div 
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="problem-card traditional" 
            style={{ 
              opacity: problemTab === 'innovative' ? 0.6 : 1, 
              border: problemTab === 'traditional' ? '1px solid var(--border)' : '1px solid transparent'
            }}
            whileHover={{ y: -4 }}
          >
            <div className="problem-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div className="problem-info">
              <h3>Traditional Concrete / Asphalt</h3>
              <p>Standard municipal development relies heavily on high-temperature manufacturing, virgin aggregate, and cement binder, leading to major eco-liability.</p>
            </div>
            <div className="problem-stats-list">
              <div className="problem-stat-row">
                <span className="stat-label">Carbon Footprint</span>
                <span className="stat-value">+380 kg CO2 / ton</span>
              </div>
              <div className="problem-stat-row">
                <span className="stat-label">Recycled Content</span>
                <span className="stat-value">0% to 5%</span>
              </div>
              <div className="problem-stat-row">
                <span className="stat-label">Expected Lifespan</span>
                <span className="stat-value">15 - 20 Years</span>
              </div>
              <div className="problem-stat-row">
                <span className="stat-label">Thermal Absorption</span>
                <span className="stat-value">Creates Heat Islands</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="problem-card innovative" 
            style={{ 
              opacity: problemTab === 'traditional' ? 0.6 : 1,
              border: problemTab === 'innovative' ? '1px solid var(--accent)' : '1px solid transparent'
            }}
            whileHover={{ y: -4 }}
          >
            <div className="problem-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div className="problem-info">
              <h3>{siteConfig.fullName} Material Solution</h3>
              <p>Our patented material binds multi-source recycled waste at low temperatures. Carbon is locked permanently into high-density interlocking infrastructure blocks.</p>
            </div>
            <div className="problem-stats-list">
              <div className="problem-stat-row">
                <span className="stat-label">Carbon Footprint</span>
                <span className="stat-value" style={{ color: 'var(--accent)' }}>-120 kg CO2 / ton</span>
              </div>
              <div className="problem-stat-row">
                <span className="stat-label">Recycled Content</span>
                <span className="stat-value" style={{ color: 'var(--accent)' }}>100% Recycled Matrix</span>
              </div>
              <div className="problem-stat-row">
                <span className="stat-label">Expected Lifespan</span>
                <span className="stat-value" style={{ color: 'var(--accent)' }}>50+ Years (Warranted)</span>
              </div>
              <div className="problem-stat-row">
                <span className="stat-label">Thermal Absorption</span>
                <span className="stat-value" style={{ color: 'var(--accent)' }}>Reflective Cool Material</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
