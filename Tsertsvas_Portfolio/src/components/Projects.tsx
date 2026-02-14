import type { Project } from "../types";
import { resolveMediaUrl } from "../services/api";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title">Projects</h2>

        {projects.length === 0 ? (
          <div className="empty">ჯერ Projects არ არის დამატებული Admin-ში.</div>
        ) : (
          <div className="grid3">
            {projects.map((p) => (
              <div className="card" key={p.id}>
                {p.image ? (
                  <img
                    className="projectImg"
                    src={resolveMediaUrl(p.image ?? "")}
                    alt={p.name}
                  />
                ) : (
                  <div className="projectImg" />
                )}

                <div className="projectName">{p.name}</div>
                <p className="projectDesc">{p.description}</p>

                {p.link ? (
                  <a
                    className="projectLink"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project →
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
