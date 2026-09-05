import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CourseCard } from "@/components/landing/CourseCard";
import { courses } from "@/lib/content";

export function CourseOverview() {
  return (
    <section
      id="courses"
      className="scroll-mt-24 overflow-x-clip bg-paper py-16 sm:py-20"
      aria-labelledby="courses-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="courses-heading"
            eyebrow="Courses"
            title="Four courses. Pick the skill you want to build."
            description="Graphic designing, web development, UI/UX, and SEO — each with clear details, pricing, and a way to get in touch."
          />
        </Reveal>
        <div className="mt-10 grid min-w-0 auto-rows-fr gap-5 md:grid-cols-2">
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.05} className="h-full min-w-0">
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
