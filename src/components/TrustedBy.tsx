import { marqueeItems } from '../data/mockData';

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <h3 className="trusted-title">Trusted by Forward-Thinking Developers & Governments</h3>
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Set 1 */}
          {marqueeItems.map((item, index) => (
            <div className="marquee-item" key={`set1-${index}`}>
              <span style={{ color: 'var(--accent)' }}>✦</span> {item}
            </div>
          ))}
          {/* Set 2 (for continuous scroll) */}
          {marqueeItems.map((item, index) => (
            <div className="marquee-item" key={`set2-${index}`}>
              <span style={{ color: 'var(--accent)' }}>✦</span> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
