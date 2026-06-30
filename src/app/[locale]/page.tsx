import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { Noise } from "@/components/shared/Noise";
import { ArrowUpRight } from "lucide-react";
import { getMessages } from "next-intl/server";

// Mendefinisikan kontrak data untuk item proyek portofolio
interface ProjectItem {
  title: string;
  category: string;
  description: string;
}

// Mendefinisikan kontrak data untuk skema kontainer utama dari JSON messages
interface ProjectsSchema {
  title: string;
  viewProject: string;
  items: Record<string, ProjectItem>;
}

export default async function HomePage() {
  // Menarik seluruh pesan kamus data yang diisolasi di tingkat server (RSC)
  const messages = await getMessages();

  // Penegasan tipe data kaku untuk mengeliminasi penggunaan kata kunci 'any'
  const hero = messages.Hero as Record<string, string>;
  const projects = messages.Projects as unknown as ProjectsSchema;

  return (
    <>
      <Noise />
      <CustomCursor />

      <main className="relative min-h-screen">
        {/* --- Hero Section Layer --- */}
        <Section className="border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-canvas)]">
          <Container>
            <Grid cols={12}>
              <div className="md:col-span-10 md:col-start-1">
                <Text
                  variant="caption"
                  className="mb-[var(--spacing-fluid-s)] text-[var(--color-text-secondary)]"
                >
                  {hero.badge}
                </Text>
                <Heading
                  variant="display"
                  as="h1"
                  className="mb-[var(--spacing-fluid-m)] uppercase"
                >
                  {hero.title}
                </Heading>
                <Text
                  variant="body"
                  className="max-w-[720px] text-[var(--color-text-secondary)] leading-relaxed"
                >
                  {hero.description}
                </Text>
              </div>
            </Grid>
          </Container>
        </Section>

        {/* --- Projects Section Layer --- */}
        <Section id="projects" className="bg-neutral-950/40">
          <Container>
            <div className="mb-[var(--spacing-fluid-l)]">
              <Text variant="caption" className="mb-[var(--spacing-fluid-xs)]">
                01 / Showcase
              </Text>
              <Heading variant="h1" as="h2">
                {projects.title}
              </Heading>
            </div>

            <Grid cols={2} className="gap-[var(--spacing-fluid-m)]">
              {Object.keys(projects.items).map((key) => {
                const item = projects.items[key];
                return (
                  <div
                    key={key}
                    className="group relative flex flex-col justify-between rounded-[var(--radius-editorial-l)] border border-[var(--color-border-subtle)] bg-neutral-900/30 p-[var(--spacing-fluid-m)] backdrop-blur-[var(--blur-glass)] transition-all duration-300 hover:border-[var(--color-border-strong)] hover:bg-neutral-900/60"
                  >
                    <div>
                      <Text
                        variant="caption"
                        className="mb-[var(--spacing-fluid-xs)] text-[var(--color-text-secondary)]"
                      >
                        {item.category}
                      </Text>
                      <Heading
                        variant="h3"
                        as="h3"
                        className="mb-[var(--spacing-fluid-s)] transition-colors group-hover:text-white"
                      >
                        {item.title}
                      </Heading>
                      <Text
                        variant="secondary"
                        className="mb-[var(--spacing-fluid-m)] text-sm leading-relaxed line-clamp-3"
                      >
                        {item.description}
                      </Text>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-white opacity-60 transition-opacity group-hover:opacity-100 mt-auto pt-4 border-t border-neutral-900">
                      <span>{projects.viewProject}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                );
              })}
            </Grid>
          </Container>
        </Section>
      </main>
    </>
  );
}
