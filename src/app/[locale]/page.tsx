import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { Noise } from "@/components/shared/Noise";

export default function HomePage() {
  return (
    <>
      <Noise />
      <CustomCursor />

      <main className="relative min-h-screen">
        <Section>
          <Container>
            <Grid cols={12}>
              <div className="md:col-span-8 md:col-start-1">
                <Text variant="caption" className="mb-[var(--spacing-fluid-s)]">
                  Architectural Platform Baseline v1.0
                </Text>
                <Heading variant="display" as="h1" className="mb-[var(--spacing-fluid-m)]">
                  SYSTEMS ENGINEERING
                </Heading>
                <Text variant="body" className="max-w-[600px]">
                  An award-winning platform engineered for absolute performance, high-fidelity
                  editorial typography, and accessible system design layout interfaces.
                </Text>
              </div>
            </Grid>
          </Container>
        </Section>
      </main>
    </>
  );
}
