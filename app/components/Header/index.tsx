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
    <header className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-background p-8 rounded-2xl shadow-lg mb-8 border border-primary/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_40%,rgba(var(--primary)/0.05)_50%,transparent_60%,transparent_100%)] animate-[gradient_15s_ease_infinite]" />
      <div className="relative max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
          <div className="animate-float">
            <ProfileImage name={name} />
          </div>
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                Full Stack Developer
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
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
      </div>
    </header>
  );
}