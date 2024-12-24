"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }).ready.then(() => {
        document.documentElement.style.setProperty('--transition-speed', '200ms')
      })
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative overflow-hidden backdrop-blur-sm bg-background/30 hover:bg-primary/10"
      onClick={toggleTheme}
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-200 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-200 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}