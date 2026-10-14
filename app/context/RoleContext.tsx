"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { roleProfiles, type Role } from "../data/roleProfiles";

const storageKey = "resume-role";
const roles: Role[] = ["software", "it", "manufacturing"];
const RoleContext = createContext<{
  role: Role;
  setRole: (role: Role) => void;
} | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("software");

  useEffect(() => {
    try {
      const savedRole = window.localStorage.getItem(storageKey);
      if (roles.includes(savedRole as Role)) setRole(savedRole as Role);
    } catch {
      // Role switching still works when browser storage is unavailable.
    }
  }, []);

  function selectRole(nextRole: Role) {
    setRole(nextRole);
    try {
      window.localStorage.setItem(storageKey, nextRole);
    } catch {
      // Keep the selection in memory when browser storage is unavailable.
    }
  }

  return (
    <RoleContext.Provider value={{ role, setRole: selectRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) throw new Error("useRole must be used within RoleProvider");
  return context;
}

export function RoleSwitcher() {
  const { role, setRole } = useRole();

  return (
    <div role="group" aria-label="Resume focus" className="flex flex-wrap gap-2 py-6">
      {roles.map((option) => (
        <Button
          key={option}
          type="button"
          variant={role === option ? "default" : "outline"}
          size="sm"
          aria-pressed={role === option}
          onClick={() => setRole(option)}
        >
          {roleProfiles[option].label}
        </Button>
      ))}
    </div>
  );
}
