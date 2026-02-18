import type { Project } from "../types";
import { resolveMediaUrl } from "../services/api";

import p1 from "../assets/projects/project1.png";
import p2 from "../assets/projects/project2.PNG";
import p3 from "../assets/projects/project3.PNG";

// 🔥 აქ ჩაწერე ზუსტად ის სახელები, რაც Admin-იდან მოდის (p.name)
const projectImages: Record<string, string> = {
  "GelGuru": p1,
  "Unsplash-project": p2,
  "Tsertsvas_Portfolio": p3,
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title">Projects</h2>

        {projects.length === 0 ? (
          <div className="empty">ჯერ Projects არ არის დამატებული Admin-ში.</div>
        ) : (
          <div className="grid3">
            {projects.map((p) => {
              const imgSrc =
                (p.image ? resolveMediaUrl(p.image) : "") ||
                projectImages[p.name] ||
                "";

              return (
                <div className="card" key={p.id}>
                  {imgSrc ? (
                    <img className="projectImg" src={imgSrc} alt={p.name} />
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
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
