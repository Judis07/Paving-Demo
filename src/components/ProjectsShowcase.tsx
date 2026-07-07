import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { projects } from '../data/mockData';

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="showcase">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gradient">Proof in the Ground</h2>
          <p>Explore architectural projects and municipal layouts constructed with {siteConfig.fullName} materials across the globe.</p>
        </motion.div>

        <motion.div 
          className="showcase-filters"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'walkway' ? 'active' : ''}`}
            onClick={() => setActiveFilter('walkway')}
          >
            Walkways & Parks
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
            onClick={() => setActiveFilter('corporate')}
          >
            Corporate Campus
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'parking' ? 'active' : ''}`}
            onClick={() => setActiveFilter('parking')}
          >
            Permeable Plazas & Lots
          </button>
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="project-card" 
                key={project.id}
                whileHover={{ y: -6 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-location">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
