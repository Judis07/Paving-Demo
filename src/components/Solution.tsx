import { motion } from 'framer-motion';

export default function Solution() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  return (
    <section id="solution" style={{ background: 'var(--bg-slate)' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gradient">Engineered Circularity</h2>
          <p>How we intercept municipal waste streams and convert them into heavy-duty infrastructure products through advanced material science.</p>
        </motion.div>

        <div className="solution-timeline-container">
          <div className="timeline-line"></div>
          <motion.div 
            className="timeline-progress" 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
          
          <motion.div 
            className="solution-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="solution-step" variants={stepVariants}>
              <div className="timeline-node">01</div>
              <h3>Waste Interception</h3>
              <p>We source local mixed plastics and industrial aggregates that would otherwise pollute oceans or fill municipal landfills.</p>
            </motion.div>

            <motion.div className="solution-step" variants={stepVariants}>
              <div className="timeline-node">02</div>
              <h3>Cold Micronization</h3>
              <p>Materials are processed using low-energy, eco-efficient crushing technology to create structural micro-fillers.</p>
            </motion.div>

            <motion.div className="solution-step" variants={stepVariants}>
              <div className="timeline-node">03</div>
              <h3>Polymer Engineering</h3>
              <p>Our patented binder coats particles without carbon-heavy heating, creating a super-dense molecular lock.</p>
            </motion.div>

            <motion.div className="solution-step" variants={stepVariants}>
              <div className="timeline-node">04</div>
              <h3>Premium Paving</h3>
              <p>Materials are pressed into interlocking modules, ready to build commercial plazas, public walkways, and urban roads.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
