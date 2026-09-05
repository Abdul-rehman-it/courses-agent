import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function CourseNotFound() {
  return (
    <main className="bg-paper pt-28 pb-16">
      <Container>
        <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
          Course not found
        </h1>
        <p className="mt-3 max-w-md text-muted">
          That course isn’t available. See the four courses on the home page.
        </p>
        <Button href="/#courses" className="mt-6">
          View courses
        </Button>
      </Container>
    </main>
  );
}
