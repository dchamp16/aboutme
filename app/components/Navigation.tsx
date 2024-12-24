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
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={cn(
            "relative w-full px-4 py-2.5 text-sm font-medium transition-all duration-300",
            "hover:bg-primary/10 rounded-xl",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background",
            activeSection === item.id && [
              "bg-primary/10",
              "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
              "before:h-8 before:w-1 before:rounded-r-full before:bg-primary",
              "before:shadow-[0_0_12px_rgba(var(--primary)/0.2)]",
            ],
            isMobile && "text-left"
          )}
        >
          {item.label}
        </button>
      ))}
    </>
  );

  return (
    <>
      <nav
        className={cn(
          "fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-all duration-300",
          isScrolled ? "opacity-50 hover:opacity-100" : "opacity-100"
        )}
      >
        <div className="backdrop-blur-lg bg-background/80 p-3 rounded-2xl shadow-lg border border-border/50">
          <div className="flex flex-col gap-1 min-w-[140px]">
            <NavLinks />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-full h-10 rounded-xl hover:bg-primary/10"
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
            "p-2.5 rounded-xl transition-all duration-300",
            "hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20",
            isScrolled
              ? "bg-background/80 backdrop-blur-lg shadow-md"
              : "bg-background shadow-lg"
          )}
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[280px] p-6 backdrop-blur-xl bg-background/80"
        >
          <SheetHeader>
            <SheetTitle className="text-left text-lg font-semibold">
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
                className="w-full h-10 rounded-xl hover:bg-primary/10 justify-start px-4"
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
