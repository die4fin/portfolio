import { Text } from "@/components/primitives/Text";
import React from "react";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--color-border-subtle)] bg-neutral-950 py-[clamp(2.25rem,2.5vw+1.5rem,4.5rem)]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Text variant="secondary" className="text-sm">
            © {currentYear} InFinnity Labs. Engineered with absolute mathematical precision.
          </Text>
          <div className="flex gap-6 text-sm text-[var(--color-text-secondary)]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
