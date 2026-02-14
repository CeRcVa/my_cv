import type { Contact } from "../types";

export default function ContactSection({ contact }: { contact: Contact | null }) {
  if (!contact) return null;

  return (
    <section id="contact" className="section sectionAlt">
      <div className="container">
        <h2 className="title">Contact</h2>

        <div className="grid3">
          <div className="card">
            <b>📞 Phone</b>
            <div>{contact.phone}</div>
          </div>

          <div className="card">
            <b>✉️ Email</b>
            <div>{contact.email}</div>
          </div>

          <div className="card">
            <b>🔗 LinkedIn</b>
            <a className="projectLink" href={contact.linkedin} target="_blank" rel="noreferrer">
              Open →
            </a>
          </div>

          <div className="card">
            <b>🧑‍💻 GitHub</b>
            <a className="projectLink" href={contact.github} target="_blank" rel="noreferrer">
              Open →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
