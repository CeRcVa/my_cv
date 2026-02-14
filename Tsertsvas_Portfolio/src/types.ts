export interface Profile {
  id: number;
  name: string;
  profession: string;
  about: string;
  photo: string | null;
}

export interface Skill {
  id: number;
  name: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string | null;
  link: string | null;
}

export interface Course {
  id: number;
  name: string;
  platform: string;
  year: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  image: string | null;
  issued_by: string;
  year: string;
}

export interface Contact {
  id: number;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}
