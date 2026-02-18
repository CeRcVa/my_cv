import type { SkillCategory } from "../types";

export default function Skills({ skills }: { skills: SkillCategory[] }) {
  return (
    <section id="skills" className="section sectionAlt">
      <div className="container">
        <h2 className="title">Skills</h2>

        {skills.length === 0 ? (
          <div className="empty">
            გთხოვთ მოითმინოთ 1 ან 2 წუთი რომ მონაცემები განახლდეს.
            Please wait 1 or 2 minutes for the data to refresh.
          </div>
        ) : (
          <div className="grid3">
            {skills.map((cat) => (
              <div className="card" key={cat.id}>
                <div className="cardTitle">{cat.name}</div>

                {cat.skills?.length ? (
                  <ul className="list">
                    {cat.skills.map((s) => (
                      <li key={s.id}>{s.name}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="muted">No skills in this category yet.</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
