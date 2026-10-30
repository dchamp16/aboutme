export interface Certification {
  name: string;
  issuer: string;
  methodologies?: string[];
  date?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "Root Cause Analysis (RCA) Specialized Credential",
    issuer: "American Society for Quality (ASQ)",
    methodologies: [
      "5 Whys",
      "Ishikawa (Fishbone) Diagrams",
      "Pareto Analysis",
      "Corrective & Preventive Actions (CAPA)",
      "Non-Conformance Investigations",
    ],
  },
];
