"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";

interface ContactButtonProps {
  href: string;
  icon: LucideIcon;
  tooltip: string;
}

export function ContactButton({ href, icon: Icon, tooltip }: ContactButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="relative overflow-hidden group border-primary/20"
            onClick={() => window.open(href)}
          >
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            <Icon className="h-4 w-4 relative z-10 transition-transform group-hover:scale-110" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}