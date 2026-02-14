import type { Profile } from "../types";
import { resolveMediaUrl } from "../services/api";

export default function About({ profile }: { profile: Profile | null }) {
  return (
    <section id="about" className="section hero">
      <div className="container heroGrid">
        <div>
          <div className="kicker">PORTFOLIO</div>

          <h1 className="h1">
            Hi, I’m <span>{profile?.name ?? "Your Name"}</span>
          </h1>

          <div className="sub">
            <b>{profile?.profession}</b>
            <div style={{ height: 10 }} />
            {profile?.about}
          </div>

          <div className="btnRow">
            <a className="btn btnPrimary" href="#projects">View Projects →</a>
            <a className="btn" href="#skills">My Skills</a>
          </div>
        </div>

        <div className="avatarWrap">
          {profile?.photo ? (
            <img className="avatar" src={resolveMediaUrl(profile?.photo)} alt={profile?.name ?? "Profile"} />
          ) : (
            <div className="avatar" />
          )}
        </div>
      </div>
    </section>
  );
}
