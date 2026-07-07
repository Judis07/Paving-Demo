import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  const statContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-tag" variants={itemVariants}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Carbon-Negative Infrastructure Pioneers
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Building Carbon-Negative Infrastructure.
          </motion.h1>
          
          <motion.p className="hero-desc" variants={itemVariants}>
            {siteConfig.fullName} {siteConfig.description}
          </motion.p>
          
          <motion.div className="hero-ctas" variants={itemVariants}>
            <a href="#products" className="btn btn-primary">
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#impact" className="btn btn-secondary">See Our Impact</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-stats"
          variants={statContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="floating-stat" 
            variants={statVariants}
            whileHover={{ scale: 1.04, translateY: -6 }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <div className="stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="stat-info">
              <h4>-120kg CO2/m²</h4>
              <p>Carbon Net Storage</p>
            </div>
          </motion.div>

          <motion.div 
            className="floating-stat" 
            variants={statVariants}
            whileHover={{ scale: 1.04, translateY: -6 }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <div className="stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            </div>
            <div className="stat-info">
              <h4>100% Recycled</h4>
              <p>Waste Diverted</p>
            </div>
          </motion.div>

          <motion.div 
            className="floating-stat" 
            variants={statVariants}
            whileHover={{ scale: 1.04, translateY: -6 }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <div className="stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div className="stat-info">
              <h4>85+ MPa</h4>
              <p>Compressive Strength</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
