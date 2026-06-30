import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export type SupportedLocales = "en" | "id" | "zh" | "ko";

export const routing = defineRouting({
  locales: ["en", "id", "zh", "ko"] as SupportedLocales[],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
