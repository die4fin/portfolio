import { Link } from "@/i18n/routing";
import React from "react";
import { Container } from "./Container";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Navigation() {
  return (
    <nav className="sticky top-0 left-0 z-40 w-full border-b border-[var(--color-border-subtle)] bg-[#0a0a0a]/70 backdrop-blur-[var(--blur-glass)]">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo Brand Anchor */}
          <Link
            href="/"
            className="text-[clamp(1rem,0.5vw+0.9rem,1.25rem)] font-bold tracking-tighter text-white transition-opacity hover:opacity-80"
          >
            LABS<span className="text-[var(--color-text-secondary)]">.</span>
          </Link>

          {/* Right Context Interaction Shell */}
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="/"
                className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-white"
              >
                Overview
              </Link>
              <a
                href="#projects"
                className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-white"
              >
                Projects
              </a>
            </div>
            <LocaleSwitcher />
          </div>
        </div>
      </Container>
    </nav>
  );
}
