import { awards } from '../data/mockData';

export default function Awards() {
  return (
    <section style={{ background: 'var(--bg-slate)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="text-gradient">Accreditation & Milestones</h2>
          <p>Our technologies and materials are validated by sustainability boards, materials science journals, and green build councils.</p>
        </div>

        <div className="awards-timeline">
          {awards.map((award) => (
            <div className="awards-item" key={award.id}>
              <div className="awards-dot"></div>
              <div className="awards-year">{award.year}</div>
              <div className="awards-content">
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
