import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Certificates from "./components/Certificates";
import ContactSection from "./components/Contact";


import {
  getProfile,
  getSkillCategories,
  getProjects,
  getCourses,
  getCertificates,
  getContacts,
} from "./services/api";

import type {
  Profile,
  SkillCategory,
  Project,
  Course,
  Certificate,
  Contact,
} from "./types";

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    getProfile().then((data) => {
      const first = Array.isArray(data) ? data[0] : data;
      setProfile(first ?? null);
    });

    getSkillCategories().then((data) => {
      setSkills(Array.isArray(data) ? data : []);
    });

    getProjects().then((data) => {
      setProjects(Array.isArray(data) ? data : []);
    });

    getCourses().then((data) => {
      setCourses(Array.isArray(data) ? data : []);
    });

    getCertificates().then((data) => {
      setCertificates(Array.isArray(data) ? data : []);
    });

    getContacts().then((data) => {
      const first = Array.isArray(data) ? data[0] : data;
      setContact(first ?? null);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Courses courses={courses} />
        <Certificates certificates={certificates} />
        <ContactSection contact={contact} />
      </main>
    </>
  );
}
