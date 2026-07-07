import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { testimonials } from '../data/mockData';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section style={{ overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gradient">Endorsed by Industry Leaders</h2>
          <p>Here is how civil developers, urban planners, and environmental leads describe the performance of {siteConfig.fullName}.</p>
        </motion.div>

        <div className="testimonials-wrapper" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', minHeight: '320px', display: 'flex', alignItems: 'stretch' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentTestimonial}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-card"
                style={{ width: '100%' }}
              >
                <div className="testimonial-logo" style={{ letterSpacing: '3px', fontWeight: '800', color: 'var(--accent)' }}>
                  {testimonials[currentTestimonial].company}
                </div>
                <p className="testimonial-quote">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="testimonial-author">
                  <span className="author-name">{testimonials[currentTestimonial].author}</span>
                  <span className="author-role">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-controls">
            <button 
              className="control-btn"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button 
              className="control-btn"
              onClick={handleNext}
              aria-label="Next Testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
