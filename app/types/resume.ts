// Define types for resume data
export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Course {
  code: string;
  name: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  courses?: Course[];
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  dates: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  repository: string;
  website?: string;
}

export interface Contact {
  phone: string;
  email: string[];
  github: string;
  linkedin: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  os: string[];
  cloudAndDevops: string[];
  systemAdminAndIt: string[];
  developmentTools: string[];
}

export interface ResumeData {
  contact: Contact;
  name: string;
  summary: string;
  skills: Skills;
  education: Education[];
  experience: Experience[];
  projects: Project[];
}