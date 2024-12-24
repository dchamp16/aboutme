"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "../data/resume";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";

export default function Header() {
  const { contact, name } = resumeData;

  if (!contact || !name) {
    return null; // Return early if data is not available
  }

  return (
    <header className="bg-gradient-to-r from-primary/5 via-primary/10 to-background p-8 rounded-lg shadow-lg mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl ring-2 ring-primary/20">
            <Image
              src="/profile.jpeg"
              alt={name}
              width={192}
              height={192}
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
              <TooltipProvider>
                {contact.phone && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="hover:bg-primary/10" onClick={() => window.open(`tel:${contact.phone}`)}>
                        <Phone className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{contact.phone}</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {contact.email?.[0] && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="hover:bg-primary/10" onClick={() => window.open(`mailto:${contact.email[0]}`)}>
                        <Mail className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{contact.email[0]}</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {contact.github && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="hover:bg-primary/10" onClick={() => window.open(contact.github)}>
                        <Github className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Profile</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {contact.linkedin && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="hover:bg-primary/10" onClick={() => window.open(contact.linkedin)}>
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn Profile</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}