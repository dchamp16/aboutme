"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { resumeData } from "../../data/resume";
import { ContactButton } from "./ContactButton";
import { ProfileImage } from "./ProfileImage";

export default function Header() {
  const { contact, name } = resumeData;

  if (!contact || !name) {
    return null;
  }

  return (
    <header className="mb-10 border-b border-border pb-10">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <ProfileImage name={name} />
        <div className="text-center md:text-left">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Full-Stack Engineer
          </p>
          <h1 className="font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {contact.phone && (
              <ContactButton
                href={`tel:${contact.phone}`}
                icon={Phone}
                tooltip={contact.phone}
              />
            )}
            {contact.email?.[0] && (
              <ContactButton
                href={`mailto:${contact.email[0]}`}
                icon={Mail}
                tooltip={contact.email[0]}
              />
            )}
            {contact.github && (
              <ContactButton
                href={contact.github}
                icon={Github}
                tooltip="GitHub Profile"
              />
            )}
            {contact.linkedin && (
              <ContactButton
                href={contact.linkedin}
                icon={Linkedin}
                tooltip="LinkedIn Profile"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}