import type { Certificate } from "../types";
import { resolveMediaUrl } from "../services/api";

export default function Certificates({
  certificates,
}: {
  certificates: Certificate[];
}) {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="title">Certificates</h2>

        {certificates.length === 0 ? (
          <div className="empty">Certificates ჯერ არ არის დამატებული Admin-ში.</div>
        ) : (
          <div className="grid3">
            {certificates.map((c) => (
              <div key={c.id} className="card">
                {c.image ? (
                  <img
                    className="projectImg"
                    src={resolveMediaUrl(c.image)}
                    alt={c.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="projectImg" />
                )}

                <div className="projectName">{c.title}</div>

                <div className="muted">
                  {c.issued_by} • {c.year}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
