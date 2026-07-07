import { siteConfig } from '../config/siteConfig';

export default function Technology() {
  return (
    <section id="tech" style={{ background: 'var(--bg-slate)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="text-gradient">Inside the Science</h2>
          <p>Our material technology is built on molecular composite locking. Here is how we bypass traditional high-emissions concrete kiln processing.</p>
        </div>

        <div className="tech-row">
          <div className="tech-image">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Polymer science lab" />
          </div>
          <div className="tech-content">
            <h3>Cold Fusion Binding Matrix</h3>
            <p>Standard cement requires limestone kilns heated to 1450°C. {siteConfig.fullName} uses custom, high-density polymer matrices that form tight crystalline bonds under cold pressure. This locks plastic waste permanently, preventing degradation.</p>
            <div className="tech-bullets">
              <div className="bullet-item">
                <div className="bullet-icon">✦</div>
                <div className="bullet-text">
                  <strong>Zero-Heat Curing</strong>
                  <p>Reduces active fabrication emissions by up to 90% compared to typical masonry kilns.</p>
                </div>
              </div>
              <div className="bullet-item">
                <div className="bullet-icon">✦</div>
                <div className="bullet-text">
                  <strong>Micro-Plastic Shield</strong>
                  <p>Chemical encapsulation blocks UV rays, ensuring zero micro-plastic leaching over decades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-row">
          <div className="tech-content">
            <h3>Engineered for High-Stress Loading</h3>
            <p>Circular materials often suffer from fatigue issues. {siteConfig.fullName} utilizes composite reinforcement techniques to build an interlocking matrix that handles high compression loads and extreme weathering without cracking.</p>
            <div className="tech-bullets">
              <div className="bullet-item">
                <div className="bullet-icon">✦</div>
                <div className="bullet-text">
                  <strong>Elastic Performance</strong>
                  <p>Higher tensile flexibility than concrete, preventing fractures during freeze-thaw cycles.</p>
                </div>
              </div>
              <div className="bullet-item">
                <div className="bullet-icon">✦</div>
                <div className="bullet-text">
                  <strong>Interlocking Geometries</strong>
                  <p>Designed with tight bevels for seamless surface leveling, preventing shifting under heavy traffic.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-image">
            <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80" alt="Testing compression load" />
          </div>
        </div>
      </div>
    </section>
  );
}
