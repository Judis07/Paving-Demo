import { motion } from 'framer-motion';
import { products } from '../data/mockData';

export default function Products() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  return (
    <section id="products">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gradient">Engineered Product Suite</h2>
          <p>Premium aesthetics meet advanced civil engineering. Discover our high-performance, carbon-negative product range.</p>
        </motion.div>

        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div 
              className={`bento-card ${product.sizeClass}`} 
              key={product.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.015,
                transition: { duration: 0.3 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <div className="bento-image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <span className="bento-tag">{product.tag}</span>
                <h3 className="bento-title">{product.title}</h3>
                <p className="bento-desc">{product.description}</p>
                <div className="bento-specs">
                  {product.specs.map((spec, specIdx) => (
                    <div className="spec-item" key={specIdx}>
                      <span className="spec-lbl">{spec.label}</span>
                      <span 
                        className="spec-val"
                        style={
                          spec.label === 'Embodied Carbon' 
                            ? { color: 'var(--accent-light)' } 
                            : undefined
                        }
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
