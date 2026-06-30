"use client";

import { type SupportedLocales, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ChevronDown, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";

const LANGUAGE_LABELS: Record<SupportedLocales, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  zh: "繁體中文",
  ko: "한국어",
};

export function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const activeLocale = useLocale() as SupportedLocales;
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLocaleChange(nextLocale: SupportedLocales) {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-neutral-900/50 px-4 py-1.5 text-[clamp(0.8rem,0.2vw+0.8rem,0.95rem)] font-medium text-[var(--color-text-primary)] backdrop-blur-[var(--blur-glass)] transition-all ease-out hover:border-[var(--color-border-strong)] active:scale-95 disabled:opacity-50",
          isOpen && "border-[var(--color-border-strong)] bg-neutral-800/80",
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4 text-[var(--color-text-secondary)]" />
        <span>{LANGUAGE_LABELS[activeLocale]}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-[var(--color-text-secondary)] transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-[var(--radius-editorial-m)] border border-[var(--color-border-subtle)] bg-neutral-950 p-1 shadow-[var(--shadow-premium)] animate-editorial-fade z-50">
          {(["en", "id", "zh", "ko"] as SupportedLocales[]).map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => handleLocaleChange(locale)}
              className={cn(
                "w-full text-left px-3 py-2 text-sm rounded-[var(--radius-editorial-s)] transition-colors duration-200 hover:bg-neutral-900",
                activeLocale === locale
                  ? "text-white font-medium bg-neutral-900"
                  : "text-[var(--color-text-secondary)]",
              )}
            >
              {LANGUAGE_LABELS[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
