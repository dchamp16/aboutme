"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("summary");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { id: "summary", label: "Summary" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 10);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleTheme = () => {
    // Fallback if `startViewTransition` is not supported
    if (typeof (document as any).startViewTransition === "function") {
      (document as any).startViewTransition(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    } else {
      // Simple fallback for unsupported environments
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={cn(
            "flex w-full items-baseline gap-3 rounded-md px-3 py-2 font-sans text-sm transition-colors",
            "hover:text-foreground",
            "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-background",
            activeSection === item.id
              ? "font-semibold text-foreground"
              : "text-muted-foreground",
            isMobile && "text-left"
          )}
        >
          <span
            className={cn(
              "font-mono text-xs tabular-nums",
              activeSection === item.id ? "text-primary" : "text-border"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.label}
        </button>
      ))}
    </>
  );

  return (
    <>
      <nav
        className={cn(
          "fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block transition-opacity duration-300",
          isScrolled ? "opacity-60 hover:opacity-100" : "opacity-100"
        )}
      >
        <div className="rounded-md border border-border bg-background p-2">
          <div className="flex min-w-[160px] flex-col gap-1">
            <NavLinks />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mt-1 h-9 w-full rounded-md hover:bg-muted"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>

      <Sheet>
        <SheetTrigger
          className={cn(
            "fixed right-4 top-4 z-50 lg:hidden",
            "rounded-md border border-border bg-background p-2.5 transition-colors",
            "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
          )}
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-background p-6">
          <SheetHeader>
            <SheetTitle className="text-left font-sans text-lg font-semibold">
              Navigation
            </SheetTitle>
          </SheetHeader>
          <div className="mt-8">
            <div className="space-y-1">
              <NavLinks isMobile />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-10 w-full justify-start rounded-md px-4 hover:bg-muted"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="ml-2">Toggle theme</span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
