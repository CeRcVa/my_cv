import type { Certificate } from "../types";
import { resolveMediaUrl } from "../services/api";

import c1 from "../assets/certificate/certificate1.png";
import c2 from "../assets/certificate/certificate2.png";

const certificateImages: Record<string, string> = {
  "BACKEND DEVELOMENT": c1,
  "FRONTEND DEVELOPMENT: REACT": c2,
};

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
          <div className="empty">
            გთხოვთ მოითმინოთ 1 ან 2 წუთი რომ მონაცემები განახლდეს.
            Please wait 1 or 2 minutes for the data to refresh.
          </div>
        ) : (
          <div className="grid3">
            {certificates.map((c) => {
              const imgSrc =
                (c.image ? resolveMediaUrl(c.image) : "") ||
                certificateImages[c.title] ||
                "";

              return (
                <div key={c.id} className="card">
                  {imgSrc ? (
                    <img
                      className="projectImg"
                      src={imgSrc}
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
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
