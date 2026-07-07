import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export default function ImpactCalculator() {
  const [projectSize, setProjectSize] = useState<number>(500);
  const [unit, setUnit] = useState<'sqm' | 'sqft'>('sqm');

  const calculateImpact = () => {
    const sizeInSqm = unit === 'sqm' ? projectSize : projectSize / 10.764;
    const plasticDiverted = Math.round(sizeInSqm * 25);
    const co2Offset = Math.round(sizeInSqm * 120);
    const waterSaved = Math.round(sizeInSqm * 150);

    return {
      plastic: plasticDiverted.toLocaleString(),
      co2: co2Offset.toLocaleString(),
      water: waterSaved.toLocaleString()
    };
  };

  const impact = calculateImpact();

  const metricsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const metricCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  return (
    <section id="impact" className="impact-section">
      <div className="container impact-grid">
        <div>
          <motion.div 
            className="section-header impact-header" 
            style={{ textAlign: 'left', margin: '0 0 40px 0' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gradient-light">Global Environmental Deliverables</h2>
            <p>Through active partnerships with developers and municipalities, we turn infrastructure goals into verifiable ESG impact metrics.</p>
          </motion.div>

          <motion.div 
            className="impact-metrics-cards"
            variants={metricsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="metric-card" variants={metricCardVariants} whileHover={{ y: -4 }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="metric-number">4,200T</div>
              <div className="metric-label">Plastic Recycled</div>
            </motion.div>

            <motion.div className="metric-card" variants={metricCardVariants} whileHover={{ y: -4 }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <div className="metric-number">18,500T</div>
              <div className="metric-label">CO2 Prevented</div>
            </motion.div>

            <motion.div className="metric-card" variants={metricCardVariants} whileHover={{ y: -4 }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <div className="metric-number">250,000+</div>
              <div className="metric-label">m² Installed</div>
            </motion.div>

            <motion.div className="metric-card" variants={metricCardVariants} whileHover={{ y: -4 }}>
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div className="metric-number">15.2M L</div>
              <div className="metric-label">Water Conserved</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Calculator Widget */}
        <motion.div 
          className="calculator-widget"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="calculator-title">Project ESG Impact Estimator</h3>
          <p className="calculator-desc">Enter your planned layout size to calculate direct environmental savings from selecting {siteConfig.fullName} products.</p>
          
          <div className="calc-inputs">
            <div className="form-group">
              <label className="calc-label">Est. Installation Area</label>
              <div className="calc-input-group">
                <input 
                  type="number" 
                  className="calc-input-field"
                  value={projectSize === 0 ? '' : projectSize}
                  onChange={(e) => setProjectSize(Math.max(0, parseInt(e.target.value) || 0))}
                  placeholder="Enter project size"
                />
                <button 
                  className={`calc-unit-toggle ${unit === 'sqm' ? 'active' : ''}`}
                  onClick={() => setUnit('sqm')}
                >
                  m²
                </button>
                <button 
                  className={`calc-unit-toggle ${unit === 'sqft' ? 'active' : ''}`}
                  onClick={() => setUnit('sqft')}
                >
                  sq ft
                </button>
              </div>
            </div>
          </div>

          <div className="calc-results">
            <div className="calc-result-item">
              <motion.div 
                key={impact.plastic}
                initial={{ opacity: 0, scale: 0.9, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.25, type: 'spring', stiffness: 200, damping: 15 }}
                className="calc-val"
              >
                {impact.plastic}
              </motion.div>
              <div className="calc-lbl">Plastic Diverted (kg)</div>
            </div>
            <div className="calc-result-item">
              <motion.div 
                key={impact.co2}
                initial={{ opacity: 0, scale: 0.9, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.25, type: 'spring', stiffness: 200, damping: 15 }}
                className="calc-val"
              >
                {impact.co2}
              </motion.div>
              <div className="calc-lbl">CO2 Absorbed/Saved (kg)</div>
            </div>
            <div className="calc-result-item">
              <motion.div 
                key={impact.water}
                initial={{ opacity: 0, scale: 0.9, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.25, type: 'spring', stiffness: 200, damping: 15 }}
                className="calc-val"
              >
                {impact.water}
              </motion.div>
              <div className="calc-lbl">Clean Water Saved (L)</div>
            </div>
          </div>
          
          <div style={{ marginTop: '24px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
            *Estimates are relative to standard ASTM C906 Concrete curing audits.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
