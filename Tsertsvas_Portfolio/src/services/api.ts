import axios from "axios";

console.log("VITE_API_BASE =", import.meta.env.VITE_API_BASE);

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE}/api/`,
});

export async function getProfile() {
  const res = await api.get("profile/");
  return res.data as any;
}

export async function getSkillCategories() {
  const res = await api.get("skill-categories/");
  return res.data as any;
}

export async function getProjects() {
  const res = await api.get("projects/");
  return res.data as any;
}

export async function getCourses() {
  const res = await api.get("courses/");
  return res.data;
}

export async function getCertificates() {
  const res = await api.get("certificates/");
  return res.data;
}

export async function getContacts() {
  const res = await api.get("contacts/");
  return res.data;
}

export function resolveMediaUrl(url?: string | null) {
  if (!url) return "";

  // backend sometimes returns absolute url already
  if (url.startsWith("http://") || url.startsWith("https://")) return url;

  // if it starts with /media/... -> same origin in docker, or API_BASE+path in local
  if (url.startsWith("/")) return `${API_BASE}${url}`;

  return `${API_BASE}/${url}`;
}

