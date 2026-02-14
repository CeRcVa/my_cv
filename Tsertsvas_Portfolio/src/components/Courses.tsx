import type { Course } from "../types";

export default function Courses({ courses }: { courses: Course[] }) {
  return (
    <section id="courses" className="section sectionAlt">
      <div className="container">
        <h2 className="title">Courses</h2>

        {courses.length === 0 ? (
          <div className="empty">Courses ჯერ არ არის დამატებული Admin-ში.</div>
        ) : (
          <div className="grid3">
            {courses.map((c) => (
              <div key={c.id} className="card">
                <div className="projectName">{c.name}</div>

                <div className="muted">
                  {c.platform} • {c.year}
                </div>

                <p className="projectDesc" style={{ marginTop: 10 }}>
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
