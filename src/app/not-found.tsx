import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 items-center bg-paper pt-28 pb-16">
        <Container>
          <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
            Page not found
          </h1>
          <p className="mt-3 max-w-md text-muted">
            That page doesn’t exist. Head back to the courses.
          </p>
          <Button href="/#courses" className="mt-6">
            View courses
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
