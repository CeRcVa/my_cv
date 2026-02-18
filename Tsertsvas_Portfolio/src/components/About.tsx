import type { Profile } from "../types";
import profileImg from "../assets/profile.jpg";

export default function About({ profile }: { profile: Profile | null }) {
  return (
    <section id="about" className="section hero">
      <div className="container heroGrid">
        <div>
          <div className="kicker">PORTFOLIO</div>

          <h1 className="h1">
            Hi, I’m <span>{profile?.name ?? "..."}</span>
          </h1>

          <div className="sub">
            <b>{profile?.profession}</b>
            <div style={{ height: 10 }} />
            {profile?.about}
          </div>

          <div className="btnRow">
            <a className="btn btnPrimary" href="#projects">
              View Projects →
            </a>
            <a className="btn" href="#skills">
              My Skills
            </a>
          </div>
        </div>

        <div className="avatarWrap">
          <img
            src={profileImg}
            alt={profile?.name ?? "Profile"}
            className="avatarImg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
