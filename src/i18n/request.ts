import { getRequestConfig } from "next-intl/server";
import { routing, type SupportedLocales } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const finalLocale: SupportedLocales =
    locale && routing.locales.includes(locale as SupportedLocales)
      ? (locale as SupportedLocales)
      : (routing.defaultLocale as SupportedLocales);

  return {
    locale: finalLocale,
    messages: (await import(`../messages/${finalLocale}.json`)).default,
  };
});
