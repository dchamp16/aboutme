import { resumeData } from "./resume";
import type { Experience, SkillCategory } from "../types/resume";

export type Role = "software" | "it" | "manufacturing";

export interface RoleProfile {
  label: string;
  roleTitle: string;
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
}

const manufacturingExperience: Experience[] = [
  {
    position: "Composite Technician III Lead / Trainer",
    company: "Albany International",
    location: "Salt Lake, UT",
    dates: "September 2025 - Present",
    responsibilities: [
      "Independently inspect and accept designated manufacturing operations using authorized Operator Self-Verification (OSV) stamps.",
      "Inspect and approve completed work using authorized Operator Self-Verification (OSV) stamps.",
      "Lead daily aerospace composite production operations, coordinating technicians, tooling, materials, and production priorities to meet quality and manufacturing requirements.",
      "Train and mentor Level II technicians on manufacturing procedures, quality standards, safety requirements, and work instructions.",
      "Reduced production waste by over 15% through Lean manufacturing and process improvements, earning management recognition.",
      "Identify production defects and quality concerns, communicate issues to appropriate personnel, and support corrective-action activities.",
      "Ensure manufacturing operations comply with approved work instructions, specifications, and inspection requirements.",
    ],
  },
  {
    position: "Structure Assembly II Proficient",
    company: "Albany International",
    location: "Salt Lake, UT",
    dates: "March 2024 - September 2025",
    responsibilities: [
      "Work on aerospace composite parts while following work instructions and quality requirements.",
      "Work with engineering and quality teams to find production problems and help fix quality issues.",
      "Help other technicians understand work instructions, manufacturing procedures, and quality requirements.",
      "Help improve production processes and reduce material waste.",
    ],
  },
];

const technicalExperience = resumeData.experience.filter(
  (entry) => entry.position !== "Composite Technician II Trainer"
);

const webExperience = technicalExperience.filter(
  (entry) => entry.position.startsWith("Web Developer")
);
const itExperience = technicalExperience.filter(
  (entry) => !entry.position.startsWith("Web Developer")
);

export const roleProfiles: Record<Role, RoleProfile> = {
  software: {
    label: "Software",
    roleTitle: "Software Engineer",
    summary: "Full-stack software engineer with experience building responsive web applications, backend APIs, database-driven systems, and cloud-integrated solutions. Currently pursuing an M.S. in Artificial Intelligence and Machine Learning. Proven ability to build secure, scalable applications, improve technical processes, and collaborate across technical teams.",
    skills: [
      { title: "Programming Languages", skills: ["Python", "JavaScript", "TypeScript", "C#", "C", "C++"] },
      { title: "Frontend", skills: ["React.js", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
      { title: "Backend", skills: ["Node.js", "Express.js", ".NET", "RESTful APIs", "Server-side Rendering"] },
      { title: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL", "SQL", "Snowflake"] },
      { title: "Cloud & DevOps", skills: ["AWS", "Google Cloud Platform", "Docker", "CI/CD Pipelines"] },
      { title: "Development Tools", skills: ["Git", "Visual Studio Code", "JetBrains IDEs", "Figma"] },
      { title: "IT & Systems", skills: ["Microsoft 365", "Entra ID", "SharePoint", "DNS Security"] },
    ],
    experience: [...webExperience, ...itExperience, ...manufacturingExperience],
  },
  it: {
    label: "IT",
    roleTitle: "IT Administrator",
    summary: "IT Administrator with hands-on experience in Microsoft 365, Entra ID, SharePoint, user support, identity and access management, and email/security administration. Currently pursuing an M.S. in Artificial Intelligence and Machine Learning. Experienced in troubleshooting hardware, software, network, and Microsoft 365 issues while improving security and technical operations.",
    skills: [
      { title: "System Administration & IT", skills: ["Microsoft 365 Admin Center", "Entra ID", "Active Directory", "SharePoint Administration", "Technical Support", "Help Desk Operations", "Hardware Troubleshooting", "Backup Systems", "DNS Security (SPF, DKIM, DMARC)", "Microsoft Defender for Office 365"] },
      { title: "OS & Infrastructure", skills: ["Windows", "macOS", "Linux", "Windows Server", "Network Management"] },
      { title: "Cloud & DevOps", skills: ["AWS", "Google Cloud Platform", "Docker", "CI/CD Pipelines"] },
      { title: "Programming/Scripting", skills: ["Python", "JavaScript", "TypeScript", "C#"] },
      { title: "Databases", skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"] },
    ],
    experience: [...itExperience, ...webExperience, ...manufacturingExperience],
  },
  manufacturing: {
    label: "Manufacturing",
    roleTitle: "Manufacturing & Quality Technician",
    summary: "Results-driven Quality & Manufacturing professional with over 2 years of aerospace composite manufacturing and inspection experience, combined with a strong technical background in STEM and data-driven problem solving. Certified in Root Cause Analysis (RCA) by the American Society for Quality (ASQ). Authorized to inspect and approve aerospace assemblies via Operator Self-Verification (OSV). Experienced in partnering with quality and design engineering teams to investigate non-conformances, perform root cause corrective actions (RCCA), lower defect rates, and train production teams to strict regulatory standards. Holds a B.S. in Computer Science and is pursuing an M.S. in AI/Machine Learning.",
    skills: [
      { title: "Quality & Inspection", skills: ["Root Cause Corrective Action (RCCA / CAPA)", "Operator Self-Verification (OSV)", "Non-Conformance Investigations", "Quality Inspection & Acceptance", "Defect Tracking", "Sampling & Inspection"] },
      { title: "Aerospace Manufacturing", skills: ["Composite Manufacturing", "Structure Assembly", "Calipers", "Micrometers", "Engineering Drawing Interpretation", "Manufacturing Specifications"] },
      { title: "Quality Documentation", skills: ["Work Instructions", "Customer Drawings", "Production Documentation", "Inspection Requirements", "Corrective Action Support"] },
      { title: "Lean & Leadership", skills: ["Lean Manufacturing", "Continuous Improvement", "Waste Reduction", "Root-Cause Problem Solving", "Technician Training", "Team Coordination"] },
      { title: "Technical & Analytical", skills: ["Microsoft Excel", "Python", "SQL", "Data Tracking", "Technical Documentation"] },
    ],
    experience: [...manufacturingExperience, ...itExperience, ...webExperience],
  },
};
